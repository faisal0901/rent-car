import React from "react";
import InputText from "Components/Form/InputText";
import InputFile from "Components/Form/InputFile";
export default function PaymentInformation(props) {
  const { data, details, checkout } = props;
  const subtotal = checkout.totalDays * details.price;
  const tax = 10;
  const grandTotal = (subtotal * 10) / 100 + subtotal;
  return (
    <section className="container mx-auto mt-10">
      <div className="mx-40 flex justify-between">
        <div className="w-1/2">
          <div>
            <label>Bank From</label>
            <InputText
              onChange={(e) => {
                props.onChange(e);
              }}
              type="text"
              value={data.bankFrom}
              name="bankFrom"
            ></InputText>
          </div>
          <div>
            <label>Bank PlaceHolder</label>
            <InputText
              onChange={(e) => {
                props.onChange(e);
              }}
              type="text"
              value={data.bankPlaceholder}
              name="bankPlaceholder"
            ></InputText>
          </div>
          <div>
            <label>proof Payment</label>
            <InputFile
              onChange={(e) => {
                props.onChange(e);
              }}
            ></InputFile>
          </div>
        </div>
        <div className="w-1/2">
          <div className="w-3/5 border-2 border-gray-300 shadow-lg">
            <div className="block">
              <p className="text-xl mb-5">Transfer Payment</p>
              <p className="text-lg mb-2">tax: {tax}% </p>
              <p className="text-lg mb-2">Subtotal: ${subtotal}</p>
              <p className="text-lg mb-2">total: ${grandTotal}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
