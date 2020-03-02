import React from 'react'

const IngredientCard = (props) => {
    console.log("In IngredientCard", props.details);
    return (
        <div className="container-md p-4 flex justify-around">
            <div className="flex-row align-middle">
                <h4>{props.details.food.brand}</h4>
                <p>Category: {props.details.food.category}</p>
            </div>
            <div className="w-32 h-32 p-4 align-middle">
                {props.details.food.image ? <img src={props.details.food.image} /> : "No image available"}
            </div>
            <div className="flex-row align-middle">
                <button className="text-xs text-white px-6 py-1 bg-indigo-500 border-indigo-500 rounded m-2">Add To Journal</button>
                <button className="text-xs text-white px-6 py-1 bg-indigo-500 border-indigo-500 rounded m-2">Details</button>
            </div>
        </div>
    )
}

export default IngredientCard;