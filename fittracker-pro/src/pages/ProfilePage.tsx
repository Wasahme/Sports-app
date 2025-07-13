import React, { useState } from 'react';
import { 
  UserIcon, 
  PencilIcon,
  CheckIcon,
  XMarkIcon,
  ScaleIcon
} from '@heroicons/react/24/outline';
import { useApp } from '../contexts/AppContext';
import { User, FitnessGoal } from '../types';

export function ProfilePage() {
  const { state, dispatch } = useApp();
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState<Partial<User>>({
    name: state.user?.name || '',
    email: state.user?.email || '',
    age: state.user?.age || 25,
    height: state.user?.height || 170,
    weight: state.user?.weight || 70,
    goal: state.user?.goal || 'fitness_improvement',
    unitSystem: state.user?.unitSystem || 'metric',
  });

  const fitnessGoals = [
    { value: 'muscle_gain', label: 'بناء العضلات' },
    { value: 'weight_loss', label: 'إنقاص الوزن' },
    { value: 'fitness_improvement', label: 'تحسين اللياقة' },
    { value: 'endurance', label: 'قوة التحمل' },
    { value: 'strength', label: 'القوة' },
  ];

  const handleInputChange = (field: keyof User, value: any) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSave = () => {
    if (state.user) {
      dispatch({
        type: 'UPDATE_USER',
        payload: {
          ...formData,
          updatedAt: new Date()
        }
      });
    } else {
      // إنشاء مستخدم جديد
      const newUser: User = {
        id: Date.now().toString(),
        name: formData.name || '',
        email: formData.email || '',
        age: formData.age || 25,
        height: formData.height || 170,
        weight: formData.weight || 70,
        goal: formData.goal as FitnessGoal || 'fitness_improvement',
        unitSystem: formData.unitSystem || 'metric',
        createdAt: new Date(),
        updatedAt: new Date(),
      };
      dispatch({ type: 'SET_USER', payload: newUser });
    }
    setIsEditing(false);
  };

  const handleCancel = () => {
    setFormData({
      name: state.user?.name || '',
      email: state.user?.email || '',
      age: state.user?.age || 25,
      height: state.user?.height || 170,
      weight: state.user?.weight || 70,
      goal: state.user?.goal || 'fitness_improvement',
      unitSystem: state.user?.unitSystem || 'metric',
    });
    setIsEditing(false);
  };

  const calculateBMI = () => {
    if (!state.user?.height || !state.user?.weight) return null;
    const heightInMeters = state.user.height / 100;
    const bmi = state.user.weight / (heightInMeters * heightInMeters);
    return bmi.toFixed(1);
  };

  const getBMICategory = (bmi: number) => {
    if (bmi < 18.5) return { category: 'نقص وزن', color: 'text-blue-600' };
    if (bmi < 25) return { category: 'وزن طبيعي', color: 'text-green-600' };
    if (bmi < 30) return { category: 'وزن زائد', color: 'text-yellow-600' };
    return { category: 'سمنة', color: 'text-red-600' };
  };

  const bmi = calculateBMI();
  const bmiCategory = bmi ? getBMICategory(parseFloat(bmi)) : null;

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* العنوان */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">الملف الشخصي</h1>
        <p className="text-gray-600">
          إدارة بياناتك الشخصية وأهدافك الرياضية
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* المعلومات الشخصية */}
        <div className="lg:col-span-2">
          <div className="card">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-gray-900">المعلومات الشخصية</h2>
              {!isEditing ? (
                <button
                  onClick={() => setIsEditing(true)}
                  className="btn-secondary flex items-center"
                >
                  <PencilIcon className="h-4 w-4 ml-1" />
                  تعديل
                </button>
              ) : (
                <div className="flex space-x-2 space-x-reverse">
                  <button
                    onClick={handleSave}
                    className="btn-success flex items-center"
                  >
                    <CheckIcon className="h-4 w-4 ml-1" />
                    حفظ
                  </button>
                  <button
                    onClick={handleCancel}
                    className="btn-danger flex items-center"
                  >
                    <XMarkIcon className="h-4 w-4 ml-1" />
                    إلغاء
                  </button>
                </div>
              )}
            </div>

            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    الاسم
                  </label>
                  {isEditing ? (
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      className="input-field"
                      placeholder="أدخل اسمك"
                    />
                  ) : (
                    <p className="text-gray-900">{state.user?.name || 'غير محدد'}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    البريد الإلكتروني
                  </label>
                  {isEditing ? (
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className="input-field"
                      placeholder="أدخل بريدك الإلكتروني"
                    />
                  ) : (
                    <p className="text-gray-900">{state.user?.email || 'غير محدد'}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    العمر
                  </label>
                  {isEditing ? (
                    <input
                      type="number"
                      value={formData.age}
                      onChange={(e) => handleInputChange('age', parseInt(e.target.value))}
                      className="input-field"
                      min="10"
                      max="100"
                    />
                  ) : (
                    <p className="text-gray-900">{state.user?.age || 'غير محدد'} سنة</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    الطول
                  </label>
                  {isEditing ? (
                    <div className="flex items-center space-x-2 space-x-reverse">
                      <input
                        type="number"
                        value={formData.height}
                        onChange={(e) => handleInputChange('height', parseInt(e.target.value))}
                        className="input-field"
                        min="100"
                        max="250"
                      />
                      <span className="text-gray-600">
                        {formData.unitSystem === 'metric' ? 'سم' : 'بوصة'}
                      </span>
                    </div>
                  ) : (
                    <p className="text-gray-900">
                      {state.user?.height || 'غير محدد'} {state.user?.unitSystem === 'metric' ? 'سم' : 'بوصة'}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    الوزن
                  </label>
                  {isEditing ? (
                    <div className="flex items-center space-x-2 space-x-reverse">
                      <input
                        type="number"
                        value={formData.weight}
                        onChange={(e) => handleInputChange('weight', parseFloat(e.target.value))}
                        className="input-field"
                        min="30"
                        max="300"
                        step="0.1"
                      />
                      <span className="text-gray-600">
                        {formData.unitSystem === 'metric' ? 'كجم' : 'رطل'}
                      </span>
                    </div>
                  ) : (
                    <p className="text-gray-900">
                      {state.user?.weight || 'غير محدد'} {state.user?.unitSystem === 'metric' ? 'كجم' : 'رطل'}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    الهدف الرياضي
                  </label>
                  {isEditing ? (
                    <select
                      value={formData.goal}
                      onChange={(e) => handleInputChange('goal', e.target.value)}
                      className="input-field"
                    >
                      {fitnessGoals.map(goal => (
                        <option key={goal.value} value={goal.value}>
                          {goal.label}
                        </option>
                      ))}
                    </select>
                  ) : (
                    <p className="text-gray-900">
                      {fitnessGoals.find(g => g.value === state.user?.goal)?.label || 'غير محدد'}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    نظام الوحدات
                  </label>
                  {isEditing ? (
                    <select
                      value={formData.unitSystem}
                      onChange={(e) => handleInputChange('unitSystem', e.target.value)}
                      className="input-field"
                    >
                      <option value="metric">متري (كجم، سم)</option>
                      <option value="imperial">إمبريالي (رطل، بوصة)</option>
                    </select>
                  ) : (
                    <p className="text-gray-900">
                      {state.user?.unitSystem === 'metric' ? 'متري' : 'إمبريالي'}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* الإحصائيات */}
        <div className="space-y-6">
          {/* مؤشر كتلة الجسم */}
          {bmi && (
            <div className="card">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">مؤشر كتلة الجسم</h3>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600 mb-2">{bmi}</div>
                <div className={`text-sm font-medium ${bmiCategory?.color}`}>
                  {bmiCategory?.category}
                </div>
              </div>
            </div>
          )}

          {/* إحصائيات سريعة */}
          <div className="card">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">إحصائيات سريعة</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-gray-600">إجمالي التمارين</span>
                <span className="font-semibold text-gray-900">{state.workoutSessions.length}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-600">الخطط النشطة</span>
                <span className="font-semibold text-gray-900">{state.workoutPlans.length}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-600">الإنجازات</span>
                <span className="font-semibold text-gray-900">{state.achievements.length}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-600">قياسات الجسم</span>
                <span className="font-semibold text-gray-900">{state.bodyMeasurements.length}</span>
              </div>
            </div>
          </div>

          {/* آخر تحديث */}
          {state.user?.updatedAt && (
            <div className="card">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">آخر تحديث</h3>
              <p className="text-sm text-gray-600">
                {state.user.updatedAt.toLocaleDateString('ar-SA')}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}