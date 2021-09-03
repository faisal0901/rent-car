import React from "react";

export default function Invoice({ data }) {
  const formatDate = (date) => {
    const d = new Date(date);
    const dtf = new Intl.DateTimeFormat("en", {
      year: "numeric",
      month: "short",
      day: "2-digit",
    });
    const [{ value: mo }, , { value: da }] = dtf.formatToParts(d);

    return `${da} ${mo}`;
  };
  return (
    <div className="w-full">
      <div className="bg-blue-500 text-white text-2xl text-center">
        booking Num #{data?.invoice_number ?? "num"}
      </div>
      <div className="w-full flex">
        <div className="w-1/3 ">
          <p className="text-2xl font-bold mb-3">Users Details</p>
          <div className="flex-col text-start mb-3">
            <p className="text-xl font-bold">Name</p>
            <p className="text-lg font-thin">{data?.User?.name ?? ""}</p>
          </div>
          <div className="flex-col text-start mb-3">
            <p className="text-xl font-bold">email:</p>
            <p className="text-lg font-thin">{data?.User?.email ?? ""}</p>
          </div>
          <div className="flex-col text-start mb-3">
            <p className="text-xl font-bold">Phone:</p>
            <p className="text-lg font-thin">{data?.phoneNumber ?? ""}</p>
          </div>
        </div>
        <div className="w-1/3 mx-10">
          {" "}
          <p className="text-2xl font-bold mb-3">Item Details</p>
          <div className="flex-col text-start mb-3">
            <p className="text-xl font-bold">Car Name</p>
            <p className="text-lg font-thin">{data?.Car?.carName ?? ""}</p>
          </div>
          <div className="flex-col text-start mb-3">
            <p className="text-xl font-bold">duration:</p>
            <p className="text-lg font-thin">{data?.duration ?? ""} Days</p>
          </div>
          <div className="flex-col text-start mb-3">
            <p className="text-xl font-bold">Pick Up:</p>
            <p className="text-lg font-thin">
              {formatDate(data?.startDate ?? new Date())}
            </p>
          </div>
          <div className="flex-col text-start mb-3">
            <p className="text-xl font-bold">drop off:</p>
            <p className="text-lg font-thin">
              {" "}
              {formatDate(data?.endDate ?? new Date())}
            </p>
          </div>
        </div>
        <div className="w-1/3 ">
          <p className="text-2xl font-bold mb-3">Payment</p>
          <div className="flex-col text-start mb-3">
            <p className="text-xl font-bold">status:</p>
            <p
              className={`text-lg font-thin ${
                data?.payment_status === "pending"
                  ? "text-red-500"
                  : "text-green-500"
              }`}
            >
              {data?.payment_status ?? ""}
            </p>
          </div>
          <div className="flex-col text-start mb-3">
            <p className="text-xl font-bold">total:</p>
            <p className="text-lg font-thin">${data?.price}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
