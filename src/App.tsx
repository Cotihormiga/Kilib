import { useState } from 'react'
import './App.css'
import LandingPage from './components/LandingPage'
import CurrentWorkout from './components/CurrentWorkout'

function App() {
  const [isWorkoutActive, setIsWorkoutActive] = useState(false)
  const [workoutStartTime, setWorkoutStartTime] = useState<number | null>(null)

  const handleStartWorkout = () => {
    setIsWorkoutActive(true)
    setWorkoutStartTime(Date.now())
  }

  const handleEndWorkout = () => {
    setIsWorkoutActive(false)
    setWorkoutStartTime(null)
  }

  return (
    <div className="app">
      {!isWorkoutActive ? (
        <LandingPage onStartWorkout={handleStartWorkout} />
      ) : (
        <CurrentWorkout
          startTime={workoutStartTime!}
          onEndWorkout={handleEndWorkout}
        />
      )}
    </div>
  )
}

export default App
