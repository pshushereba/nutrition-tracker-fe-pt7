import React, {useState, useEffect} from 'react'

import { getNutritionInfo } from '../lib/edamam'
import FormDropdown from './form/FormDropdown';



const SearchResultsCard = ({ data, setNutrInfo }) => {
    const [foodObj, setFoodObj] = useState()

    useEffect(() => {
        foodObj && getNutritionInfo(foodObj.info, setNutrInfo, foodObj.label)   // When a dropdown option is selected, get the nutrition info and set it to local state
    },[foodObj])    

    return (
        <>
            <div className="flex my-2">
                <div className="flex justify-around w-full hover:bg-item-hover hover:opacity-50">
                    <p className="w-1/5 h-auto my-2 mx-4 self-center">{data.food.label}</p>
                    <FormDropdown data={data} setValue={setFoodObj} name={"Serving Amt."} obj={foodObj}/>
                    <p className="w-1/5 text-center">{Math.ceil(data.food.nutrients.FAT) || 0} g</p>
                    <p className="w-1/5 text-center">{Math.ceil(data.food.nutrients.PROCNT || 0)} g</p>
                    <p className="w-1/5 text-center">{Math.ceil(data.food.nutrients.CHOCDF) || 0} g</p>
                </div>
            </div>
        </>
    )
}

export default SearchResultsCard;