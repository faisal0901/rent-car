import Header from "Parts/Header";
import CarsResult from "Parts/ResultSearch.js/CarsResult";
import React from "react";
import ResultData from "json/search.json";
import Maps from "Components/Maps";
export default function ResultSearch() {
  const duration = 3;
  return (
    <>
      <section className="container mx-auto">
        <Header isBlue></Header>
      </section>
      <section className="container mx-auto mt-28">
        <h3 className="text-start inline text-3xl font-semibold mt-20  text-blue-900">
          Result for {duration} Days
        </h3>
        <div className="flex mt-5 h-screen">
          <div className="w-1/2 mr-6 h-3/4 shadow-md">
            <Maps className="w-full h-full" zoom={11} data={ResultData}></Maps>
          </div>
          <div className="w-1/2">
            <CarsResult data={ResultData.item} duration={duration}></CarsResult>
          </div>
        </div>
      </section>
    </>
  );
}
