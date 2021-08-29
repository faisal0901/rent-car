import React, { useEffect } from "react";
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
function DetailsPage(props) {
  const { checkout } = props;
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  const data = [
    {
      name: "home",
      url: "/",
    },
    {
      name: "details",
      url: "/#",
    },
  ];
  return (
    <>
      <section className="container mx-auto">
        <Header isBlue></Header>
      </section>
      <div className="container mx-auto ">
        <Breadcrumb data={data} />
        <div className="flex">
          <div className="w-8/12">
            <ImageProduct data={JsonData.image} />
          </div>
          <div className="w-5/12" style={{ height: 538 }}>
            <ConfirmCheckout checkoutData={checkout} data={JsonData} />
          </div>
        </div>
      </div>
      <section className="container mx-auto mt-14">
        <h2 className="text-2xl font-bold">
          {JsonData?.carName ?? "Car name"}
        </h2>
        <Feature data={JsonData}></Feature>
      </section>
      <section className="container mx-auto mt-14 flex h-96">
        <div className="w-1/2">
          <h1 className="text-2xl">Where to Pick Up?</h1>
          <Address data={JsonData.addres}></Address>
        </div>
        <div className="w-1/2 h-96 relative">
          <div className="w-full mr-6 h-full">
            <Maps
              zoom={11}
              className="w-full h-full"
              data={JsonData.addres}
            ></Maps>
          </div>
        </div>
      </section>
      <section className="mt-20">
        <div className="container mx-auto">
          <h3 className="text-start inline text-3xl font-semibold text-blue-900">
            What People Says
          </h3>
          <Testimony />
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
