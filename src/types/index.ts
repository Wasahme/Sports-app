// User Types
export interface User {
  id: string;
  name: string;
  email: string;
  age: number;
  weight: number;
  height: number;
  goal: FitnessGoal;
  level: FitnessLevel;
  unitSystem: UnitSystem;
  createdAt: Date;
  updatedAt: Date;
}

export interface UserProfile {
  user: User;
  measurements: Measurement[];
  preferences: UserPreferences;
}

export interface Measurement {
  id: string;
  type: MeasurementType;
  value: number;
  unit: string;
  date: Date;
  notes?: string;
}

export interface UserPreferences {
  theme: 'light' | 'dark' | 'system';
  notifications: NotificationSettings;
  workoutReminders: boolean;
  restTimerSound: boolean;
  defaultRestTime: number;
  language: string;
}

export interface NotificationSettings {
  workoutReminders: boolean;
  progressUpdates: boolean;
  achievements: boolean;
  waterReminders: boolean;
}

// Exercise Types
export interface Exercise {
  id: string;
  name: string;
  nameAr: string;
  description: string;
  descriptionAr: string;
  instructions: string[];
  instructionsAr: string[];
  muscleGroups: MuscleGroup[];
  category: ExerciseCategory;
  equipment: Equipment[];
  difficulty: DifficultyLevel;
  videoUrl?: string;
  imageUrl?: string;
  tips: string[];
  tipsAr: string[];
  commonMistakes: string[];
  commonMistakesAr: string[];
  primaryMuscles: string[];
  secondaryMuscles: string[];
  mechanics: 'compound' | 'isolation';
  force: 'push' | 'pull' | 'static';
  isBodyweight: boolean;
  estimatedCaloriesPerRep?: number;
}

export interface ExerciseLog {
  id: string;
  exerciseId: string;
  sets: SetLog[];
  notes?: string;
  date: Date;
  duration: number;
  restTime: number;
  rpe?: number; // Rate of Perceived Exertion (1-10)
}

export interface SetLog {
  id: string;
  setNumber: number;
  reps: number;
  weight: number;
  duration?: number; // for timed exercises
  distance?: number; // for cardio
  restTime: number;
  rpe?: number;
  completed: boolean;
}

