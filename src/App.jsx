import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import InsertCourse from './components/InsertCourse'
import ViewCourse from './components/ViewCourse'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<InsertCourse />} />
      <Route path='/view' element={<ViewCourse />} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
