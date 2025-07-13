import React from 'react';
import { 
  FireIcon, 
  ClockIcon, 
  TrophyIcon, 
  ChartBarIcon,
  CalendarIcon,
  HeartIcon
} from '@heroicons/react/24/outline';
import { useApp } from '../contexts/AppContext';
import { format } from 'date-fns';
import { ar } from 'date-fns/locale';

export function HomePage() {
  const { state } = useApp();

  // حساب الإحصائيات
  const totalWorkouts = state.workoutSessions.length;
  const totalDuration = state.workoutSessions.reduce((sum, session) => sum + session.duration, 0);
  const averageDuration = totalWorkouts > 0 ? Math.round(totalDuration / totalWorkouts) : 0;
  
  // آخر تمرين
  const lastWorkout = state.workoutSessions.length > 0 
    ? state.workoutSessions[state.workoutSessions.length - 1] 
    : null;

  // التمرين التالي (إذا كان هناك خطة نشطة)
  const activePlan = state.workoutPlans.find(plan => 
    state.workoutSessions.some(session => session.planId === plan.id)
  );

  // الإنجازات الأخيرة
  const recentAchievements = state.achievements
    .sort((a, b) => b.unlockedAt.getTime() - a.unlockedAt.getTime())
    .slice(0, 3);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* ترحيب */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          مرحباً {state.user?.name || 'رياضي'}! 👋
        </h1>
        <p className="text-gray-600">
          استعد لتحقيق أهدافك الرياضية اليوم
        </p>
      </div>

      {/* إحصائيات سريعة */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="card">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <FireIcon className="h-8 w-8 text-orange-500" />
            </div>
            <div className="mr-4">
              <p className="text-sm font-medium text-gray-600">إجمالي التمارين</p>
              <p className="text-2xl font-bold text-gray-900">{totalWorkouts}</p>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <ClockIcon className="h-8 w-8 text-blue-500" />
            </div>
            <div className="mr-4">
              <p className="text-sm font-medium text-gray-600">متوسط المدة</p>
              <p className="text-2xl font-bold text-gray-900">{averageDuration} د</p>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <TrophyIcon className="h-8 w-8 text-yellow-500" />
            </div>
            <div className="mr-4">
              <p className="text-sm font-medium text-gray-600">الإنجازات</p>
              <p className="text-2xl font-bold text-gray-900">{state.achievements.length}</p>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <ChartBarIcon className="h-8 w-8 text-green-500" />
            </div>
            <div className="mr-4">
              <p className="text-sm font-medium text-gray-600">الخطط النشطة</p>
              <p className="text-2xl font-bold text-gray-900">{state.workoutPlans.length}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* آخر تمرين */}
        <div className="card">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">آخر تمرين</h2>
          {lastWorkout ? (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">التاريخ</p>
                  <p className="font-medium text-gray-900">
                    {format(lastWorkout.date, 'EEEE, d MMMM yyyy', { locale: ar })}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">المدة</p>
                  <p className="font-medium text-gray-900">{lastWorkout.duration} دقيقة</p>
                </div>
              </div>
              {lastWorkout.rating && (
                <div>
                  <p className="text-sm text-gray-600">التقييم</p>
                  <div className="flex items-center">
                    {[...Array(10)].map((_, i) => (
                      <HeartIcon
                        key={i}
                        className={`h-5 w-5 ${
                          i < lastWorkout.rating! 
                            ? 'text-red-500 fill-current' 
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              )}
              <button className="btn-primary w-full">
                بدء تمرين جديد
              </button>
            </div>
          ) : (
            <div className="text-center py-8">
              <CalendarIcon className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-600 mb-4">لم تقم بأي تمرين بعد</p>
              <button className="btn-primary">
                ابدأ رحلتك الرياضية
              </button>
            </div>
          )}
        </div>

        {/* التمرين التالي */}
        <div className="card">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">التمرين التالي</h2>
          {activePlan ? (
            <div className="space-y-4">
              <div>
                <p className="text-sm text-gray-600">الخطة</p>
                <p className="font-medium text-gray-900">{activePlan.name}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">الوصف</p>
                <p className="text-gray-900">{activePlan.description}</p>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">المدة</p>
                  <p className="font-medium text-gray-900">{activePlan.duration} دقيقة</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">التمارين</p>
                  <p className="font-medium text-gray-900">{activePlan.exercises.length}</p>
                </div>
              </div>
              <button className="btn-success w-full">
                ابدأ التمرين
              </button>
            </div>
          ) : (
            <div className="text-center py-8">
              <TrophyIcon className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-600 mb-4">لا توجد خطة نشطة</p>
              <button className="btn-primary">
                إنشاء خطة جديدة
              </button>
            </div>
          )}
        </div>
      </div>

      {/* الإنجازات الأخيرة */}
      {recentAchievements.length > 0 && (
        <div className="mt-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">الإنجازات الأخيرة</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {recentAchievements.map((achievement) => (
              <div key={achievement.id} className="card">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <TrophyIcon className="h-8 w-8 text-yellow-500" />
                  </div>
                  <div className="mr-4">
                    <p className="font-medium text-gray-900">{achievement.title}</p>
                    <p className="text-sm text-gray-600">{achievement.description}</p>
                    <p className="text-xs text-gray-500">
                      {format(achievement.unlockedAt, 'd MMMM yyyy', { locale: ar })}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* نصائح تحفيزية */}
      <div className="mt-8">
        <div className="card bg-gradient-to-r from-primary-500 to-primary-600 text-white">
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-2">نصيحة اليوم</h3>
            <p className="text-primary-100">
              "النجاح ليس نهاية، والفشل ليس قاتلاً: ما يهم هو الشجاعة للاستمرار"
            </p>
            <p className="text-sm text-primary-200 mt-2">- ونستون تشرشل</p>
          </div>
        </div>
      </div>
    </div>
  );
}