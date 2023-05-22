"use client";
import { useEffect } from "react";
import { MapContainer, TileLayer, Marker } from "react-leaflet";

import Leaflet from "leaflet";

import "leaflet/dist/leaflet.css";

function Map(props) {
  const { coords } = props;
  const url = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";
  const attribution =
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';

  const init = async () => {
    delete Leaflet.Icon.Default.prototype._getIconUrl;
    Leaflet.Icon.Default.mergeOptions({
      iconRetinaUrl: "leaflet/images/marker-icon-2x.png",
      iconUrl: "leaflet/images/marker-icon.png",
      shadowUrl: "leaflet/images/marker-shadow.png",
    });
  };
  useEffect(() => {
    init();
  }, []);

  return (
    <div className="map-container">
      <MapContainer
        center={coords || [51, -0.09]}
        zoom={coords ? 4 : 3}
        scrollWheelZoom={false}
        className = "location-map"
      >
        <TileLayer url={url}  />
        {coords && <Marker position={coords} />}
      </MapContainer>
    </div>
  );
}

export default Map;
