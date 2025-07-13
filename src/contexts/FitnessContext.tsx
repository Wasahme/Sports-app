import React, { createContext, useContext, useReducer, useEffect, ReactNode } from 'react';
import { 
  User, 
  UserProfile, 
  Exercise, 
  Workout, 
  WorkoutSession, 
  WorkoutPlan, 
  ProgressData,
  Achievement,
  Timer,
  WorkoutStats,
  Notification,
  NotificationType,
  FitnessGoal,
  FitnessLevel,
  UnitSystem
} from '../types';
import { EXERCISES } from '../data/exercises';

// State interface
interface FitnessState {
  // User data
  user: User | null;
  userProfile: UserProfile | null;
  
  // Exercise data
  exercises: Exercise[];
  favoriteExercises: string[];
  
  // Workout data
  workouts: Workout[];
  workoutPlans: WorkoutPlan[];
  currentWorkoutSession: WorkoutSession | null;
  workoutHistory: WorkoutSession[];
  
  // Progress data
  progressData: ProgressData[];
  workoutStats: WorkoutStats | null;
  
  // Achievement data
  achievements: Achievement[];
  unlockedAchievements: Achievement[];
  
  // App state
  currentTimer: Timer | null;
  notifications: Notification[];
  isLoading: boolean;
  error: string | null;
  
  // Settings
  darkMode: boolean;
  language: 'en' | 'ar';
}

// Action types
type FitnessAction =
  | { type: 'SET_USER'; payload: User }
  | { type: 'SET_USER_PROFILE'; payload: UserProfile }
  | { type: 'UPDATE_USER_PREFERENCES'; payload: Partial<User> }
  | { type: 'SET_EXERCISES'; payload: Exercise[] }
  | { type: 'ADD_FAVORITE_EXERCISE'; payload: string }
  | { type: 'REMOVE_FAVORITE_EXERCISE'; payload: string }
  | { type: 'SET_WORKOUTS'; payload: Workout[] }
  | { type: 'ADD_WORKOUT'; payload: Workout }
  | { type: 'UPDATE_WORKOUT'; payload: Workout }
  | { type: 'DELETE_WORKOUT'; payload: string }
  | { type: 'SET_WORKOUT_PLANS'; payload: WorkoutPlan[] }
  | { type: 'ADD_WORKOUT_PLAN'; payload: WorkoutPlan }
  | { type: 'UPDATE_WORKOUT_PLAN'; payload: WorkoutPlan }
  | { type: 'DELETE_WORKOUT_PLAN'; payload: string }
  | { type: 'START_WORKOUT_SESSION'; payload: WorkoutSession }
  | { type: 'UPDATE_WORKOUT_SESSION'; payload: WorkoutSession }
  | { type: 'END_WORKOUT_SESSION'; payload: WorkoutSession }
  | { type: 'SET_WORKOUT_HISTORY'; payload: WorkoutSession[] }
  | { type: 'ADD_PROGRESS_DATA'; payload: ProgressData }
  | { type: 'SET_PROGRESS_DATA'; payload: ProgressData[] }
  | { type: 'SET_WORKOUT_STATS'; payload: WorkoutStats }
  | { type: 'SET_ACHIEVEMENTS'; payload: Achievement[] }
  | { type: 'UNLOCK_ACHIEVEMENT'; payload: Achievement }
  | { type: 'START_TIMER'; payload: Timer }
  | { type: 'UPDATE_TIMER'; payload: Timer }
  | { type: 'STOP_TIMER' }
  | { type: 'ADD_NOTIFICATION'; payload: Notification }
  | { type: 'REMOVE_NOTIFICATION'; payload: string }
  | { type: 'CLEAR_NOTIFICATIONS' }
  | { type: 'SET_LOADING'; payload: boolean }
  | { type: 'SET_ERROR'; payload: string | null }
  | { type: 'TOGGLE_DARK_MODE' }
  | { type: 'SET_LANGUAGE'; payload: 'en' | 'ar' }
  | { type: 'RESET_STATE' };

// Initial state
const initialState: FitnessState = {
  user: null,
  userProfile: null,
  exercises: EXERCISES,
  favoriteExercises: [],
  workouts: [],
  workoutPlans: [],
  currentWorkoutSession: null,
  workoutHistory: [],
  progressData: [],
  workoutStats: null,
  achievements: [],
  unlockedAchievements: [],
  currentTimer: null,
  notifications: [],
  isLoading: false,
  error: null,
  darkMode: false,
  language: 'en'
};

