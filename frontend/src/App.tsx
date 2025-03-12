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
