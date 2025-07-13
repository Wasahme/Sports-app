import React, { useState, useMemo } from 'react';
import { 
  MagnifyingGlassIcon, 
  FunnelIcon,
  PlayIcon,
  InformationCircleIcon
} from '@heroicons/react/24/outline';
import { exercises, getExercisesByMuscleGroup, getExercisesByDifficulty, getExercisesByEquipment } from '../data/exercises';
import { Exercise, MuscleGroup, DifficultyLevel, EquipmentType } from '../types';

export function ExercisesPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedMuscleGroup, setSelectedMuscleGroup] = useState<string>('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('all');
  const [selectedEquipment, setSelectedEquipment] = useState<string>('all');
  const [selectedExercise, setSelectedExercise] = useState<Exercise | null>(null);

  // تصفية التمارين
  const filteredExercises = useMemo(() => {
    let filtered = exercises;

    // تصفية حسب البحث
    if (searchQuery) {
      filtered = filtered.filter(exercise => 
        exercise.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        exercise.nameAr.includes(searchQuery) ||
        exercise.description.includes(searchQuery)
      );
    }

    // تصفية حسب المجموعة العضلية
    if (selectedMuscleGroup !== 'all') {
      filtered = filtered.filter(exercise => exercise.muscleGroup === selectedMuscleGroup);
    }

    // تصفية حسب مستوى الصعوبة
    if (selectedDifficulty !== 'all') {
      filtered = filtered.filter(exercise => exercise.difficulty === selectedDifficulty);
    }

    // تصفية حسب المعدات
    if (selectedEquipment !== 'all') {
      filtered = filtered.filter(exercise => exercise.equipment === selectedEquipment);
    }

    return filtered;
  }, [searchQuery, selectedMuscleGroup, selectedDifficulty, selectedEquipment]);

  // خيارات التصفية
  const muscleGroups = [
    { value: 'all', label: 'جميع المجموعات' },
    { value: 'chest', label: 'الصدر' },
    { value: 'back', label: 'الظهر' },
    { value: 'legs', label: 'الأرجل' },
    { value: 'shoulders', label: 'الكتفين' },
    { value: 'arms', label: 'الذراعين' },
    { value: 'core', label: 'الجذع' },
    { value: 'full_body', label: 'الجسم كاملاً' },
  ];

  const difficulties = [
    { value: 'all', label: 'جميع المستويات' },
    { value: 'beginner', label: 'مبتدئ' },
    { value: 'intermediate', label: 'متوسط' },
    { value: 'advanced', label: 'متقدم' },
  ];

  const equipment = [
    { value: 'all', label: 'جميع المعدات' },
    { value: 'bodyweight', label: 'وزن الجسم' },
    { value: 'free_weight', label: 'أوزان حرة' },
    { value: 'machine', label: 'آلات' },
    { value: 'none', label: 'لا شيء' },
  ];

  const getDifficultyColor = (difficulty: DifficultyLevel) => {
    switch (difficulty) {
      case 'beginner': return 'text-green-600 bg-green-100';
      case 'intermediate': return 'text-yellow-600 bg-yellow-100';
      case 'advanced': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getEquipmentIcon = (equipment: EquipmentType) => {
    switch (equipment) {
      case 'bodyweight': return '🏃';
      case 'free_weight': return '🏋️';
      case 'machine': return '⚙️';
      case 'none': return '✨';
      default: return '💪';
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* العنوان */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">مكتبة التمارين</h1>
        <p className="text-gray-600">
          اكتشف أكثر من {exercises.length} تمرين مصنف حسب المجموعات العضلية والمستويات
        </p>
      </div>

      {/* البحث والتصفية */}
      <div className="mb-8 space-y-4">
        {/* شريط البحث */}
        <div className="relative">
          <MagnifyingGlassIcon className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
          <input
            type="text"
            placeholder="ابحث عن التمارين..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="input-field pr-10"
          />
        </div>

        {/* فلاتر التصفية */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <select
            value={selectedMuscleGroup}
            onChange={(e) => setSelectedMuscleGroup(e.target.value)}
            className="input-field"
          >
            {muscleGroups.map(group => (
              <option key={group.value} value={group.value}>
                {group.label}
              </option>
            ))}
          </select>

          <select
            value={selectedDifficulty}
            onChange={(e) => setSelectedDifficulty(e.target.value)}
            className="input-field"
          >
            {difficulties.map(difficulty => (
              <option key={difficulty.value} value={difficulty.value}>
                {difficulty.label}
              </option>
            ))}
          </select>

          <select
            value={selectedEquipment}
            onChange={(e) => setSelectedEquipment(e.target.value)}
            className="input-field"
          >
            {equipment.map(eq => (
              <option key={eq.value} value={eq.value}>
                {eq.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* نتائج البحث */}
      <div className="mb-4">
        <p className="text-gray-600">
          تم العثور على {filteredExercises.length} تمرين
        </p>
      </div>

      {/* قائمة التمارين */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredExercises.map((exercise) => (
          <div key={exercise.id} className="card hover:shadow-lg transition-shadow duration-200">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">
                  {exercise.nameAr}
                </h3>
                <p className="text-sm text-gray-600">{exercise.name}</p>
              </div>
              <span className="text-2xl">{getEquipmentIcon(exercise.equipment)}</span>
            </div>

            <p className="text-gray-700 mb-4 line-clamp-2">
              {exercise.description}
            </p>

            <div className="flex items-center justify-between mb-4">
              <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(exercise.difficulty)}`}>
                {difficulties.find(d => d.value === exercise.difficulty)?.label}
              </span>
              <span className="text-sm text-gray-600 capitalize">
                {muscleGroups.find(m => m.value === exercise.muscleGroup)?.label}
              </span>
            </div>

            <div className="flex space-x-2 space-x-reverse">
              <button
                onClick={() => setSelectedExercise(exercise)}
                className="flex-1 btn-secondary flex items-center justify-center"
              >
                <InformationCircleIcon className="h-4 w-4 ml-1" />
                التفاصيل
              </button>
              <button className="flex-1 btn-primary flex items-center justify-center">
                <PlayIcon className="h-4 w-4 ml-1" />
                ابدأ
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* تفاصيل التمرين */}
      {selectedExercise && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-1">
                    {selectedExercise.nameAr}
                  </h2>
                  <p className="text-gray-600">{selectedExercise.name}</p>
                </div>
                <button
                  onClick={() => setSelectedExercise(null)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">الوصف</h3>
                  <p className="text-gray-700">{selectedExercise.description}</p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-1">المجموعة العضلية</h4>
                    <p className="text-gray-600">
                      {muscleGroups.find(m => m.value === selectedExercise.muscleGroup)?.label}
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-1">مستوى الصعوبة</h4>
                    <p className="text-gray-600">
                      {difficulties.find(d => d.value === selectedExercise.difficulty)?.label}
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-1">المعدات المطلوبة</h4>
                    <p className="text-gray-600">
                      {equipment.find(e => e.value === selectedExercise.equipment)?.label}
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-1">نوع التمرين</h4>
                    <p className="text-gray-600 capitalize">{selectedExercise.exerciseType}</p>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">طريقة الأداء</h3>
                  <ol className="list-decimal list-inside space-y-1 text-gray-700">
                    {selectedExercise.instructions.map((instruction, index) => (
                      <li key={index}>{instruction}</li>
                    ))}
                  </ol>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">نصائح مهمة</h3>
                  <ul className="list-disc list-inside space-y-1 text-gray-700">
                    {selectedExercise.tips.map((tip, index) => (
                      <li key={index}>{tip}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">ملاحظات السلامة</h3>
                  <ul className="list-disc list-inside space-y-1 text-red-700">
                    {selectedExercise.safetyNotes.map((note, index) => (
                      <li key={index}>{note}</li>
                    ))}
                  </ul>
                </div>

                {selectedExercise.videoUrl && (
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">فيديو تعليمي</h3>
                    <a
                      href={selectedExercise.videoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary inline-flex items-center"
                    >
                      <PlayIcon className="h-4 w-4 ml-1" />
                      مشاهدة الفيديو
                    </a>
                  </div>
                )}
              </div>

              <div className="mt-6 flex space-x-3 space-x-reverse">
                <button
                  onClick={() => setSelectedExercise(null)}
                  className="btn-secondary flex-1"
                >
                  إغلاق
                </button>
                <button className="btn-primary flex-1">
                  إضافة إلى الخطة
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}