import React from "react";
import ImageCompleted from "assets/images/completed.png";
export default function Completed() {
  return (
    <section className="container mx-auto mt-10">
      <figure className="flex justify-center text-center">
        <img src={ImageCompleted} className="h-96 w-96" alt="completed_image" />
      </figure>
    </section>
  );
}