// Reducer
const fitnessReducer = (state: FitnessState, action: FitnessAction): FitnessState => {
  switch (action.type) {
    case 'SET_USER':
      return { ...state, user: action.payload };
    
    case 'SET_USER_PROFILE':
      return { ...state, userProfile: action.payload };
    
    case 'UPDATE_USER_PREFERENCES':
      return { 
        ...state, 
        user: state.user ? { ...state.user, ...action.payload } : null 
      };
    
    case 'SET_EXERCISES':
      return { ...state, exercises: action.payload };
    
    case 'ADD_FAVORITE_EXERCISE':
      return {
        ...state,
        favoriteExercises: [...state.favoriteExercises, action.payload]
      };
    
    case 'REMOVE_FAVORITE_EXERCISE':
      return {
        ...state,
        favoriteExercises: state.favoriteExercises.filter(id => id !== action.payload)
      };
    
    case 'SET_WORKOUTS':
      return { ...state, workouts: action.payload };
    
    case 'ADD_WORKOUT':
      return { ...state, workouts: [...state.workouts, action.payload] };
    
    case 'UPDATE_WORKOUT':
      return {
        ...state,
        workouts: state.workouts.map(workout =>
          workout.id === action.payload.id ? action.payload : workout
        )
      };
    
    case 'DELETE_WORKOUT':
      return {
        ...state,
        workouts: state.workouts.filter(workout => workout.id !== action.payload)
      };
    
    case 'SET_WORKOUT_PLANS':
      return { ...state, workoutPlans: action.payload };
    
    case 'ADD_WORKOUT_PLAN':
      return { ...state, workoutPlans: [...state.workoutPlans, action.payload] };
    
    case 'UPDATE_WORKOUT_PLAN':
      return {
        ...state,
        workoutPlans: state.workoutPlans.map(plan =>
          plan.id === action.payload.id ? action.payload : plan
        )
      };
    
    case 'DELETE_WORKOUT_PLAN':
      return {
        ...state,
        workoutPlans: state.workoutPlans.filter(plan => plan.id !== action.payload)
      };
    
    case 'START_WORKOUT_SESSION':
      return { ...state, currentWorkoutSession: action.payload };
    
    case 'UPDATE_WORKOUT_SESSION':
      return { ...state, currentWorkoutSession: action.payload };
    
    case 'END_WORKOUT_SESSION':
      return {
        ...state,
        currentWorkoutSession: null,
        workoutHistory: [...state.workoutHistory, action.payload]
      };
    
    case 'SET_WORKOUT_HISTORY':
      return { ...state, workoutHistory: action.payload };
    
    case 'ADD_PROGRESS_DATA':
      return { ...state, progressData: [...state.progressData, action.payload] };
    
    case 'SET_PROGRESS_DATA':
      return { ...state, progressData: action.payload };
    
    case 'SET_WORKOUT_STATS':
      return { ...state, workoutStats: action.payload };
    
    case 'SET_ACHIEVEMENTS':
      return { ...state, achievements: action.payload };
    
    case 'UNLOCK_ACHIEVEMENT':
      return {
        ...state,
        unlockedAchievements: [...state.unlockedAchievements, action.payload]
      };
    
    case 'START_TIMER':
      return { ...state, currentTimer: action.payload };
    
    case 'UPDATE_TIMER':
      return { ...state, currentTimer: action.payload };
    
    case 'STOP_TIMER':
      return { ...state, currentTimer: null };
    
    case 'ADD_NOTIFICATION':
      return {
        ...state,
        notifications: [...state.notifications, action.payload]
      };
    
    case 'REMOVE_NOTIFICATION':
      return {
        ...state,
        notifications: state.notifications.filter(n => n.id !== action.payload)
      };
    
    case 'CLEAR_NOTIFICATIONS':
      return { ...state, notifications: [] };
    
    case 'SET_LOADING':
      return { ...state, isLoading: action.payload };
    
    case 'SET_ERROR':
      return { ...state, error: action.payload };
    
    case 'TOGGLE_DARK_MODE':
      return { ...state, darkMode: !state.darkMode };
    
    case 'SET_LANGUAGE':
      return { ...state, language: action.payload };
    
    case 'RESET_STATE':
      return initialState;
    
    default:
      return state;
  }
};

// Context interface
interface FitnessContextType {
  state: FitnessState;
  dispatch: React.Dispatch<FitnessAction>;
  
  // User actions
  setUser: (user: User) => void;
  updateUserPreferences: (preferences: Partial<User>) => void;
  
  // Exercise actions
  addFavoriteExercise: (exerciseId: string) => void;
  removeFavoriteExercise: (exerciseId: string) => void;
  
  // Workout actions
  addWorkout: (workout: Workout) => void;
  updateWorkout: (workout: Workout) => void;
  deleteWorkout: (workoutId: string) => void;
  
