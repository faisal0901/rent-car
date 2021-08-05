import React from "react";
import Header from "Parts/Header";
import Breadcrumb from "Components/Breadcrumb";
import ImageProduct from "Parts/ImageProduct";
import JsonData from "json/details.json";
import ConfirmCheckout from "Parts/ConfirmCheckout";
import Feature from "Parts/Feature";
import Address from "Parts/Addres";
import { connect } from "react-redux";
import { checkoutBooking } from "Store/actions/checkout";
function DetailsPage(props) {
  const { checkout } = props;

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
      <section className="container mx-auto mt-14">
        <div>
          <h1 className="text-2xl">Where to Pick Up?</h1>
          <Address></Address>
        </div>
      </section>
    </>
  );
}
const mapStateToProps = (state) => ({
  checkout: state.checkout,
});
export default connect(mapStateToProps, { checkoutBooking })(DetailsPage);
