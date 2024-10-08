import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './components/Login'
import Signin from './components/Signin'
import { AppBar } from '@mui/material'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import  Menu  from './components/Menu'
import StateBasics from './components/StateBasics'
import Count from './components/Counter'
import Counter from './components/Counter'
import Name from './components/Name'
import Api from './components/Api'
import Pokemon from './components/Pokemon'

function App() {
  const [count, setCount] = useState(0)

  return (
    
    <>
      <Navbar />
      <h1>myAPP</h1>
      <Routes>
        <Route path='/menu' element={<Menu />} />
        <Route path='/log' element={<Login />} />
        <Route path='/sign' element={<Signin />} />
        <Route path='/state' element={<StateBasics />} />
        <Route path='/count' element={<Counter />} />
        <Route path='/name' element={<Name />} />
        <Route path='/api' element={<Api />} />
        <Route path='/poke' element={<Pokemon />} />
      </Routes>    
  
     </>
  )
}

export default App