  // Workout plan actions
  addWorkoutPlan: (plan: WorkoutPlan) => void;
  updateWorkoutPlan: (plan: WorkoutPlan) => void;
  deleteWorkoutPlan: (planId: string) => void;
  
  // Workout session actions
  startWorkoutSession: (workout: Workout) => void;
  updateWorkoutSession: (session: WorkoutSession) => void;
  endWorkoutSession: () => void;
  
  // Progress actions
  addProgressData: (data: ProgressData) => void;
  
  // Achievement actions
  unlockAchievement: (achievement: Achievement) => void;
  
  // Timer actions
  startTimer: (type: Timer['type'], duration: number) => void;
  updateTimer: (timer: Timer) => void;
  stopTimer: () => void;
  
  // Notification actions
  addNotification: (type: NotificationType, title: string, message: string, duration?: number) => void;
  removeNotification: (id: string) => void;
  clearNotifications: () => void;
  
  // App actions
  setLoading: (loading: boolean) => void;
  setError: (error: string | null) => void;
  toggleDarkMode: () => void;
  setLanguage: (language: 'en' | 'ar') => void;
  
  // Utility functions
  isExerciseFavorite: (exerciseId: string) => boolean;
  getUserStats: () => WorkoutStats | null;
  getExerciseById: (id: string) => Exercise | undefined;
  getWorkoutById: (id: string) => Workout | undefined;
}

// Create context
const FitnessContext = createContext<FitnessContextType | undefined>(undefined);

