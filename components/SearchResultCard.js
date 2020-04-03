import React, { useState, useEffect } from "react";

import { getNutritionInfo } from "../lib/edamam";
import FormDropdown from "./form/FormDropdown";
import MealDropdown from "./form/MealDropDown";
import { useQuery } from "@apollo/react-hooks";
import { GET_NUTRITION } from "../gql/queries";

export default function SearchResultsCard({ item }) {
  const [foodObj, setFoodObj] = useState();
  const { data, client } = useQuery(GET_NUTRITION);

  // When a dropdown option is selected, get the nutrition info and write it to the client cache
  const setNutrition = someData => {
    const nutrition = JSON.stringify({
      info: someData,
      label: foodObj.label,
      meal_type: foodObj.meal_type
    });

    client.writeData({ data: { ...data, nutritionInfo: nutrition } });
  };


  const getInfo = async () => {
    console.log(foodObj)
    const foodData = await getNutritionInfo(foodObj);
    setNutrition(foodData);
  };


  useEffect(() => {
    foodObj && foodObj.meal_type && getInfo();
  }, [foodObj]);

  return (
    <>
      <div className="flex my-2">
        <div className="flex justify-around w-full hover:bg-item-hover hover:opacity-50">
          <p className="w-1/6 h-auto my-2 mx-4 self-center">
            {item.food.label}
          </p>
          <FormDropdown
            data={item}
            setValue={setFoodObj}
            name={"Serving Amt."}
            obj={foodObj}
          />
          <p className="w-1/6 text-center">
            {Math.ceil(item.food.nutrients.FAT) || 0} g
          </p>
          <p className="w-1/6 text-center">
            {Math.ceil(item.food.nutrients.PROCNT || 0)} g
          </p>
          <p className="w-1/6 text-center">
            {Math.ceil(item.food.nutrients.CHOCDF) || 0} g
          </p>
          <MealDropdown obj={foodObj} setValue={setFoodObj} />
        </div>
      </div>
    </>
  );
};
