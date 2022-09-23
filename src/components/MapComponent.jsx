import React, { useEffect, useState } from 'react'
import { MapContainer, TileLayer } from "react-leaflet";
import "./styles.css";
import "leaflet/dist/leaflet.css";
import Routing from './RouteComponent/Routing';
const MapComponent = ({ position, originObj, destinationObj }) => {


  const [center, setCenter] = useState(position)
  const [originLat, setOriginLat] = useState("19.076090")
  const [originLon, setOriginLon] = useState("72.877426")

  const [destiLat, setDestiLat] = useState("18.516726")
  const [destiLon, setDestiLon] = useState("73.856255")

  const getRouteFunc = (originLat, originLon) => {
    setOriginLat(originLat);
    setOriginLon(originLon);
  }


  const ReturnMapEle = () => {

    return (
      <>
        <MapContainer className="container" center={position} zoom={11} style={{ height: "115vh" }}>
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {
            Object.keys(originObj).length > 0 && Object.keys(destinationObj).length > 0 ? (

              <>
                <Routing originLat={originObj.geometry.coordinates[1]} originLon={originObj.geometry.coordinates[0]} destiLat={destinationObj.geometry.coordinates[1]} destiLon={destinationObj.geometry.coordinates[0]} />
              </>

            ) : ''
          }


        </MapContainer>
      </>
    )

  }

  useEffect(() => {
  }, [originObj])



  return (
    <>
      <ReturnMapEle />
    </>
  )
}

export default MapComponent;