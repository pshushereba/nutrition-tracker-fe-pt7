import React, {useState, useEffect} from 'react'

import { getNutritionInfo } from '../lib/edamam'
import FormDropdown from './form/FormDropdown';
import MealDropdown from './form/MealDropDown'



const SearchResultsCard = ({ data, setNutrInfo }) => {
    const [foodObj, setFoodObj] = useState()

    useEffect(() => {
        foodObj && foodObj.meal_type && getNutritionInfo(foodObj.info, setNutrInfo, { label: foodObj.label, meal_type: foodObj.meal_type } )   // When a dropdown option is selected, get the nutrition info and set it to local state
        // foodObj && foodObj.meal_type && console.log("triggered in SearchResultCard useEffect", foodObj)
    },[foodObj])    

    return (
        <>
            <div className="flex my-2">
                <div className="flex justify-around w-full hover:bg-item-hover hover:opacity-50">
                    <p className="w-1/6 h-auto my-2 mx-4 self-center">{data.food.label}</p>
                    <FormDropdown data={data} setValue={setFoodObj} name={"Serving Amt."} obj={foodObj}/>
                    <p className="w-1/6 text-center">{Math.ceil(data.food.nutrients.FAT) || 0} g</p>
                    <p className="w-1/6 text-center">{Math.ceil(data.food.nutrients.PROCNT || 0)} g</p>
                    <p className="w-1/6 text-center">{Math.ceil(data.food.nutrients.CHOCDF) || 0} g</p>
                    <MealDropdown obj={foodObj} setValue={setFoodObj} />
                </div>
            </div>
        </>
    )
}

export default SearchResultsCard;