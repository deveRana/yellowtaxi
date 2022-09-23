import axios from "axios";  


export const getSuggestionApi = async (text)=>{

    const token = 'pk.eyJ1IjoicmFuYS15b2dyYWoiLCJhIjoiY2w4MHl5djB1MGF3OTN5bHBwZ3YzemZvMiJ9.xyn3UNoJ7PkqXfoFKMDIQQ'

    const res = await axios.get(`https://api.mapbox.com/geocoding/v5/mapbox.places/${text}.json?access_token=${token}&autocomplete=true`);

    return res.data;

}

export const getDistanceAndTravelTime = async (originLat,originLon,destiLat,destiLon)=>{

    const apiKey = '6G9gfQYEpMCkjBSqxGAuKZGMic22uAhK'

    const res = await axios.get(`https://api.tomtom.com/routing/1/calculateRoute/${originLat},${originLon}:${destiLat},${destiLon}/json?key=${apiKey}`);

    return res.data;

}