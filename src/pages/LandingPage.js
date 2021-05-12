import Header from "Parts/Header";
import Hero from "Parts/Hero";
import React from "react";
import country from "json/Country.json";
import Client from "Parts/Client";
import Cars from "Parts/Cars";
export default function LandingPage() {
  return (
    <>
      <section className="header-banner relative">
        <div className="container mx-auto relative z-10">
          <Header></Header>
          <Hero data={country}></Hero>
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
          <Cars />
        </div>
      </section>
    </>
  );
}
