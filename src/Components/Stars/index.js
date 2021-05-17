import React from "react";

export default function Stars({ height, width, className, value, spacing }) {
  const decimals = +value % 1;
  const stars = [];
  let leftPos = 0;
  for (let i = 0; i < 5 && i < value - decimals; i++) {
    leftPos = leftPos + width;
    stars.push(
      <div
        className="star absolute inline-flex bg-yellow-400"
        key={`stars-${i}`}
        style={{
          zIndex: 2,
          left: i * width,
          height: height,
          width: width,
          marginRight: spacing,
        }}
      ></div>
    );
  }
  if (decimals > 0 && value <= 5) {
    stars.push(
      <div
        key={`starsDecimals`}
        className="star absolute inline-flex bg-yellow-400 "
        style={{
          zIndex: 2,
          left: leftPos,
          height: height,
          width: decimals * width,
        }}
      ></div>
    );
  }
  const starsPlaceholder = [];
  for (let index = 0; index < 5; index++) {
    starsPlaceholder.push(
      <div
        className="star bg-gray-400 absolute"
        key={`stars-${index}`}
        style={{
          zIndex: 1,
          left: index * width,
          height: height,
          width: width,
          marginRight: spacing,
        }}
      ></div>
    );
  }
  return (
    <>
      <div className="stars relative inline-flex" style={{ height }}>
        {starsPlaceholder}
        {stars}
      </div>
    </>
  );
}
