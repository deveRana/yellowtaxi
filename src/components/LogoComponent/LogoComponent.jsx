import React from 'react'
import './LogoComponent.css'
import { FaTaxi } from 'react-icons/fa';

const LogoComponent = () => {
    return (
        <div className='logoComponent-container'>
            <FaTaxi/>
            <a href='/' >Yellow Taxi</a>
        </div>
    )
}

export default LogoComponent