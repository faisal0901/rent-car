import React from "react";
import BwmIcon from "assets/images/bmw.png";
import AudiIcon from "assets/images/audi.png";
import HondaIcon from "assets/images/honda.png";
import TeslaIcon from "assets/images/tesla.png";
export default function Client() {
  return (
    <div className="clients flex flex-wrap justify-between items-center">
      <div className="w-1/4">
        <img
          src={BwmIcon}
          alt="rent a bwm"
          className="w-full filter grayscale hover:filter-none image-client hover:grayscale-0 cursor-pointer"
        />
      </div>
      <div className="w-1/4">
        <img
          src={AudiIcon}
          alt="rent a bwm"
          className="w-full filter grayscale hover:filter-none image-client hover:grayscale-0 cursor-pointer"
        />
      </div>
      <div className="w-1/4">
        <img
          src={HondaIcon}
          alt="rent a bwm"
          className="w-full filter grayscale hover:filter-none image-client hover:grayscale-0 cursor-pointer"
        />
      </div>
      <div className="w-1/4">
        <img
          src={TeslaIcon}
          alt="rent a bwm"
          className="w-full filter grayscale hover:filter-none image-client hover:grayscale-0 cursor-pointer"
        />
      </div>
    </div>
  );
}
