import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Spacer } from "../Layout/LayoutPrimitives";

const data = {
  datasets: [
    {
      data: [300, 50, 100],
      backgroundColor: ["#00426C", "#4D8037", "#FFCE56"],
      hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
    },
  ],
};

const DonutGraph = () => {
  return (
    <div className="w-1/5 flex justify-around mt-16">
      <div className="flex flex-col -mr-16">
        <Spacer />
        <div className="flex items-baseline">
          <div className="text-3xl">195</div>
          <div>lbs</div>
        </div>
        <div>Weight</div>
      </div>
      <div className=" w-56 flex flex-col justify-center">
        <Doughnut data={data} />
        <h2 className="w-full text-center font-semibold text-xl pt-4">
          Daily Intake
        </h2>
      </div>
      <div className="flex flex-col -ml-16">
        <Spacer />
        <div className="flex items-baseline">
          <div className="text-3xl">12</div>
          <div>days</div>
        </div>
        <div>Streak</div>
      </div>
    </div>
  );
};

export default DonutGraph;