// Provider component
export const FitnessProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(fitnessReducer, initialState);

  // Load data from localStorage on mount
  useEffect(() => {
    const loadData = () => {
      try {
        const userData = localStorage.getItem('fittracker_user');
        const workoutData = localStorage.getItem('fittracker_workouts');
        const progressData = localStorage.getItem('fittracker_progress');
        const settingsData = localStorage.getItem('fittracker_settings');
        
        if (userData) {
          const user = JSON.parse(userData);
          dispatch({ type: 'SET_USER', payload: user });
        }
        
        if (workoutData) {
          const workouts = JSON.parse(workoutData);
          dispatch({ type: 'SET_WORKOUTS', payload: workouts });
        }
        
        if (progressData) {
          const progress = JSON.parse(progressData);
          dispatch({ type: 'SET_PROGRESS_DATA', payload: progress });
        }
        
        if (settingsData) {
          const settings = JSON.parse(settingsData);
          if (settings.darkMode) {
            dispatch({ type: 'TOGGLE_DARK_MODE' });
          }
          if (settings.language) {
            dispatch({ type: 'SET_LANGUAGE', payload: settings.language });
          }
        }
      } catch (error) {
        console.error('Error loading data from localStorage:', error);
      }
    };
    
    loadData();
  }, []);

  // Save data to localStorage when state changes
  useEffect(() => {
    if (state.user) {
      localStorage.setItem('fittracker_user', JSON.stringify(state.user));
    }
  }, [state.user]);

  useEffect(() => {
    localStorage.setItem('fittracker_workouts', JSON.stringify(state.workouts));
  }, [state.workouts]);

  useEffect(() => {
    localStorage.setItem('fittracker_progress', JSON.stringify(state.progressData));
  }, [state.progressData]);

  useEffect(() => {
    localStorage.setItem('fittracker_settings', JSON.stringify({
      darkMode: state.darkMode,
      language: state.language
    }));
  }, [state.darkMode, state.language]);

  // Action creators
  const setUser = (user: User) => {
    dispatch({ type: 'SET_USER', payload: user });
  };

  const updateUserPreferences = (preferences: Partial<User>) => {
    dispatch({ type: 'UPDATE_USER_PREFERENCES', payload: preferences });
  };

  const addFavoriteExercise = (exerciseId: string) => {
    dispatch({ type: 'ADD_FAVORITE_EXERCISE', payload: exerciseId });
  };

  const removeFavoriteExercise = (exerciseId: string) => {
    dispatch({ type: 'REMOVE_FAVORITE_EXERCISE', payload: exerciseId });
  };

  const addWorkout = (workout: Workout) => {
    dispatch({ type: 'ADD_WORKOUT', payload: workout });
  };

  const updateWorkout = (workout: Workout) => {
    dispatch({ type: 'UPDATE_WORKOUT', payload: workout });
  };

  const deleteWorkout = (workoutId: string) => {
    dispatch({ type: 'DELETE_WORKOUT', payload: workoutId });
  };

  const addWorkoutPlan = (plan: WorkoutPlan) => {
    dispatch({ type: 'ADD_WORKOUT_PLAN', payload: plan });
  };

  const updateWorkoutPlan = (plan: WorkoutPlan) => {
    dispatch({ type: 'UPDATE_WORKOUT_PLAN', payload: plan });
  };

  const deleteWorkoutPlan = (planId: string) => {
    dispatch({ type: 'DELETE_WORKOUT_PLAN', payload: planId });
  };

  const startWorkoutSession = (workout: Workout) => {
    const session: WorkoutSession = {
      id: Date.now().toString(),
      workoutId: workout.id,
      startTime: new Date(),
      exercises: [],
      totalVolume: 0,
      totalCalories: 0,
      status: 'active'
    };
    dispatch({ type: 'START_WORKOUT_SESSION', payload: session });
  };

  const updateWorkoutSession = (session: WorkoutSession) => {
    dispatch({ type: 'UPDATE_WORKOUT_SESSION', payload: session });
  };

  const endWorkoutSession = () => {
    if (state.currentWorkoutSession) {
      const endedSession: WorkoutSession = {
        ...state.currentWorkoutSession,
        endTime: new Date(),
        status: 'completed'
      };
      dispatch({ type: 'END_WORKOUT_SESSION', payload: endedSession });
    }
  };

  const addProgressData = (data: ProgressData) => {
    dispatch({ type: 'ADD_PROGRESS_DATA', payload: data });
  };

  const unlockAchievement = (achievement: Achievement) => {
    dispatch({ type: 'UNLOCK_ACHIEVEMENT', payload: achievement });
    addNotification('success', 'Achievement Unlocked!', achievement.name);
  };

  const startTimer = (type: Timer['type'], duration: number) => {
    const timer: Timer = {
      id: Date.now().toString(),
      type,
      duration,
      remainingTime: duration,
      isActive: true,
      isPaused: false,
      startTime: new Date()
    };
    dispatch({ type: 'START_TIMER', payload: timer });
  };

  const updateTimer = (timer: Timer) => {
    dispatch({ type: 'UPDATE_TIMER', payload: timer });
  };

  const stopTimer = () => {
    dispatch({ type: 'STOP_TIMER' });
  };

  const addNotification = (type: NotificationType, title: string, message: string, duration = 5000) => {
    const notification: Notification = {
      id: Date.now().toString(),
      type,
      title,
      message,
      duration,
      timestamp: new Date()
    };
    dispatch({ type: 'ADD_NOTIFICATION', payload: notification });
    
    // Auto-remove notification after duration
    setTimeout(() => {
      dispatch({ type: 'REMOVE_NOTIFICATION', payload: notification.id });
    }, duration);
  };

  const removeNotification = (id: string) => {
    dispatch({ type: 'REMOVE_NOTIFICATION', payload: id });
  };

  const clearNotifications = () => {
    dispatch({ type: 'CLEAR_NOTIFICATIONS' });
  };

  const setLoading = (loading: boolean) => {
    dispatch({ type: 'SET_LOADING', payload: loading });
  };

  const setError = (error: string | null) => {
    dispatch({ type: 'SET_ERROR', payload: error });
  };

  const toggleDarkMode = () => {
    dispatch({ type: 'TOGGLE_DARK_MODE' });
  };

  const setLanguage = (language: 'en' | 'ar') => {
    dispatch({ type: 'SET_LANGUAGE', payload: language });
  };

  // Utility functions
  const isExerciseFavorite = (exerciseId: string) => {
    return state.favoriteExercises.includes(exerciseId);
  };

  const getUserStats = () => {
    return state.workoutStats;
  };

  const getExerciseById = (id: string) => {
    return state.exercises.find(exercise => exercise.id === id);
  };

  const getWorkoutById = (id: string) => {
    return state.workouts.find(workout => workout.id === id);
  };

  const contextValue: FitnessContextType = {
    state,
    dispatch,
    setUser,
    updateUserPreferences,
    addFavoriteExercise,
    removeFavoriteExercise,
    addWorkout,
    updateWorkout,
    deleteWorkout,
    addWorkoutPlan,
    updateWorkoutPlan,
    deleteWorkoutPlan,
    startWorkoutSession,
    updateWorkoutSession,
    endWorkoutSession,
    addProgressData,
    unlockAchievement,
    startTimer,
    updateTimer,
    stopTimer,
    addNotification,
    removeNotification,
    clearNotifications,
    setLoading,
    setError,
    toggleDarkMode,
    setLanguage,
    isExerciseFavorite,
    getUserStats,
    getExerciseById,
    getWorkoutById
  };

  return (
    <FitnessContext.Provider value={contextValue}>
      {children}
    </FitnessContext.Provider>
  );
};

// Custom hook to use the context
export const useFitness = () => {
  const context = useContext(FitnessContext);
  if (context === undefined) {
    throw new Error('useFitness must be used within a FitnessProvider');
  }
  return context;
};

export default FitnessContext;