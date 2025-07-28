import { cloneElement, useState } from "react";

const UseStepForm = (steps, extraProps) => {
  const [currentStep, setCurrentStep] = useState(0);

    const changeStep = (i) => {
      
      if (i < 0|| i >= steps.length) return;
      
      setCurrentStep(i)
  };

  const currentComponent = cloneElement(steps[currentStep], {currentStep: currentStep, ...extraProps})

  return {
    currentStep,
    currentComponent,
    changeStep,
    isFirstStep: currentStep === 0 ? true : false,
    isLastStep: currentStep +1 === steps.length ? true : false,
  };
};

export default UseStepForm;
