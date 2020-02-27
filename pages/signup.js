import AltLayout from "../components/AltLayout";
import ThunderboltSVG from "../components/svg/ThunderboltSVG";
import { useState } from "react";
import { useRouter } from "next/router";

import ContactInfo from "../components/form/ContactInfo";
import DietPreference from "../components/form/DietPreference";
import Macros from '../components/form/Macros';
import LogInSVG from '../components/svg/LogInSVG';

const SignUp = () => {
  const router = useRouter();
  const [formStep, setFormStep] = useState(1);

  function nextFormStep() {
    let step = formStep;
    setFormStep((step += 1));
    console.log(formStep);
  }

  function prevFormStep() {
    let step = formStep;
    if (step <= 1) {
      router.push("/");
    }
    setFormStep((step -= 1));
    console.log(formStep);
  }

  return (
    <AltLayout>
      <div className="mt-12">
        <div className="flex">
          <ThunderboltSVG />
          <h1 className="text-2xl font-bold">{formStep === 3 ? "Almost Finished" : "Let's Get Started"}</h1>
        </div>
      </div>
      {formStep === 1 ? (
        <ContactInfo />
      ) : formStep === 2 ? (
        <DietPreference />
      ) : formStep === 3 ? (
        <Macros />
      ) : (
        "Not Done Yet"
      )}
      <div className="flex w-full justify-around mt-10">
        <button className="text-xs px-6 py-1" onClick={prevFormStep}>
          {formStep === 1 ? "Cancel" : "Go Back"}
        </button>
        <button
          className="text-xs text-white px-6 py-1 bg-indigo-500 border-indigo-500 rounded"
          onClick={nextFormStep}
        >
          {formStep === 1 ? "Let's Go!" : "Continue"}
        </button>
      </div>
      {formStep === 3 && <LogInSVG />}
    </AltLayout>
  );
};

export default SignUp;
