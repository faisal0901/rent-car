import Header from "Parts/Header";
import CarsResult from "Parts/ResultSearch.js/CarsResult";
import React from "react";
import ResultData from "json/search.json";
import Maps from "Components/Maps";
import { connect } from "react-redux";
import { checkoutBooking } from "Store/actions/checkout";
function ResultSearch(props) {
  const { checkout } = props;
  if (!checkout) {
    return (
      <div className="text-center h-screen w-screen  flex justify-center ">
        <button className="px-7 py-3 bg-gray-300 mt-auto  rounded my-auto">
          Back
        </button>
      </div>
    );
  }
  return (
    <>
      <section className="container mx-auto">
        <Header isBlue></Header>
      </section>
      <section className="container mx-auto mt-28">
        <h3 className="text-start inline text-3xl font-semibold mt-20  text-blue-900">
          Result for {checkout?.totalDays ?? "null"} Days
        </h3>
        <div className="flex mt-5 h-screen">
          <div className="w-1/2 mr-6 h-3/4 shadow-md">
            <Maps className="w-full h-full" zoom={11} data={ResultData}></Maps>
          </div>
          <div className="w-1/2">
            <CarsResult
              data={ResultData.item}
              duration={checkout?.totalDays ?? "null"}
            ></CarsResult>
          </div>
        </div>
      </section>
    </>
  );
}
const mapStateToProps = (state) => ({
  checkout: state.checkout,
});

export default connect(mapStateToProps, { checkoutBooking })(ResultSearch);
