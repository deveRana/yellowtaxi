import React, { useEffect, useState } from "react";
import DistanceComponent from "../../components/DistanceComponent/DistanceComponent";
import Loader from "../../components/Loader/Loader";
import LogoComponent from "../../components/LogoComponent/LogoComponent";
import MapComponent from "../../components/MapComponent";
import RideComponent from "../../components/RideComponent/RideComponent";
import SearchComp from "../../components/SearchComponent/SearchComp";
import { getDistanceAndTravelTime } from "../../services/api";
import "./MainPage.css";

const MainPage = () => {

  const [position, setPosition] = useState([19.901054, 75.352478])

  const [originObj, setOriginObj] = useState({});
  const [destinationObj, setDestinationObj] = useState({});






  const [distance, setDistance] = useState(0);

  const [distanceAndTime, setDistanceAndTime] = useState([])

  const [show, setShow] = useState(false);

  const callDistanceMatrixApi = async (
    originLat,
    originLon,
    destiLat,
    destiLon
  ) => {
    const res = await getDistanceAndTravelTime(
      originLat,
      originLon,
      destiLat,
      destiLon
    );

    setDistance(res.routes[0].summary.lengthInMeters);
    setDistanceAndTime(res.routes[0]);
  };

  useEffect(() => {
    if (
      Object.keys(originObj).length > 0 &&
      Object.keys(destinationObj).length > 0
    ) {
      let oLong = originObj.geometry.coordinates[0];
      let oLat = originObj.geometry.coordinates[1];

      let dLong = destinationObj.geometry.coordinates[0];
      let dlat = destinationObj.geometry.coordinates[1];

      callDistanceMatrixApi(oLat, oLong, dlat, dLong);
    }
  }, [destinationObj]);

  useEffect(() => {
    if (
      Object.keys(originObj).length > 0 &&
      Object.keys(destinationObj).length > 0
    ) {
      let oLong = originObj.geometry.coordinates[0];
      let oLat = originObj.geometry.coordinates[1];

      let dLong = destinationObj.geometry.coordinates[0];
      let dlat = destinationObj.geometry.coordinates[1];

      callDistanceMatrixApi(oLat, oLong, dlat, dLong);
    }
  }, [originObj]);


  // Set Position

  useEffect(() => {
    if (
      Object.keys(originObj).length > 0
    ) {
      let oLong = originObj.geometry.coordinates[0];
      let oLat = originObj.geometry.coordinates[1];

      setPosition([oLat, oLong]);
    }
  }, [originObj]);

  useEffect(() => {

    if (distance !== 0) {
      setShow(true);
    }

  }, [distance]);


  // useEffect


  return (
    <div className="mainContainer">

      <div className="leftSideContainer">


        <LogoComponent/>

        <MapComponent position={position} originObj={originObj} destinationObj={destinationObj} />



      </div>

      <div className="rightSideContainer">
        <SearchComp
          setOriginObj={setOriginObj}
          setDestinationObj={setDestinationObj}
        />

        {show === true ? (
          <>
            <DistanceComponent distance={distance} distanceAndTime={distanceAndTime} />
            <RideComponent distanceAndTime={distanceAndTime} />

          </>
        ) : (
          <>
          <Loader/>
          </>
        )}



      </div>
    </div>
  );
};

export default MainPage;
