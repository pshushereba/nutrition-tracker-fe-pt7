import React from "react";
import { Doughnut, defaults } from "react-chartjs-2";
import { merge } from 'lodash'

/*
Access to making adjustments to the chart

merge(defaults, {
  global: {
    legend: {
      display: false,
    },
    height: 150,
    width: 150
  }
})
*/


const DonutGraph = ({ data }) => {
  return <Doughnut data={data} />;
};

export default DonutGraph;
