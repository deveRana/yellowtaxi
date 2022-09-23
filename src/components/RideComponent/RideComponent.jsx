import React from 'react'
import './RideComponent.css'

const data = [
    {
        id: "Uber-X-123",
        title: "UberX",
        multiplier: 1,
        image: "https://links.papareact.com/3pn"
    },
    {
        id: "Uber-XL-456",
        title: "Uber XL",
        multiplier: 1.4,
        image: "https://links.papareact.com/5w8"
    },
    {
        id: "Uber-X-123",
        title: "Uber LUX",
        multiplier: 1.75,
        image: "https://links.papareact.com/7pf"
    },
]

const chargeRatePerKm = 5;

const RideComponent = ({distanceAndTime}) => {


    return (
        <div className='rideComponentContainer ' >

            <h3> Ride Available</h3>

            <div className="rideComponentContainer-rideOptions">

                {
                    data.map((curEle) => {

                        return (
                            <>
                                <div className="rideOption" key={curEle.key} >

                                    <div className="rideOptions-left">
                                        <img src={curEle.image} alt="" />
                                    </div>

                                    <div className="rideOptions-right">
                                        <h2>{curEle.title}</h2>

                                        <p>Travelling time {Math.floor(distanceAndTime.summary.travelTimeInSeconds / 60 / 60)} hrs and {Math.floor(distanceAndTime.summary.travelTimeInSeconds / 60) - (Math.floor(distanceAndTime.summary.travelTimeInSeconds / 60 / 60) * 60)} min </p>
                                    </div>

                                    <div className="rideOptions-rateDiv">
                                        <h3>₹ {Math.floor(((distanceAndTime.summary.lengthInMeters) / 1000 )*chargeRatePerKm*curEle.multiplier)}</h3>

                                    </div>

                                </div>
                            </>
                        )

                    })
                }



            </div>

        </div>
    )
}

export default RideComponent