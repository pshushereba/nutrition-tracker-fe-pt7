import React, {useState} from 'react'
import fetch from 'isomorphic-unfetch';
import withApollo from '../../lib/apollo';

import Dropdown from '../Dropdown.js';
import QuickViewSVG from '../svg/QuickView.js';

const IngredientCard = (props) => {
    const [foodObj, setFoodObj] = useState({quantity: 1, foodId: null, measureURI: null})

    const filterDropdown = {
        dropName: 'Serving Size',
        options: [
            {
                id: 1,
                label: 'Ounce',
                value: 'http://www.edamam.com/ontologies/edamam.owl#Measure_ounce'
            },
            {
                id: 2,
                label: 'Gram',
                value: 'http://www.edamam.com/ontologies/edamam.owl#Measure_gram'
            },
            {
                id: 3,
                label: 'Pound',
                value: 'http://www.edamam.com/ontologies/edamam.owl#Measure_pound'
            },
            {
                id: 4,
                label: 'Kilogram',
                value: 'http://www.edamam.com/ontologies/edamam.owl#Measure_kilogram'
            },
            {
                id: 5,
                label: 'Fluid Oz.',
                value: 'http://www.edamam.com/ontologies/edamam.owl#Measure_fluid_ounce'
            },
            {
                id: 6,
                label: 'Pint',
                value: 'http://www.edamam.com/ontologies/edamam.owl#Measure_pint'
            },
            {
                id: 7,
                label: 'Liter',
                value: 'http://www.edamam.com/ontologies/edamam.owl#Measure_liter'
            },
        ]
    }
    
    // When a user clicks the 'Quick View', store the foodID and quantity selected in an ingredients object, along with a quantity of 1.
    // make the second API call passing the ingredients object as a JSON object in the body of the POST requeest.
    //
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
                    <Dropdown filterDropdown={filterDropdown} foodObj={foodObj} setFoodObj={setFoodObj}/>
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