import React, { useState, useEffect, useRef } from "react";
import ReactMapGl, { Marker } from "react-map-gl";

export default function Maps(props) {
  const [ViewPort, setViewPort] = useState({
    width: "100%",
    height: props.height,
    latitude: undefined,
    longitude: undefined,
    zoom: props.zoom,
  });
  let timeOutSearch = useRef(null);

  useEffect(() => {
    clearTimeout(timeOutSearch.current);
    timeOutSearch.current = setTimeout(() => {
      setViewPort({
        ...ViewPort,
        latitude:
          props?.data?.cars?.[0].address?.latitude ??
          props.data.address.latitude,
        longitude:
          props?.data?.cars?.[0].address?.longtitude ??
          props.data.address.longtitude,
      });
    }, 1000);
  }, [ViewPort, props.data]);
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
        {Array.isArray(props.data.cars) ? (
          props?.data?.cars?.map((val, index) => {
            return (
              <Marker
                key={`mark-${index}`}
                latitude={val?.address?.latitude}
                longitude={val?.address?.longtitude}
              >
                <span class="m-1 bg-white hover:bg-gray-300 rounded-full px-2 font-bold text-sm leading-loose cursor-pointer">
                  ${val?.price * props?.duration}
                </span>
              </Marker>
            );
          }) ?? "err"
        ) : (
          <Marker
            latitude={props?.data?.address?.latitude ?? -65.83618735153006}
            longitude={props?.data?.address?.longtitude ?? 103.23684707457542}
          >
            <span class="m-1 bg-white hover:bg-gray-300 rounded-full px-2 font-bold text-sm leading-loose cursor-pointer">
              ${props.data.price}
            </span>
          </Marker>
        )}
      </ReactMapGl>
    </div>
  );
}
