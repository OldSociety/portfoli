// import { useState } from 'react';
import React from 'react'
import { Route, Routes } from 'react-router-dom'
//Routes.jsx replaces App.jsx as the central hub of this the Application.

//Core Components
import Home from '../Components/Core/Home'
import NotFound from './NotFound'

const Layout = () => {
  // Sets up the web address routes

  return (
    <div className="Layout">
            <Routes>
              <Route path="/" element={<Home />} />

              {/* Error Handling */}
              <Route path="*" element={<NotFound />} />
            </Routes>
    </div>
  )
}

export default Layout
