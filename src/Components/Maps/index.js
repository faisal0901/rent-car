import React, { useState } from "react";
import ReactMapGl, { Marker } from "react-map-gl";
import CarMarkIcon from "assets/images/CarIcon.svg";
export default function Maps(props) {
  const { data } = props;

  const [ViewPort, setViewPort] = useState({
    width: "100%",
    height: "100%",
    latitude: data.CityCordinate.latitude,
    longitude: data.CityCordinate.longitude,
    zoom: props.zoom,
  });
  return (
    <div className={props.className}>
      <ReactMapGl
        {...ViewPort}
        mapboxApiAccessToken={`pk.eyJ1IjoiZmFpc2FsbDEyMyIsImEiOiJja281M3phdHMwMHNzMnZvYTY2cm90Y2Z5In0.FCkirJFLwjRyAscElfvMwQ`}
        mapStyle="mapbox://styles/faisall123/cko54hoe71uo518pfv5ver0j9"
        onViewportChange={(viewPort) => {
          setViewPort(viewPort);
        }}
      >
        {data?.item ? (
          data.item.map((val, index) => {
            return (
              <Marker
                key={`mark-${index}`}
                latitude={+val.addres.lattitude}
                longitude={+val.addres.longtitude}
              >
                <img src={CarMarkIcon} alt="car icon" height="30" width="30" />
              </Marker>
            );
          })
        ) : (
          <Marker
            latitude={data.CityCordinate.latitude}
            longitude={data.CityCordinate.longitude}
          >
            <img src={CarMarkIcon} alt="car icon" height="30" width="30" />
          </Marker>
        )}
      </ReactMapGl>
    </div>
  );
}
