import { useState } from 'react'
import './App.css'
import './components/MaxLogin'
import MaxLogin from './components/MaxLogin'
import AssignTestimonyRooms from './components/AssignTestimonyRooms'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <AssignTestimonyRooms/>
      </div>
    </>
  )
}

export default App
