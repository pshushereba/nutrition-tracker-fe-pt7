import { useState } from "react"

export default function NutritionFacts ({ data }) {
    const [enteredQty, setEnteredQty] = useState(1)     //No of servings

    const name = data.ingredients[0].parsed[0].food.split(" ").slice(0,2).join(" ")
    const nutrients = Object.keys(data.totalNutrients).splice(1)
    const servingSize = Math.floor(data.totalWeight/data.yield)

    const handleChange = e => {
        setEnteredQty(e.target.value)
    }

    const nutrientList = nutrients.map(nutrient => {
        const nutrientTotals = data.totalNutrients              // Macros
        const dailyTotals = data.totalDaily                     //percent daily values
        const label = nutrientTotals[nutrient].label            //Macro name
        const nutrientQuantity = Math.floor(nutrientTotals[nutrient].quantity*enteredQty)   
        const nutrientUnit = nutrientTotals[nutrient].unit
        const totalQuantity = Math.floor(dailyTotals[nutrient].quantity*enteredQty)
        const totalUnit = dailyTotals[nutrient].unit

        return (
            <div className="flex" key={label}>
                <p className="">{label}</p>
                <p className="flex-1"></p>
                <p className="mx-3">{`${nutrientQuantity} ${nutrientUnit}`}</p>
                <p className={`${totalQuantity < 10 ? "ml-2" : ""}`}>{`${totalQuantity} ${totalUnit}`}</p>
            </div>
        )
    })
    return (
        <div className="border border-black flex flex-col w-2/5 max-w-sm">
            <h1>{name}</h1>
            <p>this is dummy data</p>
            <label>No. of Servings</label>
            <input 
                className="border border-gray-500 w-1/5"
                value={enteredQty}
                onChange={handleChange}
            />
            <h2>Nutrition Facts</h2>
            <p>{`Serving Size ${servingSize}g`}</p>
            <p>{`Servings per ${data.yield}`}</p>
            <p>Amount per serving</p>
            <div className="flex">
                <p className="">Calories</p>
                <p className="flex-1"></p>
                <p className="">{data.calories}</p>
            </div>
            <div className="flex">
                <p className="flex-1"></p>
                <p className="">% Daily Value*</p>
            </div>
            {nutrientList}
        </div>
    )
}