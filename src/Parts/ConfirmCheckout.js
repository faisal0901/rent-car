import InputDate from "Components/Form/InputDate";
import { useState } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { setCheckoutBooking } from "Store/actions/checkout";
function ConfirmCheckout({ data, checkoutData, setCheckoutBooking }) {
  const history = useHistory();
  console.log(checkoutData.totalDays);
  const details = {
    price:
      checkoutData?.totalDays > 1
        ? data.price * checkoutData?.totalDays
        : data.price,
    days: checkoutData.totalDays > 1 ? checkoutData.totalDays : 1,
  };
  const [disabled, setdisabled] = useState(() => false);
  const confirm = () => {
    setCheckoutBooking({ ...checkoutData, id: data.id });
    history.push(`/checkout/${data.id}`);
  };
  return (
    <div className="w-12/13 h-full ml-5 border rounded-xl border-gray-300">
      <div className="ml-5 mt-14">
        <h4 className="text-2xl font-medium">Confirm Checkout</h4>
        <p className="text-4xl mt-5 font-semibold text-gray-300 ">
          <span className="text-green-500 ">${details.price}</span> per{" "}
          {details.days} {details.days > 1 ? "days" : "day"}
        </p>
        <div className="mt-5 w-11/12">
          <InputDate
            globalState={checkoutData}
            setCheckoutBooking={setCheckoutBooking}
            className="w-full"
            isSelected={(selected) => {
              setdisabled(selected());
            }}
          />
        </div>
      </div>
      <div className="flex justify-center mt-16">
        <div className="w-10/12">
          <button
            disabled={!disabled}
            onClick={() => confirm()}
            className="w-full bg-blue-600 hover:bg-blue-700  focus:outline-none text-white text-xl rounded-sm h-10"
          >
            Continue Checkout
          </button>
          {disabled === false ? (
            <p className="text-sm text-red-500">please Completed</p>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
}
export default connect(null, { setCheckoutBooking })(ConfirmCheckout);
