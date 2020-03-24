import { useState } from "react";

import DashboardChart from "../dashboardChart/DashboardChart";

export default function FoodLog() {
  // We'll pull in the food data off the user, filter the items by the control selected, then pass that array to the chart component
  const [activeControl, setActiveControl] = useState("breakfast");
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

  const [foodData, setFoodData] = useState(temp);

  const handleClick = e => {
    setActiveControl(e.target.name);
    //const filteredData = userFoodData.filter(meal => meal === activeControl)
    //setFoodData(filteredData)
  };

  if (!foodData) return <div>Loading Component</div>;

  return (
    <>
      <div className="flex text- font-medium py-2">
        <div
          className={`${
            activeControl === "breakfast" ? "border-b-2 border-pink-500" : ""
          } cursor-pointer mr-12`}
          onClick={() => setActiveControl("breakfast")}
        >
          Breakfast
        </div>
        <div
          className={`${
            activeControl === "lunch" ? "border-b-2 border-pink-500" : ""
          } cursor-pointer mr-12`}
          onClick={() => setActiveControl("lunch")}
        >
          Lunch
        </div>
        <div
          className={`${
            activeControl === "dinner" ? "border-b-2 border-pink-500" : ""
          } cursor-pointer mr-12`}
          onClick={() => setActiveControl("dinner")}
        >
          Dinner
        </div>
        <div
          className={`${
            activeControl === "Snack" ? "border-b-2 border-pink-500" : ""
          } cursor-pointer mr-12`}
          onClick={() => setActiveControl("Snack")}
        >
          Snack
        </div>
        <div
          className={`${
            activeControl === "water" ? "border-b-2 border-pink-500" : ""
          } cursor-pointer mr-12`}
          onClick={() => setActiveControl("water")}
        >
          Water
        </div>
      </div>
      <DashboardChart data={foodData} />
    </>
  );
}

// const data = {
//   data: {
//     createDailyRecord: {
//       date: "Mon Mar 23 2020 09:46:52 GMT-0500 (Central Daylight Time)",
//       current_weight: 175,
//       calories: 188,
//       fat: 0,
//       carbs: 50,
//       fiber: 8,
//       protein: 0,
//       food_string:
//         '{"parsed":{"parsed":[{"quantity":1,"measure":"whole","food":"apple","foodId":"food_a1gb9ubb72c7snbuxr3weagwv0dd","weight":182,"retainedWeight":182,"measureURI":"http://www.edamam.com/ontologies/edamam.owl#Measure_unit","status":"OK"}]}}',
//       meal_type: "breakfast",
//       createdAt: "2020-03-24T03:46:53.242Z",
//       __typename: "DailyRecord"
//     }
//   }
// };
