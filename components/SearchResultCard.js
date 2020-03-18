import React, {useState, useEffect} from 'react'
import fetch from 'isomorphic-unfetch';

import FormDropdown from './form/FormDropdown';



const SearchResultsCard = ({ data, setNutrInfo }) => {
    const [foodObj, setFoodObj] = useState()


    const search = async () => {
        const response = await fetch(`https://api.edamam.com/api/food-database/nutrients?app_id=8de772d5&app_key=${process.env.FOOD_DB_KEY}`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({"ingredients": [foodObj]})
        })
        const nutr = await response.json()
        console.log("triggered by search", nutr)
        return setNutrInfo(nutr);
    }

    useEffect(() => {
        foodObj && search()

    },[foodObj])
    

    return (
        <>
            <div className="flex my-2">
                <div className="flex justify-around w-full hover:bg-item-hover hover:opacity-50">
                    <p className="w-1/5 h-auto my-2 mx-4 self-center">{data.food.label}</p>
                    <FormDropdown data={data} setValue={setFoodObj} name={"Serving Amount"} obj={foodObj}/>
                    <p className="w-1/5 text-center">{Math.ceil(data.food.nutrients.FAT) || 0} g</p>
                    <p className="w-1/5 text-center">{Math.ceil(data.food.nutrients.PROCNT || 0)} g</p>
                    <p className="w-1/5 text-center">{Math.ceil(data.food.nutrients.CHOCDF) || 0} g</p>
                </div>
            </div>
        </>
    )
}

export default SearchResultsCard;