<<<<<<< HEAD
import './App.css'
import './components/MaxLogin'
import MaxLogin from './components/MaxLogin'
import AssignTestimonyRooms from './components/AssignTestimonyRooms'

function App() {
  return (
    <>
      <div>
        <MaxLogin />
        <AssignTestimonyRooms/>
        <MaxLogin/>
      </div>
    </>
  );
}

export default App;
=======
import { useState } from 'react'
import './App.css'
import './components/MaxLogin'
import MaxLogin from './components/MaxLogin'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <MaxLogin/>
      </div>
    </>
  )
}

export default App
>>>>>>> 6ec1f62 (updates)
