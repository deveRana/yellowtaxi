import { useEffect, useState } from "react";
import L from "leaflet";
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";
import "leaflet-routing-machine";
import { useMap } from "react-leaflet";

L.Marker.prototype.options.icon = L.icon({
  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png"
});

export default function Routing({ originLat,
  originLon,
  destiLat,
  destiLon }) {




  const map = useMap();

  useEffect(() => {
    if (!map) return;

    map._zoom = 5;

    map.options.center = [destiLat,destiLon];

    const routingControl = L.Routing.control({
      waypoints: [L.latLng(originLat, originLon), L.latLng(destiLat, destiLon)]
    }).addTo(map);

    return () => map.removeControl(routingControl);
  }, [originLat]);

  return null;
}
