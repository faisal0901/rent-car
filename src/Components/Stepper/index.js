import React, { useState } from "react";

export default function Stepper(props) {
  const { steps } = props;
  const stepsKey = Object.keys(steps);
  const [currentStep, setCurrentStep] = useState(stepsKey[0]);
  const totalStep = stepsKey.length;
  const indexstep = stepsKey.indexOf(currentStep);
  function prevSteps() {
    if (+indexstep > 0) {
      setCurrentStep(stepsKey[indexstep - 1]);
    }
  }
  function nextSteps() {
    if (+indexstep < totalStep) {
      setCurrentStep(stepsKey[indexstep + 1]);
    }
  }
  return <div>{props.children(prevSteps, nextSteps, currentStep, steps)}</div>;
}
