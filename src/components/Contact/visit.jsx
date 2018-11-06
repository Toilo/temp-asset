import React from "react";
import GoogleMapReact from "google-map-react";

const Visit = () => {
  let center = {
    lat: -33.947238,
    lng: 18.47337
  };

  return (
    <div>
      <h1>Visit Us</h1>
      <div className="map">
        <GoogleMapReact center={center} zoom={20} />
      </div>
    </div>
  );
};

export default Visit;
