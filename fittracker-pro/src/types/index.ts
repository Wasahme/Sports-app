// أنواع المستخدم
export interface User {
  id: string;
  name: string;
  email: string;
  age: number;
  height: number; // بالسم
  weight: number; // بالكيلوغرام
  goal: FitnessGoal;
  unitSystem: 'metric' | 'imperial';
  createdAt: Date;
  updatedAt: Date;
}

// أهداف اللياقة
export type FitnessGoal = 
  | 'muscle_gain'
  | 'weight_loss'
  | 'fitness_improvement'
  | 'endurance'
  | 'strength';

// أنواع التمارين
export type MuscleGroup = 
  | 'chest'
  | 'back'
  | 'legs'
  | 'shoulders'
  | 'arms'
  | 'core'
  | 'full_body';

export type ExerciseType = 
  | 'strength'
  | 'cardio'
  | 'flexibility'
  | 'balance';

export type DifficultyLevel = 
  | 'beginner'
  | 'intermediate'
  | 'advanced';

export type EquipmentType = 
  | 'free_weight'
  | 'machine'
  | 'bodyweight'
  | 'none';

// التمرين
export interface Exercise {
  id: string;
  name: string;
  nameAr: string;
  description: string;
  muscleGroup: MuscleGroup;
  exerciseType: ExerciseType;
  difficulty: DifficultyLevel;
  equipment: EquipmentType;
  instructions: string[];
  tips: string[];
  safetyNotes: string[];
  videoUrl?: string;
  imageUrl?: string;
}

// مجموعة التمارين
export interface ExerciseSet {
  id: string;
  exerciseId: string;
  sets: number;
  reps: number;
  weight?: number; // بالكيلوغرام
  duration?: number; // بالثواني
  distance?: number; // بالمتر
  restTime: number; // بالثواني
  notes?: string;
}

// خطة التمرين
export interface WorkoutPlan {
  id: string;
  name: string;
  description: string;
  goal: FitnessGoal;
  difficulty: DifficultyLevel;
  duration: number; // بالدقائق
  daysPerWeek: number;
  exercises: ExerciseSet[];
  createdAt: Date;
  updatedAt: Date;
}

// جلسة التمرين
export interface WorkoutSession {
  id: string;
  planId: string;
  date: Date;
  duration: number; // بالدقائق
  exercises: CompletedExercise[];
  notes?: string;
  rating?: number; // 1-10
}

// التمرين المكتمل
export interface CompletedExercise {
  exerciseId: string;
  sets: CompletedSet[];
  notes?: string;
  rpe?: number; // Rate of Perceived Exertion 1-10
}

// المجموعة المكتملة
export interface CompletedSet {
  setNumber: number;
  reps: number;
  weight?: number;
  duration?: number;
  distance?: number;
  completed: boolean;
}

// قياسات الجسم
export interface BodyMeasurement {
  id: string;
  date: Date;
  weight: number;
  bodyFat?: number;
  muscleMass?: number;
  chest?: number;
  waist?: number;
  hips?: number;
  arms?: number;
  thighs?: number;
  calves?: number;
}

// الإحصائيات
export interface WorkoutStats {
  totalWorkouts: number;
  totalDuration: number; // بالدقائق
  averageDuration: number;
  totalVolume: number; // الوزن × التكرارات
  averageVolume: number;
  streakDays: number;
  lastWorkout: Date;
}

// التغذية
export interface Nutrition {
  id: string;
  date: Date;
  calories: number;
  protein: number; // بالجرام
  carbs: number; // بالجرام
  fats: number; // بالجرام
  water: number; // باللتر
  notes?: string;
}

// النوم
export interface Sleep {
  id: string;
  date: Date;
  hours: number;
  quality: number; // 1-10
  notes?: string;
}

// الإنجازات
export interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string;
  unlockedAt: Date;
  type: 'workout' | 'streak' | 'weight' | 'strength' | 'special';
}

// الإعدادات
export interface AppSettings {
  theme: 'light' | 'dark';
  language: 'ar' | 'en';
  notifications: boolean;
  soundEnabled: boolean;
  autoBackup: boolean;
}