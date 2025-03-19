import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Main from './Components/Main'
import JobForm from './Components/JobForm'
import HomePage from './Components/HomePage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/main" element={<Main />} />
        <Route path="/job-form" element={<JobForm />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App