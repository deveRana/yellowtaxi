import React, { useState } from "react";
import { getSuggestionApi } from "../../services/api";
import "./SearchComp.css";
import { MdTripOrigin } from 'react-icons/md';
import { GrLocation } from 'react-icons/gr';


const SearchComp = ({setOriginObj , setDestinationObj}) => {
  const [originValue, setOriginValue] = useState("");
  const [destinationValue, setDestinationValue] = useState("");

  const [originSuggestionData, setOriginSuggestionData] = useState([]);
  const [desitinationSuggestionData, setDesitinationSuggestionData] = useState(
    []
  );

  const callOriginSugesstion = async (e) => {
    setOriginValue(e.target.value);
    const res = await getSuggestionApi(e.target.value);
    setOriginSuggestionData(res.features);
  };

  const callDestinationSuggestion = async (e) => {
    setDestinationValue(e.target.value);
    const res = await getSuggestionApi(e.target.value);
    setDesitinationSuggestionData(res.features);
  };

  const callOriginSelectSuggestion = (place) => {
    setOriginValue(place.place_name);
    setOriginSuggestionData([]);
    setOriginObj(place);
  };

  const callDestinationSelectSuggestion = (place) => {
    setDestinationValue(place.place_name);
    setDesitinationSuggestionData([]);
    setDestinationObj(place);
  };

  return (
    <div className="searchContainer">
      <div className="originSearch">
        <MdTripOrigin/>
        <input
          type="text"
          placeholder="From"
          value={originValue}
          onChange={(e) => {
            callOriginSugesstion(e);
          }}
        />

        <ul className="showOriginSuggestion">
          {originSuggestionData.length > 0 &&
            originSuggestionData.map((place, i) => {
              return (
                <li
                  key={i}
                  onClick={() => {
                    callOriginSelectSuggestion(place);
                  }}
                >
                  {place.place_name}
                </li>
              );
            })}
        </ul>
      </div>

     

      <div className="destiationSearch">
      <GrLocation/>

        <input
          type="text"
          placeholder="Destination"
          value={destinationValue}
          onChange={(e) => {
            callDestinationSuggestion(e);
          }}
        />

        <ul className="showDestinationSuggestion">
          {desitinationSuggestionData.length > 0 &&
            desitinationSuggestionData.map((place, i) => {
              return (
                <li
                  key={i}
                  onClick={()=>{
                    callDestinationSelectSuggestion(place)
                  }}
                >
                  {place.place_name}
                </li>
              );
            })}
        </ul>
      </div>
    </div>
  );
};

export default SearchComp;
