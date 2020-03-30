import React, { useState } from "react";
import DashboardChartItem from "./DashboardChartItem.js";
import { useMutation } from '@apollo/react-hooks';
import { UPDATE_FOOD_STRING } from "../../gql/mutations.js";

const DashboardChart = ({ records, activeControl }) => {
  // const [records, setRecords] = useState([]);
  // console.log("In DashboardChart", data);
  // this only exists to keep things from breaking.
  // you will need to replace count with the actual data from the useEffect call
  // or the props

  const [updateFoodString] = useMutation(UPDATE_FOOD_STRING)

  const toggleFav = (item) => {
    
    let parsedFood = JSON.parse(item.food_string)
    const fav = parsedFood.favorite
    parsedFood = {...parsedFood, favorite: !fav }
    updateFoodString({
      variables: {
        id: item.id,
        food_string: JSON.stringify(parsedFood)
      }
    })
    const updateItem = {...item, food_string: JSON.stringify(parsedFood)}
    return updateItem;
  }

  const calCount = 50;

  return (
    <section className="dashboard-chart w-3/5">
      <table className="w-full">
        <tr className="flex justify-around align-center">
          <div className="flex w-2/5 justify-start mb-3">
            <th className="mr-8 muli text-sm font-normal text-gray-900">3 items logged</th>
            <th className="muli text-sm font-normal text-gray-600">{calCount} total calories</th>
          </div>
          <div className="flex w-2/5 justify-around">
            <th className="muli text-sm font-normal text-gray-900 mx-3">Calories</th>
            <th className="muli text-sm font-normal text-gray-900 mx-4 ">Fats</th>
            <th className="muli text-sm font-normal text-gray-900 mx-4">Protein</th>
            <th className="muli text-sm font-normal text-gray-900 mx-4">Carbs</th>
          </div>
        </tr>
        {/* change temp to records / props */}
        {records.map(cv => {
          return <DashboardChartItem 
                  data={cv} 
                  key={cv.id} 
                  activeControl={activeControl}
                  toggleFav={toggleFav}
                  />;
        })}
      </table>
    </section>
  );
};

export default DashboardChart;