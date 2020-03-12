import React, {useState} from 'react'
import fetch from 'isomorphic-unfetch';
import withApollo from '../../lib/apollo';

import Dropdown from '../Dropdown.js';

const IngredientCard = (props) => {
    const [foodObj, setFoodObj] = useState({quantity: 1, foodId: null, measureURI: null})
    
    // When a user clicks the 'Quick View', store the foodID and quantity selected in an ingredients object, along with a quantity of 1.
    // make the second API call passing the ingredients object as a JSON object in the body of the POST requeest.
    //
    const ingredients = [];

    const handleChange = (e) => {
        setFoodObj({...foodObj, foodId: props.details.food.foodId, measureURI: props.details.measures[0].uri})
    }

    const handleSubmit = () => {
        ingredients.push(foodObj);
        search();
    }

    console.log(foodObj)
    console.log(props.details);
    
    const search = async () => {
        const response = await fetch(`https://api.edamam.com/api/food-database/nutrients?app_id=8de772d5&app_key=${process.env.FOOD_DB_KEY}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: {"ingredients": JSON.stringify(ingredients)}
        })
        console.log(response);
        return response;
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
                    <button onClick={handleChange}>Quick View</button>
                    <button onClick={handleSubmit}>Get Info</button>
                </div>
            </div>
        </>
    )
}

export default withApollo(IngredientCard);