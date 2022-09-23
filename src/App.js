import React, { useEffect, useState } from 'react'
import './App.css'
import { BrowserRouter } from "react-router-dom";
import RoutePage from './pages/RoutePage';

const App = () => {


  return (
    <BrowserRouter>
      <div className='appContainer' >

        <RoutePage />

      </div>

    </BrowserRouter>
  )
}

export default App