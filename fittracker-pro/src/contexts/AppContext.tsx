import React, { createContext, useContext, useReducer, useEffect, ReactNode } from 'react';
import { 
  User, 
  WorkoutPlan, 
  WorkoutSession, 
  BodyMeasurement, 
  Nutrition, 
  Sleep, 
  Achievement, 
  AppSettings 
} from '../types';

// أنواع الإجراءات
type AppAction = 
  | { type: 'SET_USER'; payload: User }
  | { type: 'UPDATE_USER'; payload: Partial<User> }
  | { type: 'ADD_WORKOUT_PLAN'; payload: WorkoutPlan }
  | { type: 'UPDATE_WORKOUT_PLAN'; payload: WorkoutPlan }
  | { type: 'DELETE_WORKOUT_PLAN'; payload: string }
  | { type: 'ADD_WORKOUT_SESSION'; payload: WorkoutSession }
  | { type: 'ADD_BODY_MEASUREMENT'; payload: BodyMeasurement }
  | { type: 'ADD_NUTRITION'; payload: Nutrition }
  | { type: 'ADD_SLEEP'; payload: Sleep }
  | { type: 'ADD_ACHIEVEMENT'; payload: Achievement }
  | { type: 'UPDATE_SETTINGS'; payload: Partial<AppSettings> }
  | { type: 'LOAD_DATA'; payload: AppState };

// حالة التطبيق
interface AppState {
  user: User | null;
  workoutPlans: WorkoutPlan[];
  workoutSessions: WorkoutSession[];
  bodyMeasurements: BodyMeasurement[];
  nutrition: Nutrition[];
  sleep: Sleep[];
  achievements: Achievement[];
  settings: AppSettings;
  isLoading: boolean;
}

// الحالة الأولية
const initialState: AppState = {
  user: null,
  workoutPlans: [],
  workoutSessions: [],
  bodyMeasurements: [],
  nutrition: [],
  sleep: [],
  achievements: [],
  settings: {
    theme: 'light',
    language: 'ar',
    notifications: true,
    soundEnabled: true,
    autoBackup: true,
  },
  isLoading: true,
};

// Reducer
function appReducer(state: AppState, action: AppAction): AppState {
  switch (action.type) {
    case 'SET_USER':
      return { ...state, user: action.payload };
    
    case 'UPDATE_USER':
      return { 
        ...state, 
        user: state.user ? { ...state.user, ...action.payload } : null 
      };
    
    case 'ADD_WORKOUT_PLAN':
      return { 
        ...state, 
        workoutPlans: [...state.workoutPlans, action.payload] 
      };
    
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
    
    case 'ADD_WORKOUT_SESSION':
      return {
        ...state,
        workoutSessions: [...state.workoutSessions, action.payload]
      };
    
    case 'ADD_BODY_MEASUREMENT':
      return {
        ...state,
        bodyMeasurements: [...state.bodyMeasurements, action.payload]
      };
    
    case 'ADD_NUTRITION':
      return {
        ...state,
        nutrition: [...state.nutrition, action.payload]
      };
    
    case 'ADD_SLEEP':
      return {
        ...state,
        sleep: [...state.sleep, action.payload]
      };
    
    case 'ADD_ACHIEVEMENT':
      return {
        ...state,
        achievements: [...state.achievements, action.payload]
      };
    
    case 'UPDATE_SETTINGS':
      return {
        ...state,
        settings: { ...state.settings, ...action.payload }
      };
    
    case 'LOAD_DATA':
      return { ...action.payload, isLoading: false };
    
    default:
      return state;
  }
}

// Context
interface AppContextType {
  state: AppState;
  dispatch: React.Dispatch<AppAction>;
  saveToStorage: () => void;
  loadFromStorage: () => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

// Provider
interface AppProviderProps {
  children: ReactNode;
}

export function AppProvider({ children }: AppProviderProps) {
  const [state, dispatch] = useReducer(appReducer, initialState);

  // حفظ البيانات في localStorage
  const saveToStorage = () => {
    try {
      const dataToSave = {
        user: state.user,
        workoutPlans: state.workoutPlans,
        workoutSessions: state.workoutSessions,
        bodyMeasurements: state.bodyMeasurements,
        nutrition: state.nutrition,
        sleep: state.sleep,
        achievements: state.achievements,
        settings: state.settings,
      };
      localStorage.setItem('fittracker-data', JSON.stringify(dataToSave));
    } catch (error) {
      console.error('Error saving data to storage:', error);
    }
  };

  // تحميل البيانات من localStorage
  const loadFromStorage = () => {
    try {
      const savedData = localStorage.getItem('fittracker-data');
      if (savedData) {
        const parsedData = JSON.parse(savedData);
        // تحويل التواريخ من النصوص إلى كائنات Date
        const processedData = {
          ...parsedData,
          workoutSessions: parsedData.workoutSessions?.map((session: any) => ({
            ...session,
            date: new Date(session.date)
          })) || [],
          bodyMeasurements: parsedData.bodyMeasurements?.map((measurement: any) => ({
            ...measurement,
            date: new Date(measurement.date)
          })) || [],
          nutrition: parsedData.nutrition?.map((nutrition: any) => ({
            ...nutrition,
            date: new Date(nutrition.date)
          })) || [],
          sleep: parsedData.sleep?.map((sleep: any) => ({
            ...sleep,
            date: new Date(sleep.date)
          })) || [],
          achievements: parsedData.achievements?.map((achievement: any) => ({
            ...achievement,
            unlockedAt: new Date(achievement.unlockedAt)
          })) || [],
        };
        dispatch({ type: 'LOAD_DATA', payload: processedData });
      } else {
        dispatch({ type: 'LOAD_DATA', payload: initialState });
      }
    } catch (error) {
      console.error('Error loading data from storage:', error);
      dispatch({ type: 'LOAD_DATA', payload: initialState });
    }
  };

  // تحميل البيانات عند بدء التطبيق
  useEffect(() => {
    loadFromStorage();
  }, []);

  // حفظ البيانات عند تغيير الحالة
  useEffect(() => {
    if (!state.isLoading) {
      saveToStorage();
    }
  }, [state]);

  const value = {
    state,
    dispatch,
    saveToStorage,
    loadFromStorage,
  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
}

// Hook لاستخدام Context
export function useApp() {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
}