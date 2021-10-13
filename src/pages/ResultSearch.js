import Header from "Parts/Header";
import CarsResult from "Parts/ResultSearch.js/CarsResult";
import React, { useState, useEffect } from "react";
import Maps from "Components/Maps";
import Search from "Constant/api/Search";
import { connect } from "react-redux";
import { checkoutBooking } from "Store/actions/checkout";
import Pagination from "Components/Pagination";
import Breadcrumb from "Components/Breadcrumb";
function ResultSearch(props) {
  const { checkout } = props;
  const [data, setdata] = useState([""]);
  const params = new URLSearchParams(props.location.search);
  const id = params.get("city");
  const page = params.get("page") || 1;
  useEffect(() => {
    Search.getSarch(id, page).then((res) => {
      setdata(res);
    });
  }, [id, page]);
  const pages = [
    {
      name: "home",
      url: "/",
    },
    {
      name: "Search",
      url: "/#",
    },
  ];
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
      <section className="container mx-auto -mb-20">
        <Breadcrumb data={pages} />
      </section>
      <section className="container mx-auto mt-28">
        <h3 className="text-start inline text-3xl font-semibold mt-20  text-blue-900">
          Result for {checkout?.totalDays ?? "null"} Days
        </h3>
        <div className="flex mt-5 h-screen">
          <div className="w-1/2 mr-6 h-ful ">
            <Maps
              className="w-full h-full"
              zoom={10}
              data={data}
              height={700}
              duration={checkout?.totalDays ?? 1}
            ></Maps>
          </div>
          <div className="w-1/2">
            <CarsResult
              data={data}
              duration={checkout?.totalDays ?? "null"}
              city={id}
            ></CarsResult>
          </div>
        </div>
      </section>
      <section className="mx-auto flex justify-center container mt-16">
        <Pagination
          totalPage={data.totalPage}
          id={id}
          activePage={data.activePage}
          nextPage={data.nextPage}
          prevPage={data.prevPage}
        />
      </section>
    </>
  );
}
const mapStateToProps = (state) => ({
  checkout: state.checkout,
});

export default connect(mapStateToProps, { checkoutBooking })(ResultSearch);
