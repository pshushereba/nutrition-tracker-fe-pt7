import { useState, useEffect } from "react";

import NutritionFacts from "./NutritionFacts";
import PhoneManBigSVG from "./svg/PhoneManBigSVG";
import FoodSearchList from "./FoodSearchList";
import { useQuery } from "@apollo/react-hooks";
import { GET_NUTRITION } from "../gql/queries";

export default function FoodSearchResults({ searchResults, setActiveControl }) {

  // const { data, error, client } = useQuery(GET_NUTRITION)
  // console.log(data)
  // if (error) console.log(error)
  
  // useEffect(() => {
  //   data && console.log(JSON.parse(data.nutritionInfo))
  // }, [])
  // const labelInformation = JSON.parse(data.nutrition)
  // console.log(labelInformation)

  const svg = (
    <div className="flex flex-col mt-40">
      <PhoneManBigSVG />
    </div>
  );

  return (
    <section className="flex flex-1">
      <FoodSearchList />
      <div className="Flex w-1/2"></div>
      <div className="w-1/2 max-h flex">
        <div className="flex-1"></div>
        {/* {data ? (
          <NutritionFacts data={JSON.parse(data)} setActiveControl={setActiveControl} />
        ) : ( */}
          svg
        {/* )} */}
        <div className="flex-1"></div>
      </div>
    </section>
  );
}
