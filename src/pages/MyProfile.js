import Sidebar from "Parts/Sidebar";
import React, { useState, useEffect } from "react";
import Booking from "Constant/api/Booking";
import { setAuthorizationHeader } from "Config/axios";
import { useSelector } from "react-redux";
import Modal from "Components/Modal";
import Invoice from "Parts/Invoice";
export default function MyProfile() {
  const USERS = useSelector((state) => state.users);
  const [data, setdata] = useState([""]);
  useEffect(() => {
    let session = "";
    if (localStorage.getItem("token")) {
      Booking.get(USERS.id).then((res) => {
        session = JSON.parse(localStorage.getItem("token"));

        setAuthorizationHeader(session.token);
        setdata(res.data);
      });
    }
  }, [USERS]);
  // if (!data[0].hasOwnProperty("cars")) {
  //   return null;
  // }
  console.log(data[0]);

  return (
    <div className="flex">
      <Sidebar></Sidebar>
      <div className="container mx-auto" style={{ height: window.innerHeight }}>
        <table className="min-w-full overflow-scroll">
          <thead>
            <tr>
              <th className="px-6 py-3 border-b-2 border-gray-300 text-left leading-4 text-blue-500 tracking-wider">
                ID
              </th>
              <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">
                Cover
              </th>
              <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">
                Car
              </th>
              <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">
                Price
              </th>
              <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">
                duration
              </th>
              <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">
                Status
              </th>

              <th className="px-6 py-3 border-b-2 border-gray-300"></th>
            </tr>
          </thead>
          <tbody className="bg-white">
            {data?.map((val, index) => {
              return (
                <tr key={`tr-${index}`}>
                  <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
                    <div className="text-sm leading-5 text-gray-800">
                      #{val?.invoice_number ?? "num"}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
                    <img
                      src={`${process.env.REACT_APP_API_HOST}/${
                        val?.Car?.CarsImages?.[0].image ?? "image"
                      }`}
                      alt="cars"
                      className="w-26 h-20"
                    />
                  </td>
                  <td className="px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5">
                    {val?.Car?.carName ?? "carName"}
                  </td>
                  <td className="px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5">
                    ${val?.price ?? "ini price"}
                  </td>
                  <td className="px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5">
                    {val?.duration ?? ""} Days
                  </td>
                  <td className="px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5">
                    <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                      <span
                        aria-hidden
                        className={`absolute inset-0  opacity-50 rounded-full ${
                          val?.payment_status === "pending"
                            ? "bg-red-300"
                            : "bg-green-300"
                        }`}
                      ></span>
                      <span className="relative text-xs">
                        {" "}
                        {val?.payment_status ?? "status"}
                      </span>
                    </span>
                  </td>

                  <td className="px-6 relative py-4 whitespace-no-wrap text-right border-b border-gray-500 text-sm leading-5">
                    <Modal content={(toggle) => <Invoice data={val}></Invoice>}>
                      {(toggle) => (
                        <button
                          onClick={toggle}
                          className="px-5 link-wrapped py-2 border-blue-500 border text-blue-500 rounded transition duration-300 hover:bg-blue-700 hover:text-white focus:outline-none"
                        >
                          details invoice
                        </button>
                      )}
                    </Modal>
                  </td>
                </tr>
              );
            }) ?? ""}
          </tbody>
        </table>
      </div>
    </div>
  );
}
