import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Layout from "./pages/Layout";
import Resume from "./pages/Resume";
import Skills from "./pages/Skills";
import OldResume from './pages/OldResume';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="oldResume" element={<OldResume />}/>
        <Route path="/" element={<Layout />}>
          <Route index element={<Resume />} />
          <Route path="skills" element={<div className='skillsSet'><Skills /></div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
