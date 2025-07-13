function App() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 py-8">
        <header className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gradient mb-2">FitTracker Pro</h1>
          <p className="text-gray-600 dark:text-gray-400">Your comprehensive fitness tracking application</p>
        </header>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-semibold mb-4">Welcome to FitTracker Pro</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              A comprehensive fitness tracking application with over 100 exercises, workout plans, progress tracking, and more.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-primary-50 dark:bg-primary-900/20 rounded-lg">
                <div className="text-primary-600 text-3xl mb-2">💪</div>
                <h3 className="font-semibold mb-2">100+ Exercises</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Comprehensive exercise library with detailed instructions</p>
              </div>
              
              <div className="text-center p-6 bg-success-50 dark:bg-success-900/20 rounded-lg">
                <div className="text-success-600 text-3xl mb-2">📊</div>
                <h3 className="font-semibold mb-2">Progress Tracking</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Track your fitness journey with detailed statistics</p>
              </div>
              
              <div className="text-center p-6 bg-secondary-50 dark:bg-secondary-900/20 rounded-lg">
                <div className="text-secondary-600 text-3xl mb-2">🏆</div>
                <h3 className="font-semibold mb-2">Achievements</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Unlock achievements and stay motivated</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;