import React from "react";
import InputText from "Components/Form/InputText";
export default function BookingPage(props) {
  const { data, details, checkout } = props;
  return (
    <section className="container mx-auto mt-10">
      <div className="mx-40 flex justify-between">
        <div className="w-1/2">
          <div>
            <label>Full Name</label>
            <InputText
              onChange={(e) => {
                props.onChange(e);
              }}
              type="text"
              value={data.fullName}
              name="fullName"
            ></InputText>
          </div>
          <div>
            <label>Email Address</label>
            <InputText
              onChange={(e) => {
                props.onChange(e);
              }}
              type="email"
              name="email"
              value={data.email}
            ></InputText>
          </div>
          <div>
            <label>Phone Number</label>
            <InputText
              onChange={props.onChange}
              name="phoneNumber"
              type="number"
              value={data.phoneNumber}
            ></InputText>
          </div>
        </div>
        <div className="w-1/2">
          <figure>
            <img
              src={details?.image[0].imageUrl ?? "image"}
              alt={details?.carName ?? "car Name"}
              className="w-full h-72"
            />
          </figure>
          <div className="flex justify-between">
            <p className="font-semibold text-gray-600">
              <span className="text-green-500">
                ${+details.price * checkout.totalDays}
              </span>
              {"    "}
              for {checkout.totalDays} Days
            </p>
            <p className="text-xl font-semibold">{details.carName}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
