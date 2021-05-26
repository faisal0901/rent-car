import React from "react";
import Header from "Parts/Header";
import Breadcrumb from "Components/Breadcrumb";
import ImageProduct from "Parts/ImageProduct";
import JsonData from "json/details.json";
import ConfirmCheckout from "Parts/ConfirmCheckout";
export default function DetailsPage() {
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
            <ConfirmCheckout />
          </div>
        </div>
      </div>
    </>
  );
}
