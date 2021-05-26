import InputNumber from "Components/Form/InputNumber";
import React, { Component } from "react";

export default class ConfirmCheckout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        duration: 1,
        date: new Date(),
      },
    };
  }
  render() {
    return (
      <div className="w-12/13 h-full ml-5 border rounded-xl border-gray-300">
        <div className="ml-5 mt-14">
          <h4 className="text-2xl font-medium">Confirm Checkout</h4>
          <p className="text-4xl mt-5 font-semibold text-gray-300 ">
            <span className="text-green-500 ">$200</span> per day
          </p>
          <div className="mt-5">
            <InputNumber></InputNumber>
          </div>
        </div>
      </div>
    );
  }
}
