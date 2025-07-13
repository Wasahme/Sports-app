import React from 'react';
import { useFitness } from '../../contexts/FitnessContext';

export const LoadingSpinner: React.FC = () => {
  const { state } = useFitness();
  
  if (!state.isLoading) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white dark:bg-gray-800 rounded-lg p-6 flex items-center space-x-4">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary-600"></div>
        <span className="text-gray-700 dark:text-gray-300">Loading...</span>
      </div>
    </div>
  );
};