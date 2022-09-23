import React from 'react'
import './DistanceComponent.css'
import { GiPathDistance } from 'react-icons/gi';
import { BiTimeFive } from 'react-icons/bi';



const DistanceComponent = ({ distance, distanceAndTime }) => {

  return (
    <div className='distanceComponentContainer' >

      <div className="distanceComponentContiner-left">

        <p> <GiPathDistance /> Total Distance : <span>{(distanceAndTime.summary.lengthInMeters) / 1000} KM</span> </p>


        <p> <BiTimeFive /> Total Time :    <span>    {Math.floor(distanceAndTime.summary.travelTimeInSeconds / 60 / 60)} hrs and {Math.floor(distanceAndTime.summary.travelTimeInSeconds / 60) - (Math.floor(distanceAndTime.summary.travelTimeInSeconds / 60 / 60) * 60)} min  </span> </p>
      </div>

      <div className="distanceComponentContiner-right">
        <p>Departure Time : <span>{distanceAndTime.summary.departureTime}</span> </p>
        <p>Arrival Time : <span>{distanceAndTime.summary.arrivalTime}</span> </p>
      </div>



    </div>
  )
}

export default DistanceComponent