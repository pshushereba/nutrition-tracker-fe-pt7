import React from "react";
import FormInput from "../components/form/FormInput.js";

const StandardCalc = ({ bmiInfo, setBmiInfo }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    bmiCalc(bmiInfo);
  };

  const bmiCalc = (bmiInfo) => {
    const userBMI = Math.ceil(
      703 *
        (Number(bmiInfo.weight) /
          Math.pow(Number(bmiInfo.height) * 12 + Number(bmiInfo.inch), 2))
    );
    // Number(bmiInfo.kilograms) / Math.pow((Number(bmiInfo.centimeters) / 100), 2)
    setBmiInfo({ ...bmiInfo, bmi: userBMI });
    return userBMI;
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="flex">
          <div className="m-2 w-24">
            <FormInput
              type="text"
              label="Your Height"
              name="height"
              placeHolder="ft"
              setInput={setBmiInfo}
              data={bmiInfo}
            ></FormInput>
          </div>
          <div className="m-2 w-24">
            <FormInput
              type="text"
              label="In"
              name="inch"
              placeHolder="inch"
              setInput={setBmiInfo}
              data={bmiInfo}
            ></FormInput>
          </div>
          <div className="m-2 mx-6 w-24">
            <FormInput
              type="text"
              label="Your Weight"
              name="weight"
              placeHolder="lbs"
              setInput={setBmiInfo}
              data={bmiInfo}
            ></FormInput>
          </div>

          <div className="flex self-center">
            <button
              className="text-xs text-white px-6 py-1 bg-indigo-500 border-indigo-500 rounded"
              htmlType="submit"
            >
              Calculate My BMI
            </button>
            {/* <button className="text-xs text-white px-6 py-1 bg-indigo-500 border-indigo-500 rounded" onClick={clearForm}>Clear</button> */}
          </div>
        </div>
      </form>
    </div>
  );
};

export default StandardCalc;
