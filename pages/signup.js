import { useState } from "react"
import { useRouter } from "next/router"

import ThunderboltSVG from "../components/svg/ThunderboltSVG"
import AppLayout from "../components/AppLayout"
import ContactInfo from "../components/form/ContactInfo"
import DietPreference from "../components/form/DietPreference"
import AgeGender from "../components/form/AgeGender"
import Macros from '../components/form/Macros'
import LogInSVG from '../components/svg/LogInSVG'
import withApollo from '../lib/apollo'

const SignUp = () => {
  const router = useRouter();
  const [formStep, setFormStep] = useState(1)
  const [shouldSubmit, setShouldSubmit] = useState(false);

  function prevFormStep() {
    let step = formStep
    if (step <= 1) {
      router.push("/")
    }
    if (step !== 1) {
      setFormStep((step -= 1))
    }
  }

  return (
    <AppLayout>
      <div className="mt-12">
        <div className="flex">
          <ThunderboltSVG />
          <h1 className="text-2xl font-bold">
            {formStep === 3 ? "Almost Finished" 
            : formStep === 2 ? "Getting Personal"
            : "Let's Get Started"}</h1>
        </div>
      </div>
      {formStep === 1 ? (
        <ContactInfo 
          setFormStep={setFormStep} 
          shouldSubmit={shouldSubmit}
          setShouldSubmit={setShouldSubmit}
        />
      ) : formStep === 2 ? (
        <AgeGender />
      ) : formStep === 3 ? (
        <DietPreference />
      ) : formStep === 4 ? (
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
          onClick={() => setShouldSubmit(!shouldSubmit)}
        >
          {formStep === 1 ? "Let's Go!" : "Continue"}
        </button>
      </div>
      {formStep === 3 && <LogInSVG />}
    </AppLayout>
  );
};

export default withApollo(SignUp)
