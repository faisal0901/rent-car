import Header from "Parts/Header";
import React, { useEffect, useState } from "react";
import Stepper from "Components/Stepper";
import Number from "Components/Stepper/Number";
import BookingPage from "Parts/Checkout/BookingPage";
import Title from "Components/Stepper/Tittle";
import MainContent from "Components/Stepper/MainContent";
import { connect } from "react-redux";
import { checkoutBooking } from "Store/actions/checkout";
import JsonData from "json/details.json";
import { Link } from "react-router-dom";
import Controller from "Components/Stepper/Controller";
import PaymentInformation from "Parts/Checkout/PaymentInformation";
function Payment({ checkout }) {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  const initState = {
    fullName: "",
    email: "",
    phoneNumber: "",
    bankFrom: "",
    bankPlaceholder: "",
  };
  const [state, setState] = useState(initState);

  const onChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const steps = {
    personalInformation: {
      title: "Personal Information",
      description: "please completed the blank field Bellow",
      content: (
        <BookingPage
          checkout={checkout}
          data={state}
          onChange={(e) => onChange(e)}
          details={JsonData}
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
          details={JsonData}
        />
      ),
    },
    completedPayment: {
      title: "Personal Information",
      description: "please completed the blank field Bellow",
    },
  };
  return (
    <>
      <section className="container mx-auto">
        <Header isBlue isCentered></Header>
        <Stepper steps={steps}>
          {(prevStep, nextStep, CurrentStep, steps) => {
            console.log(CurrentStep);
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
                      to={`/detail/${JsonData.id}}`}
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
                      to={`/detail/${JsonData.id}}`}
                    >
                      Cancel
                    </button>
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
});
export default connect(mapStateToProps, { checkoutBooking })(Payment);
