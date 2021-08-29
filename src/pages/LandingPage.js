import Header from "Parts/Header";
import Hero from "Parts/Hero";
import React, { useEffect, useState } from "react";
// import country from "json/Country.json";

import Client from "Parts/Client";
import Cars from "Parts/Cars";
import HomePage from "Constant/api/HomePage";
import Footer from "Parts/Footer";
import { connect } from "react-redux";
import { checkoutBooking } from "Store/actions/checkout";

function LandingPage(props) {
  const [data, setdata] = useState([""]);
  useEffect(() => {
    document.title = `Rent A Cars`;
    window.scroll(0, 0);
    HomePage.cars()
      .then((res) => {
        console.log(res);
        setdata(res.cars);
      })
      .catch((err) => {
        setdata(err);
      });
  }, []);

  return (
    <>
      <section className="header-banner relative ">
        <div className="container mx-auto relative z-10">
          <Header></Header>
          <Hero submitCheckout={props.checkoutBooking}></Hero>
        </div>
      </section>
      <section className="mt-40">
        <div className="container mx-auto">
          <Client />
        </div>
      </section>
      <section className="mt-40">
        <div className="container mx-auto">
          <h3 className="text-start inline text-3xl font-semibold text-blue-900">
            Popular car
          </h3>
          <Cars data={data} />
        </div>
      </section>

      <section className="mt-20">
        <div className="container mx-auto">
          <Footer />
        </div>
      </section>
    </>
  );
}

export default connect(null, { checkoutBooking })(LandingPage);
