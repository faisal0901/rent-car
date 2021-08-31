import React, { useEffect, useState } from "react";
import Header from "Parts/Header";
import Breadcrumb from "Components/Breadcrumb";
import ImageProduct from "Parts/ImageProduct";
import JsonData from "json/details.json";
import ConfirmCheckout from "Parts/ConfirmCheckout";
import Feature from "Parts/Feature";
import Address from "Parts/Address";
import Testimony from "Parts/Testimony";
import { connect } from "react-redux";
import { checkoutBooking } from "Store/actions/checkout";
import Maps from "Components/Maps";
import Footer from "Parts/Footer";
import details from "Constant/api/details";
function DetailsPage(props) {
  const { checkout } = props;
  const [data, setdata] = useState({});

  useEffect(() => {
    window.scroll(0, 0);
    details.get(props.match.params.id).then((res) => {
      setdata(res);
    });
  }, [props.match]);

  const pages = [
    {
      name: "home",
      url: "/",
    },
    {
      name: "details",
      url: "/#",
    },
  ];
  if (!data.hasOwnProperty("cars")) {
    return null;
  }

  return (
    <>
      <section className="container mx-auto">
        <Header isBlue></Header>
      </section>
      <div className="container mx-auto ">
        <Breadcrumb data={pages} />
        <div className="flex">
          <div className="w-8/12">
            <ImageProduct data={data.cars[0].images} />
          </div>
          <div className="w-5/12" style={{ height: 538 }}>
            <ConfirmCheckout checkoutData={checkout} data={JsonData} />
          </div>
        </div>
      </div>
      <section className="container mx-auto mt-14">
        <h2 className="text-2xl font-bold">
          {data?.cars[0]?.carName ?? "Car name"}
        </h2>
        <Feature data={data.cars[0]}></Feature>
      </section>
      <section className="container mx-auto mt-14 flex h-96">
        <div className="w-1/2">
          <h1 className="text-2xl">Where to Pick Up?</h1>
          <Address data={data.cars[0].address}></Address>
        </div>
        <div className="w-1/2 relative">
          <div className="w-full mr-6 ">
            <Maps
              zoom={11}
              className="w-full  h-full"
              data={data.cars[0]}
              duration={checkout?.totalDays ?? 1}
              height={400}
            ></Maps>
          </div>
        </div>
      </section>
      <section className="mt-40">
        <div className="container mx-auto">
          {data.hasOwnProperty("rating") ? (
            <h3 className="text-start inline text-3xl font-semibold text-blue-900">
              What People Says
            </h3>
          ) : (
            <h3 className="text-start inline text-1xl text-red-900">
              reviews not found
            </h3>
          )}
          <Testimony data={data.rating} />
        </div>
      </section>
      <section className="container mx-auto">
        <Footer></Footer>
      </section>
    </>
  );
}
const mapStateToProps = (state) => ({
  checkout: state.checkout,
});
export default connect(mapStateToProps, { checkoutBooking })(DetailsPage);
