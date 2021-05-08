import Header from "Parts/Header";
import Hero from "Parts/Hero";
import React from "react";
import country from "json/Country.json";
export default function LandingPage() {
  return (
    <>
      <section className="header-banner relative">
        <div className="container mx-auto relative z-10">
          <Header></Header>
          <Hero data={country}></Hero>
        </div>
      </section>
    </>
  );
}
