import React from 'react'

const IngredientCard = (props) => {
    console.log("In IngredientCard", props.details);
    return (
        <>
            <div className="container-md flex justify-around my-2">
                <div className="flex justify-around w-full hover:bg-item-hover hover:opacity-50">
                    <p>{props.details.food.label}</p>
                    <p>1 Serving</p>
                    <p>{Math.ceil(props.details.food.nutrients.FAT)} g</p>
                    <p>{Math.ceil(props.details.food.nutrients.PROCNT)} g</p>
                    <p>{Math.ceil(props.details.food.nutrients.CHOCDF)} g</p>
                </div>
            </div>
        </>
    )
}

export default IngredientCard;