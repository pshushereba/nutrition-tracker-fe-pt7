import React from "react";
import { Doughnut } from "react-chartjs-2";

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
    <div className="w-1/6 flex flex-col justify-around mt-8">
      <div classname="w-1/12 flex flex-col">
        <div>195 lbs</div>
        <div></div>
      </div>
      <div className="flex flex-col justify-center">
        <Doughnut data={data} />
        <h2 className="w-full text-center font-semibold text-xl pt-4">
          Daily Intake
        </h2>
      </div>
      <div classname="w-1/12"></div>
    </div>
  );
};

export default DonutGraph;
