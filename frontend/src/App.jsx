import { useState } from 'react'
import './App.css'
import Navbar from './components/navbar'
import MainPage from './components/MainPage'

function App() {
  return (
    <>
      <div className="app">
      <Navbar/>
      <MainPage/>
      
    </div>
    </>
  )
}

export default App
