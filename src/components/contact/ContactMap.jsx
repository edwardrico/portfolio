import React from "react";
import GoogleMapReact from "google-map-react";


const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default function ContactMap() {
  const defaultProps = {
    center: {
      lat: 47.2173,
      lng: -1.5534,
    },
    zoom: 11,
  };

  return (
    <GoogleMapReact
      defaultCenter={defaultProps.center}
      defaultZoom={defaultProps.zoom}
    >
      <AnyReactComponent lat={47.2173} lng={-1.5534} text="Mon localisation" />
    </GoogleMapReact>
  );
}
