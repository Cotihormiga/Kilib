import './App.css'

function App() {
  const handleCategoryClick = (category) => {
    console.log(`Navigating to ${category}`)
    // Navigation logic will be added later
  }

  const handleAddWorkout = () => {
    console.log('Add new workout clicked')
    // Add workout logic will be added later
  }

  return (
    <div className="app">
      <header className="header">
        <h1 className="app-title">Workout Logger</h1>
        <p className="subtitle">Track your fitness journey</p>
      </header>

      <div className="stats-container">
        <div className="stat-card">
          <div className="stat-value">0</div>
          <div className="stat-label">Workouts</div>
        </div>
        <div className="stat-card">
          <div className="stat-value">0</div>
          <div className="stat-label">Templates</div>
        </div>
      </div>

      <div className="categories-container">
        <div 
          className="category-card"
          onClick={() => handleCategoryClick('templates')}
        >
          <div className="category-header">
            <div className="category-icon">📋</div>
            <h2 className="category-title">Templates</h2>
          </div>
          <p className="category-description">
            Create and manage workout templates for quick logging
          </p>
        </div>

        <div 
          className="category-card"
          onClick={() => handleCategoryClick('history')}
        >
          <div className="category-header">
            <div className="category-icon">📊</div>
            <h2 className="category-title">History</h2>
          </div>
          <p className="category-description">
            View your workout history and track your progress
          </p>
        </div>
      </div>

      <div className="fab-container">
        <button 
          className="fab-button"
          onClick={handleAddWorkout}
          aria-label="Add new workout"
        >
          +
        </button>
        <div className="fab-placeholder"></div>
      </div>
    </div>
  )
}

export default App
