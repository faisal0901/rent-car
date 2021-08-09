import React from "react";

export default function Controller(props) {
  return (
    <div>
      <section className="container mx-auto justify-center flex">
        {props.children}
      </section>
      ;
    </div>
  );
}
