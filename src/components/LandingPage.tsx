import React from 'react'
import './LandingPage.css'

interface LandingPageProps {
  onStartWorkout: () => void
}

const LandingPage: React.FC<LandingPageProps> = ({ onStartWorkout }) => {
  return (
    <div className="landing-page">
      <div className="landing-content">
        <header className="landing-header">
          <h1 className="app-title">Kilib</h1>
          <p className="app-subtitle">Your Workout Companion</p>
        </header>

        <div className="action-buttons">
          <button className="start-workout-btn" onClick={onStartWorkout}>
            <span className="plus-icon">+</span>
          </button>
          <p className="start-workout-label">Start Workout</p>
        </div>

        <div className="categories">
          <div className="category-card">
            <div className="category-icon">📋</div>
            <h3 className="category-title">Workout Template</h3>
            <p className="category-description">Create and manage workout templates</p>
          </div>

          <div className="category-card">
            <div className="category-icon">📊</div>
            <h3 className="category-title">Past Workouts</h3>
            <p className="category-description">View your workout history</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LandingPage
