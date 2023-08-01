import Header from "Parts/Header";
import React, { useEffect, useState } from "react";
import Stepper from "Components/Stepper";
import Number from "Components/Stepper/Number";
import BookingPage from "Parts/Checkout/BookingPage";
import Title from "Components/Stepper/Tittle";
import MainContent from "Components/Stepper/MainContent";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { checkoutBooking } from "Store/actions/checkout";
import { populateProfile } from "Store/actions/users";
import { setAuthorizationHeader } from "../Config/axios";
import token from "Constant/api/token";
import Booking from "Constant/api/Booking";
import JsonData from "json/details.json";
import details from "Constant/api/details";
import Controller from "Components/Stepper/Controller";
import Completed from "Parts/Checkout/Completed";
import PaymentInformation from "Parts/Checkout/PaymentInformation";
function Payment({ checkout, match, users }) {
  const userCookies =
    decodeURIComponent(window.document.cookie)
      .split(";")
      ?.find?.((item) => item.indexOf("user") > -1)
      ?.split("=")[1] ?? null;

  const user = userCookies ? JSON.parse(userCookies) : undefined;

  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  const initState = {
    fullName: users?.name ? users.name : "",
    email: users?.email ? users.email : "",
    phoneNumber: "",
    bankFrom: "",
    bankPlaceholder: "",
    proofPayment: "",
  };

  const [state, setState] = useState(initState);
  const [detail, setDetail] = useState([""]);
  useEffect(() => {
    window.scroll(0, 0);
    details.get(match.params.id).then((res) => {
      setDetail(res);
    });
  }, [match.params]);
  const onChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const _submitPayment = (nextstep) => {
    const payload = new FormData();
    payload.append("fullName", state.fullName);
    payload.append("duration", checkout.totalDays);
    payload.append("startDate", checkout.startDate);
    payload.append("endDate", checkout.endDate);
    payload.append("email", state.email);
    payload.append("bankHolder", state.bankPlaceholder);
    payload.append("image", state.proofPayment[0]);
    payload.append("price", checkout.totalDays * detail.cars[0].price);
    payload.append("bankFrom", state.bankFrom);
    payload.append("car_id", detail.cars[0].id);
    payload.append("phoneNumber", state.phoneNumber);
    payload.append("user_id", users.id);
    token
      .get(users.id)
      .then((res) => {
        setAuthorizationHeader(res.token.token);

        Booking.post(payload).then(() => {
          nextstep();
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  if (!detail.hasOwnProperty("cars")) {
    return <p> loading onichan</p>;
  }
  const steps = {
    personalInformation: {
      title: "Personal Information",
      description: "please completed the blank field Bellow",
      content: (
        <BookingPage
          checkout={checkout}
          data={state}
          onChange={(e) => onChange(e)}
          details={detail?.cars[0]}
        />
      ),
    },
    paymentInformation: {
      title: "Payment Information",
      description: "please completed the blank field Bellow",
      content: (
        <PaymentInformation
          checkout={checkout}
          data={state}
          onChange={(e) => onChange(e)}
          details={detail?.cars[0]}
        />
      ),
    },
    completedPayment: {
      title: "Yeay payment Completed",
      description: "we will send you massage later",
      content: <Completed />,
    },
  };
  return (
    <>
      <section className="container mx-auto">
        <Header isBlue isCentered></Header>
        <Stepper steps={steps}>
          {(prevStep, nextStep, CurrentStep, steps) => {
            return (
              <>
                <Number
                  data={steps}
                  current={CurrentStep}
                  style={{ marginBottom: 50 }}
                ></Number>
                <Title data={steps} current={CurrentStep}></Title>
                <MainContent data={steps} current={CurrentStep}></MainContent>
                {CurrentStep === "personalInformation" && (
                  <Controller>
                    <Link
                      className="bg-gray-400  px-6 py-3 mr-5 rounded"
                      to={`/detail/${match.params.id}`}
                    >
                      Cancel
                    </Link>
                    {state.fullName !== "" &&
                      state.email !== "" &&
                      state.phoneNumber !== "" && (
                        <button
                          className="bg-blue-700 px-6 py-3 ml-5 text-white rounded"
                          onClick={nextStep}
                        >
                          Continue
                        </button>
                      )}
                  </Controller>
                )}
                {CurrentStep === "paymentInformation" && (
                  <Controller>
                    <button
                      className="bg-gray-400  px-6 py-3 mr-5 rounded"
                      onClick={() => prevStep()}
                    >
                      Cancel
                    </button>
                    {state.bankFrom !== "" &&
                      state.bankPlaceHolder !== "" &&
                      state.proofPayment !== "" && (
                        <button
                          className="bg-blue-700 px-6 py-3 ml-5 text-white rounded"
                          onClick={() => _submitPayment(nextStep)}
                        >
                          Continue
                        </button>
                      )}
                  </Controller>
                )}
                {CurrentStep === "completedPayment" && (
                  <Controller>
                    <Link
                      className="bg-gray-400  px-6 py-3 mr-5 rounded"
                      to={`/`}
                    >
                      Back to home
                    </Link>
                  </Controller>
                )}
              </>
            );
          }}
        </Stepper>
      </section>
    </>
  );
}

const mapStateToProps = (state) => ({
  checkout: state.checkout,
  users: state.users,
});
export default connect(mapStateToProps, { checkoutBooking, populateProfile })(
  Payment
);
