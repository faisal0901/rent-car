import React from "react";

export default function MainContent({ data, current }) {
  return <>{data[current] && data[current].content}</>;
}
