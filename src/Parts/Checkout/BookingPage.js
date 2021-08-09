import React from "react";
import InputText from "Components/Form/InputText";
export default function BookingPage(props) {
  const { data, itemDetails, checkout } = props;
  return (
    <section className="container mx-auto mt-10">
      <div className="mx-32 flex justify-between">
        <div className="w-1/2">
          <div>
            <label>Full Name</label>
            <InputText type="text"></InputText>
          </div>
          <div>
            <label>Email Address</label>
            <InputText type="email"></InputText>
          </div>
          <div>
            <label>No</label>
            <InputText type="number"></InputText>
          </div>
        </div>
        <div className="w-1/2"></div>
      </div>
    </section>
  );
}
