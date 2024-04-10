import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Frontpage from './Components/Frontpage'
import CustomRouter from './Components/CustomRouter'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <Frontpage /> */}
    <CustomRouter />
    </>
  )
}

export default App
