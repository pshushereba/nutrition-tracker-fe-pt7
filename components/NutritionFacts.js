import { useState } from "react"

export default function NutritionFacts ({ data: { info, label } }) {
    const [enteredQty, setEnteredQty] = useState(1)     //No of servings entered into the nutrition display

    const name = info.ingredients[0].parsed[0].food
    const nutrients = Object.keys(info.totalNutrients).splice(1)
    const servingSize = Math.floor(info.totalWeight/info.yield)

    const handleChange = e => {
        setEnteredQty(e.target.value)
    }

    const nutrientList = nutrients.map(nutrient => {
        const nutrientTotals = info.totalNutrients              // Macros
        const dailyTotals = info.totalDaily                     //percent daily values
        const label = nutrientTotals[nutrient].label            //Macro name
        const nutrientQuantity = Math.floor(nutrientTotals[nutrient].quantity*enteredQty)   
        const nutrientUnit = nutrientTotals[nutrient].unit
        const totalQuantity = dailyTotals[nutrient] ? Math.floor(dailyTotals[nutrient].quantity*enteredQty) : ""
        const totalUnit = dailyTotals[nutrient] ? dailyTotals[nutrient].unit : "N/A"

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
        <div className="flex flex-col w-2/5 max-w-sm">
            <h1 className="text-2xl font-semibold capitalize pb-4">{name.toLowerCase()}</h1>
            <label>No. of Servings</label>
            <span className="flex">
                <input 
                    className="border border-gray-500 w-2/12"
                    value={enteredQty}
                    onChange={handleChange}
                />
                <p className="pl-2 -mb-1">{label}</p>
            </span>
            <h2 className="text-2xl font-semibold mt-4 mb-2">Nutrition Facts</h2>
            <p>{`Serving Amt. ${servingSize}g`}</p>
            <div className="flex text-xl py-2">
                <p className="">Calories</p>
                <p className="flex-1"></p>
                <p className="">{info.calories}</p>
            </div>
            <div className="flex">
                <p className="flex-1"></p>
                <p className="">% Daily Value*</p>
            </div>
            {nutrientList}
        </div>
    )
}