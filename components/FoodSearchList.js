import { useState } from "react";
import SearchResultsCard from "./SearchResultCard";

export default function FoodSearchList({ setNutrInfo, searchResults }) {

    return (
        <div className="flex flex-col w-1/2">
            {searchResults.length > 0 ? 
            <div className="flex justify-around">
                <p className="w-1/6 mx-4">Food Item</p>
                <p className="w-1/6 mx-4">Serving Size</p>
                <p className="w-1/6 text-center">Fats %</p>
                <p className="w-1/6 text-center">Protein %</p>
                <p className="w-1/6 text-center">Carb %</p>
                <p className="w-1/6 text-center">Meal Type</p>
            </div> : null}
            <div>
                {searchResults.map((item) => {
                  return <SearchResultsCard key={item.food.foodId} data={item} setNutrInfo={setNutrInfo}/>
                })}
            </div>
        </div>
    )
}