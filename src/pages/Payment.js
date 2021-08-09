import Header from "Parts/Header";
import React, { useEffect, useState } from "react";
import Stepper from "Components/Stepper";
import Number from "Components/Stepper/Number";
import BookingPage from "Parts/Checkout/BookingPage";
import Title from "Components/Stepper/Tittle";
import MainContent from "Components/Stepper/MainContent";
export default function Payment() {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  const initState = {
    fullName: "",
    email: "",
    phoneNumber: "",
    bankForm: "",
    bankPlaceholder: "",
  };
  const [state, setState] = useState(initState);
  const onChange = (e) => {};
  const steps = {
    personalInformation: {
      title: "Personal Information",
      description: "please completed the blank field Bellow",
      content: <BookingPage />,
    },
    BookingInformation: {
      title: "Personal Information",
      description: "please completed the blank field Bellow",
    },
    completedInformation: {
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
              </>
            );
          }}
        </Stepper>
      </section>
    </>
  );
}
