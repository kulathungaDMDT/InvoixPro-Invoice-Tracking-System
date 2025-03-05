import { useState } from 'react'
import './App.css'
//import SignUp from './assets/Pages/SignUp/Signup'
import Login from './assets/Pages/Login/Login';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Login/>     
    </>
  )
}

export default App
