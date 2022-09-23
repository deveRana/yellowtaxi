import React from 'react'
import { Routes, Route} from "react-router-dom";
import HomePage from './homePage/HomePage';
import MainPage from './MainPage/MainPage';


const RoutePage = () => {
    return (
        <>

            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/services" element={<MainPage />} />
            </Routes>

        </>
    )
}

export default RoutePage