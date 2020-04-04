import React from "react";
import FormInput from "../components/form/FormInput.js";

const MetricCalc = ({ bmiInfo, setBmiInfo }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    bmiCalc(bmiInfo);
  };

  const bmiCalc = (bmiInfo) => {
    const userBMI = Math.ceil(
      Number(bmiInfo.kilograms) / Math.pow(Number(bmiInfo.centimeters) / 100, 2)
    );
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
              name="centimeters"
              placeHolder="cm"
              setInput={setBmiInfo}
              data={bmiInfo}
            ></FormInput>
          </div>
          <div className="m-2 w-24">
            <FormInput
              type="text"
              label="Your Weight"
              name="kilograms"
              placeHolder="kilo"
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

export default MetricCalc;
