import React, { useState, useEffect } from 'react'
import './CurrentWorkout.css'

interface CurrentWorkoutProps {
  startTime: number
  onEndWorkout: () => void
}

const CurrentWorkout: React.FC<CurrentWorkoutProps> = ({ startTime, onEndWorkout }) => {
  const [elapsedTime, setElapsedTime] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setElapsedTime(Date.now() - startTime)
    }, 100)

    return () => clearInterval(interval)
  }, [startTime])

  const formatTime = (milliseconds: number) => {
    const totalSeconds = Math.floor(milliseconds / 1000)
    const hours = Math.floor(totalSeconds / 3600)
    const minutes = Math.floor((totalSeconds % 3600) / 60)
    const seconds = totalSeconds % 60

    return {
      hours: hours.toString().padStart(2, '0'),
      minutes: minutes.toString().padStart(2, '0'),
      seconds: seconds.toString().padStart(2, '0'),
    }
  }

  const time = formatTime(elapsedTime)

  return (
    <div className="current-workout">
      <div className="workout-content">
        <header className="workout-header">
          <h1 className="workout-title">Current Workout</h1>
          <button className="end-workout-btn" onClick={onEndWorkout}>
            End Workout
          </button>
        </header>

        <div className="timer-container">
          <div className="timer-display">
            <div className="time-segment">
              <span className="time-value">{time.hours}</span>
              <span className="time-label">hours</span>
            </div>
            <span className="time-separator">:</span>
            <div className="time-segment">
              <span className="time-value">{time.minutes}</span>
              <span className="time-label">minutes</span>
            </div>
            <span className="time-separator">:</span>
            <div className="time-segment">
              <span className="time-value">{time.seconds}</span>
              <span className="time-label">seconds</span>
            </div>
          </div>
        </div>

        <div className="workout-actions">
          <button className="action-btn">
            <span className="action-icon">➕</span>
            <span className="action-label">Add Exercise</span>
          </button>
          <button className="action-btn">
            <span className="action-icon">📝</span>
            <span className="action-label">Add Note</span>
          </button>
        </div>

        <div className="exercises-section">
          <h2 className="section-title">Exercises</h2>
          <div className="empty-state">
            <p className="empty-message">No exercises added yet</p>
            <p className="empty-hint">Tap "Add Exercise" to get started</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CurrentWorkout
