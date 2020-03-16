import React, {useState} from 'react'
import fetch from 'isomorphic-unfetch';
import withApollo from '../../lib/apollo';

import Dropdown from '../Dropdown.js';
import QuickViewSVG from '../svg/QuickView.js';

const IngredientCard = (props) => {
    const [foodObj, setFoodObj] = useState({quantity: 1, measureURI: null, foodId: null})
    const [nutrients, setNutrients] = useState({});

    const ingredients = [];

    const handleChange = (e) => {
        setFoodObj({...foodObj, foodId: props.details.food.foodId})
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        ingredients.push(foodObj);
        search();
    }
    
    const search = async () => {
        const response = await fetch(`https://api.edamam.com/api/food-database/nutrients?app_id=8de772d5&app_key=${process.env.FOOD_DB_KEY}`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({"ingredients": ingredients})
        })
        console.log(response)
        return setNutrients(response);
    }
    
    return (
        <>
            <div className="container-md flex justify-around my-2">
                <div className="flex justify-around w-full hover:bg-item-hover hover:opacity-50">
                    <p>{props.details.food.label}</p>
                    <Dropdown foodObj={foodObj} setFoodObj={setFoodObj}/>
                    <p>{Math.ceil(props.details.food.nutrients.FAT)} g</p>
                    <p>{Math.ceil(props.details.food.nutrients.PROCNT)} g</p>
                    <p>{Math.ceil(props.details.food.nutrients.CHOCDF)} g</p>
                    <div onClick={handleChange}>
                        <QuickViewSVG>Quick View</QuickViewSVG>
                    </div>
                    <button onClick={handleSubmit}>Get Info</button>
                </div>
            </div>
        </>
    )
}

export default withApollo(IngredientCard);