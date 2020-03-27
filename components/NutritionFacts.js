import { useState } from "react";

import { ADD_FOOD } from '../gql/mutations'
import { useMutation } from "@apollo/react-hooks";

export default function NutritionFacts({ data: { info, label, meal_type }, setActiveControl }) {
  const [qty, setQty] = useState(1); //qty value used to get final values
  const [enteredQty, setEnteredQty] = useState(1); //No of servings entered into the nutrition display

  const [addFood, {}] = useMutation(ADD_FOOD)  
  
  const logFood = async () => {
    const {
      loading,
      data,
      error
    } = await addFood({ variables: foodLogData.recordData })
    
    if (error) { 
      console.log(error)
    }
    
    if (data) {
      console.log(data)
      setActiveControl("journal")
    }
  }

  const {
    calories,
    totalNutrients: {
      FAT: { quantity: fatQuantity },
      CHOCDF: { quantity: carbsQuantity },
      PROCNT: { quantity: proteinQuantity },
      FIBTG: { quantity: fiberQuantity }
    },
    ingredients: [ parsed ]
  } = info;
  console.log({parsed})
  const [foodLogData, setFoodLogData] = useState({
    //Obj for storing the vales used in the nutrition graphic and the dailyRecord mutation
    recordData: {
      current_weight: 175,
      date: new Date(Date.now()).toString(),
      calories: calories * qty || 0,
      fat: Math.floor(fatQuantity * qty) || 0,
      carbs: Math.floor(carbsQuantity * qty) || 0,
      fiber: Math.floor(fiberQuantity * qty) || 0,
      protein: Math.floor(proteinQuantity * qty) || 0,
      food_string: JSON.stringify({parsed}),
      meal_type: meal_type
    },
    graphicData: info
  });

  const adjustQty = (obj, multiplier) => {
    return Object.keys(obj).map(key => {
      key !== "current_weight" && typeof obj[key] === "number"
        ? (obj[key] = obj[key] * multiplier)
        : (obj[key] = obj[key]);
    });
  };

  const {
    ingredients,
    totalNutrients,
    totalWeight,
    totalDaily,
    yield: itemYield
  } = foodLogData.graphicData;
  const name = ingredients[0].parsed[0].food;
  const nutrients = Object.keys(totalNutrients).splice(1);
  const servingSize = Math.floor(totalWeight / itemYield);

  const nutrientList = nutrients.map(nutrient => {
    const nutrientTotals = totalNutrients; // Macros
    const dailyTotals = totalDaily; //percent daily values
    const label = nutrientTotals[nutrient].label; //Macro name
    const nutrientQuantity = Math.floor(
      nutrientTotals[nutrient].quantity * qty
    );
    const nutrientUnit = nutrientTotals[nutrient].unit;
    const totalQuantity = dailyTotals[nutrient]
      ? Math.floor(dailyTotals[nutrient].quantity * qty)
      : "";
    const totalUnit = dailyTotals[nutrient]
      ? dailyTotals[nutrient].unit
      : "N/A";

    return (
      <div className="flex" key={label}>
        <p className="">{label}</p>
        <p className="flex-1"></p>
        <p className="mx-3">{`${nutrientQuantity} ${nutrientUnit}`}</p>
        <p
          className={`${totalQuantity < 10 ? "ml-2" : ""}`}
        >{`${totalQuantity} ${totalUnit}`}</p>
      </div>
    );
  });

  const handleChange = e => {
    setEnteredQty(e.target.value);
  };

  const handleSubmit = e => {
    console.log("first", foodLogData.recordData)
    e.preventDefault();
    setQty(enteredQty);
    adjustQty(foodLogData.recordData, enteredQty)
    console.log("second", foodLogData.recordData)
  };

  return (
    <div className="flex flex-col w-2/5 max-w-sm">
      <h1 className="text-2xl font-semibold capitalize pb-4">
        {name.toLowerCase()}
      </h1>
      <label>No. of Servings</label>
      <form className="flex" value={enteredQty} onSubmit={handleSubmit}>
        <input
          className="border border-gray-500 w-2/12"
          value={enteredQty}
          onChange={handleChange}
        />
        <p className="pl-2 -mb-1">{label}</p>
      </form>
      <h2 className="text-2xl font-semibold mt-4 mb-2">Nutrition Facts</h2>
      <p>{`Serving Amt. ${servingSize * qty}g`}</p>
      <div className="flex text-xl py-2">
        <p className="">Calories</p>
        <p className="flex-1"></p>
        <p className="">{info.calories * qty}</p>++
      </div>
      <div className="flex">
        <p className="flex-1"></p>
        <p className="text-sm font-hairline">% Daily Value*</p>
      </div>
      {nutrientList}
      <p className="py-4 text-sm font-hairline">
        * The % Daily Values tells you how much a nutrient in a serving of food
        contributes to a daily diet of 2,000 calories a day is used for general
        nutrition advice
      </p>
      <button
        className="w-full text-white bg-pink-500 px-4 rounded-sm"
        onClick={logFood}
      >
        Log Food
      </button>
    </div>
  );
}
