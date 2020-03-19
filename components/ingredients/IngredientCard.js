import React, {useState} from 'react'
import fetch from 'isomorphic-unfetch';

import QuickViewSVG from '../svg/QuickView.js';
import FullHeartSVG from '../svg/FullHeartSVG.js';
import HeartOutlineSVG from '../svg/HeartOutlineSVG.js';

const IngredientCard = (props) => {
    const [foodObj, setFoodObj] = useState({quantity: 1, foodId: null, measureURI: null})

    const filterDropdown = {
        dropName: 'Serving Size',
        options: [
            {
                id: 1,
                field: 'MeasureURI',
                label: 'Ounce',
                value: 'http://www.edamam.com/ontologies/edamam.owl#Measure_ounce'
            },
            {
                id: 2,
                field: 'MeasureURI',
                label: 'Gram',
                value: 'http://www.edamam.com/ontologies/edamam.owl#Measure_gram'
            },
            {
                id: 3,
                field: 'MeasureURI',
                label: 'Pound',
                value: 'http://www.edamam.com/ontologies/edamam.owl#Measure_pound'
            },
            {
                id: 4,
                field: 'MeasureURI',
                label: 'Kilogram',
                value: 'http://www.edamam.com/ontologies/edamam.owl#Measure_kilogram'
            },
            {
                id: 5,
                field: 'MeasureURI',
                label: 'Fluid Oz.',
                value: 'http://www.edamam.com/ontologies/edamam.owl#Measure_fluid_ounce'
            },
            {
                id: 6,
                field: 'MeasureURI',
                label: 'Pint',
                value: 'http://www.edamam.com/ontologies/edamam.owl#Measure_pint'
            },
            {
                id: 7,
                field: 'MeasureURI',
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
    console.log(nutrients);
    
    return (
        <>
            <div className="container-md flex justify-around my-2">
                <div className="flex justify-around w-full hover:bg-item-hover hover:opacity-50">
                    <p>{props.details.food.label}</p>
                    {/* <Dropdown filterDropdown={filterDropdown} foodObj={foodObj} setFoodObj={setFoodObj}/> */}
                    <p>{Math.ceil(props.details.food.nutrients.FAT)} g</p>
                    <p>{Math.ceil(props.details.food.nutrients.PROCNT)} g</p>
                    <p>{Math.ceil(props.details.food.nutrients.CHOCDF)} g</p>
                    <div onClick={handleChange}>
                        <QuickViewSVG>Quick View</QuickViewSVG>
                    </div>
                    <button onClick={handleSubmit}>Get Info</button>
                </div>
            </div>

            <tr className="flex align-center border-gray-300 border">
                <div className="flex align-center">
                    <div className="flex align-center justify-center w-8 border-r p-2">
                        <td className="cursor-pointer">
                            {fav ? <FullHeartSVG /> : <HeartOutlineSVG />}
                        </td>
                    </div>
                </div>
                <div className="flex justify-around align-center p-2">
                    <td className="mx-4">{props.details.food.label}</td>
                    <td className="mx-4"><Dropdown foodObj={foodObj} setFoodObj={setFoodObj} /></td>
                    <td className="mx-4">{Math.ceil(props.details.food.nutrients.FAT)}g</td>
                    <td className="mx-4">{Math.ceil(props.details.food.nutrients.PROCNT)}g</td>
                    <td className="mx-4">{Math.ceil(props.details.food.nutrients.CHOCDF)}g</td>
                    <td className="mx-4 justify-end" onClick={handleChange}><QuickViewSVG /></td>
                    <button onClick={handleSubmit}>Get Info</button>
                </div>
            </tr>
        </>
    )
}

export default IngredientCard;