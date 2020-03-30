import { useState, useEffect } from "react";
import { GET_FOOD_LOG } from '../../gql/queries';
import { useLazyQuery, useQuery } from '@apollo/react-hooks';

import DashboardChart from "../dashboardChart/DashboardChart";

export default function FoodLog() {
  // We'll pull in the food data off the user, filter the items by the control selected, then pass that array to the chart component
  const [activeControl, setActiveControl] = useState("breakfast");

  const [foodData, setFoodData] = useState();

  const { loading, error, data, refetch } = useQuery(GET_FOOD_LOG)

  useEffect(() => {
    refetch()
  }, [])

  if (loading) return 'Loading...';
  if (error) return `Error: ${error}`


  const handleClick = e => {
    setActiveControl(e.target.name);
    //const filteredData = userFoodData.filter(meal => meal === activeControl)
    //setFoodData(filteredData)
  };
  
  if (data) 
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
            activeControl === "snack" ? "border-b-2 border-pink-500" : ""
          } cursor-pointer mr-12`}
          onClick={() => setActiveControl("snack")}
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
      <DashboardChart data={data.myDailyRecords} activeControl={activeControl} />
    </>
  );
}