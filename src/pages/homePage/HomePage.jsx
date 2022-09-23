import React from "react";
import { FaTaxi } from "react-icons/fa";
import "./HomePage.css";

const HomePage = () => {
  return (
    <div className="homePageContainer">
      <div className="homePageContainer-headerDiv">
        <div className="name-icon-div">
          <FaTaxi />
          <h3>Yellow Taxi</h3>
        </div>

        <button>
          <a href="/services">Get Started</a>
        </button>
      </div>

      <div className="homePageContainer-aboutDiv">
        <div className="project-aboutDiv">
          <h4>Yellow Taxi</h4>
          <p>A Service Which Provides Details About Two Locations</p>
          <p>
            Services such as <span>Route</span> on Map , <span>Distance</span>
            to be travelled , <span>Time</span> to travel , different types of
            <span>Rides</span> available
          </p>
        </div>

        <div className="project-descriptionDiv">
          <h4>Project Description</h4>

          <p>
            <span>Technologies Used</span>
            <br />
            Html , Css , JavaScript , React
          </p>

          <div className="project-descriptionDiv-resources">
            <h4>Resources Used</h4>

            <p>
              
              For Searching Places {""}
              <a
                target="_blank"
                href="https://docs.mapbox.com/api/search/geocoding/"
              >
                MapBox Geocoding Api is used
              </a>
            </p>

            <p>
              
              For Displaying Map and Routes on {""}
              <a
                target="_blank"
                href="https://developer.tomtom.com/routing-api/documentation/matrix-routing/matrix-routing-service"
              >
                React Leaflet is used
              </a>
            </p>

            <p>
              
              For Calculating Distance and Time {""}
              <a target="_blank" href="https://react-leaflet.js.org/">
                Tom Tom Matrix Api is used
              </a>
            </p>

            <p>
              
              In Ride Option  {""}
              <a target="_blank" href="https://m.uber.com/">
              Uber Icons are used
              </a>
            </p>
          </div>
        </div>
      </div>

      <div className="homePageContainer-specialthanksDiv">
        <h4>A Special Thanks To</h4>

        <div className="special-thanks-imgContainer">
          <a target="_blank" href="https://www.mapbox.com/">
            <img src="./assests/mapbox.png" alt="" />
          </a>

          <a target="_blank" href="https://react-leaflet.js.org/">
            <img src="./assests/reactLeaflet.png" alt="" />
          </a>

          <a target="_blank" href="https://www.tomtom.com/en_in/">
            <img src="./assests/tomtomApi.png" alt="" />
          </a>

          <a target="_blank" href="https://m.uber.com/">
            <img src="./assests/uber.png" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