// Workout Types
export interface Workout {
  id: string;
  name: string;
  description: string;
  exercises: WorkoutExercise[];
  estimatedDuration: number;
  difficulty: DifficultyLevel;
  category: WorkoutCategory;
  tags: string[];
  createdBy: 'system' | 'user';
  isPublic: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface WorkoutExercise {
  id: string;
  exerciseId: string;
  order: number;
  sets: number;
  reps: number | string; // can be range like "8-12"
  weight?: number;
  duration?: number;
  restTime: number;
  notes?: string;
  isSuperset?: boolean;
  supersetGroup?: string;
}

export interface WorkoutPlan {
  id: string;
  name: string;
  description: string;
  workouts: Workout[];
  schedule: WorkoutSchedule;
  duration: number; // in weeks
  goal: FitnessGoal;
  level: FitnessLevel;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface WorkoutSchedule {
  [key: string]: string[]; // day: workoutIds
}

export interface WorkoutSession {
  id: string;
  workoutId: string;
  planId?: string;
  startTime: Date;
  endTime?: Date;
  exercises: ExerciseLog[];
  notes?: string;
  rating?: number; // 1-5 stars
  totalVolume: number;
  totalCalories: number;
  status: 'active' | 'completed' | 'cancelled';
}

// Progress Types
export interface ProgressData {
  id: string;
  userId: string;
  date: Date;
  weight?: number;
  bodyFat?: number;
  muscle?: number;
  measurements: { [key: string]: number };
  photos?: string[];
  notes?: string;
}

export interface ExerciseProgress {
  exerciseId: string;
  history: ExerciseHistoryEntry[];
  personalBest: PersonalBest;
  progression: ProgressionData[];
}

export interface ExerciseHistoryEntry {
  date: Date;
  weight: number;
  reps: number;
  sets: number;
  oneRepMax: number;
  volume: number;
  rpe?: number;
}

export interface PersonalBest {
  maxWeight: number;
  maxReps: number;
  maxVolume: number;
  bestOneRepMax: number;
  date: Date;
}

export interface ProgressionData {
  date: Date;
  metric: 'weight' | 'reps' | 'volume' | 'oneRepMax';
  value: number;
  change: number;
  changePercent: number;
}

// Nutrition Types
export interface NutritionEntry {
  id: string;
  date: Date;
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
  fiber?: number;
  sugar?: number;
  sodium?: number;
  water: number;
  meals: Meal[];
}

export interface Meal {
  id: string;
  name: string;
  type: MealType;
  foods: FoodItem[];
  totalCalories: number;
  totalProtein: number;
  totalCarbs: number;
  totalFat: number;
}

export interface FoodItem {
  id: string;
  name: string;
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
  serving: number;
  unit: string;
}

// Achievement Types
export interface Achievement {
  id: string;
  name: string;
  nameAr: string;
  description: string;
  descriptionAr: string;
  icon: string;
  category: AchievementCategory;
  condition: AchievementCondition;
  points: number;
  rarity: 'common' | 'uncommon' | 'rare' | 'epic' | 'legendary';
  unlockedAt?: Date;
  progress?: number;
  maxProgress?: number;
}

export interface AchievementCondition {
  type: 'workout_count' | 'weight_lifted' | 'streak' | 'personal_best' | 'time_spent';
  value: number;
  timeframe?: 'daily' | 'weekly' | 'monthly' | 'all_time';
}

// Timer Types
export interface Timer {
  id: string;
  type: 'rest' | 'workout' | 'exercise';
  duration: number;
  remainingTime: number;
  isActive: boolean;
  isPaused: boolean;
  startTime?: Date;
  endTime?: Date;
}

// Statistics Types
export interface WorkoutStats {
  totalWorkouts: number;
  totalTime: number;
  totalVolume: number;
  totalCalories: number;
  averageWorkoutDuration: number;
  currentStreak: number;
  longestStreak: number;
  favoriteExercise: string;
  strongestLift: PersonalBest;
  weeklyProgress: WeeklyProgress[];
}

export interface WeeklyProgress {
  week: string;
  workouts: number;
  volume: number;
  calories: number;
  avgDuration: number;
}

// Enums
export enum FitnessGoal {
  LOSE_WEIGHT = 'lose_weight',
  GAIN_MUSCLE = 'gain_muscle',
  MAINTAIN_FITNESS = 'maintain_fitness',
  IMPROVE_ENDURANCE = 'improve_endurance',
  INCREASE_STRENGTH = 'increase_strength',
  IMPROVE_FLEXIBILITY = 'improve_flexibility',
  SPORT_SPECIFIC = 'sport_specific'
}

export enum FitnessLevel {
  BEGINNER = 'beginner',
  INTERMEDIATE = 'intermediate',
  ADVANCED = 'advanced',
  EXPERT = 'expert'
}

export enum UnitSystem {
  METRIC = 'metric',
  IMPERIAL = 'imperial'
}

export enum MeasurementType {
  WEIGHT = 'weight',
  BODY_FAT = 'body_fat',
  MUSCLE_MASS = 'muscle_mass',
  CHEST = 'chest',
  WAIST = 'waist',
  HIPS = 'hips',
  THIGH = 'thigh',
  BICEP = 'bicep',
  NECK = 'neck'
}

export enum MuscleGroup {
  CHEST = 'chest',
  BACK = 'back',
  SHOULDERS = 'shoulders',
  BICEPS = 'biceps',
  TRICEPS = 'triceps',
  FOREARMS = 'forearms',
  CORE = 'core',
  QUADRICEPS = 'quadriceps',
  HAMSTRINGS = 'hamstrings',
  GLUTES = 'glutes',
  CALVES = 'calves',
  CARDIO = 'cardio'
}

export enum ExerciseCategory {
  STRENGTH = 'strength',
  CARDIO = 'cardio',
  FLEXIBILITY = 'flexibility',
  BALANCE = 'balance',
  PLYOMETRIC = 'plyometric',
  REHABILITATION = 'rehabilitation'
}

export enum Equipment {
  BARBELL = 'barbell',
  DUMBBELL = 'dumbbell',
  KETTLEBELL = 'kettlebell',
  CABLE_MACHINE = 'cable_machine',
  RESISTANCE_BANDS = 'resistance_bands',
  BODYWEIGHT = 'bodyweight',
  MACHINE = 'machine',
  MEDICINE_BALL = 'medicine_ball',
  FOAM_ROLLER = 'foam_roller',
  NONE = 'none'
}

export enum DifficultyLevel {
  BEGINNER = 'beginner',
  INTERMEDIATE = 'intermediate',
  ADVANCED = 'advanced',
  EXPERT = 'expert'
}

export enum WorkoutCategory {
  STRENGTH = 'strength',
  CARDIO = 'cardio',
  HIIT = 'hiit',
  CROSSFIT = 'crossfit',
  BODYBUILDING = 'bodybuilding',
  POWERLIFTING = 'powerlifting',
  CALISTHENICS = 'calisthenics',
  YOGA = 'yoga',
  PILATES = 'pilates',
  STRETCHING = 'stretching'
}

export enum MealType {
  BREAKFAST = 'breakfast',
  LUNCH = 'lunch',
  DINNER = 'dinner',
  SNACK = 'snack',
  PRE_WORKOUT = 'pre_workout',
  POST_WORKOUT = 'post_workout'
}

export enum AchievementCategory {
  CONSISTENCY = 'consistency',
  STRENGTH = 'strength',
  ENDURANCE = 'endurance',
  MILESTONES = 'milestones',
  SPECIAL = 'special'
}

// Utility Types
export type SortOrder = 'asc' | 'desc';
export type ViewMode = 'grid' | 'list';
export type FilterOptions = {
  muscleGroups?: MuscleGroup[];
  equipment?: Equipment[];
  difficulty?: DifficultyLevel[];
  category?: ExerciseCategory[];
};

export type DateRange = {
  start: Date;
  end: Date;
};

export type ChartData = {
  label: string;
  value: number;
  color?: string;
};

export type NotificationType = 'success' | 'error' | 'warning' | 'info';

export interface Notification {
  id: string;
  type: NotificationType;
  title: string;
  message: string;
  duration?: number;
  timestamp: Date;
}