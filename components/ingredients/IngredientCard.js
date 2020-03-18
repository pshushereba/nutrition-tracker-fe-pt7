import React, {useState} from 'react'
import fetch from 'isomorphic-unfetch';
import withApollo from '../../lib/apollo';

import Dropdown from '../Dropdown.js';

// Import SVG Components
import QuickViewSVG from '../svg/QuickView.js';
import FullHeartSVG from '../svg/FullHeartSVG.js';
import HeartOutlineSVG from '../svg/HeartOutlineSVG.js';

const IngredientCard = (props) => {
    const [foodObj, setFoodObj] = useState({quantity: 1, measureURI: null, foodId: null})
    const [nutrients, setNutrients] = useState({});
    const [fav, setFav] = useState(false);

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
        return setNutrients(response);
    }
    console.log(nutrients);
    
    return (
        <>
            {/* <div className="container-md flex justify-around my-2">
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
            </div> */}

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

export default withApollo(IngredientCard);