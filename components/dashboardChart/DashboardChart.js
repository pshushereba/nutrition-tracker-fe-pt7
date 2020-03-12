import React, { useState, useEffect } from "react";
import DashboardChartItem from "./DashboardChartItem.js";

const DashboardChart = props => {
  const [records, setRecords] = useState([]);
  useEffect(() => {
    // fire off a request to get all the food here
    // set it to records
    // or delete this if an array is being passed via props
  }, []);

  // this only exists to keep things from breaking.
  // you will need to replace count with the actual data from the useEffect call
  // or the props
  const calCount = 50;
  const itemCount = 1;

  // the following is what the chart item expects
  // it is okay to change it once we get real data
  // delete this when you're done
  const temp = [
    {
      id: 1,
      quantity: 2,
      name: "Sassage",
      calories: 50,
      fats: 19,
      protein: 17,
      carbs: 2
    },
    {
      id: 2,
      quantity: 2,
      name: "Onons",
      calories: 5,
      fats: 0,
      protein: 0,
      carbs: 1
    },
    {
      id: 3,
      quantity: 7,
      name: "Beanos",
      calories: 110,
      fats: 20,
      protein: 27,
      carbs: 16
    }
  ];

  return (
    <section className="dashboard-chart w-3/5">
      <table className="w-full">
        <tr className="flex justify-around align-center">
          <div className="flex w-3/5 justify-start mb-3">
            <th className="mr-8 muli text-sm font-normal text-gray-900">{itemCount} items logged</th>
            <th className="muli text-sm font-normal text-gray-600">{calCount} total calories</th>
          </div>
          <div className="flex w-2/5 justify-around">
            <th className="muli text-sm font-normal text-gray-900">Calories</th>
            <th className="muli text-sm font-normal text-gray-900">Fats</th>
            <th className="muli text-sm font-normal text-gray-900">Protein</th>
            <th className="muli text-sm font-normal text-gray-900">Carbs</th>
          </div>
        </tr>
        {/* change temp to records / props */}
        {temp.map(cv => {
          return <DashboardChartItem data={cv} key={cv.id} />;
        })}
      </table>
    </section>
  );
};

export default DashboardChart;
