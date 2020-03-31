import { useState } from "react";

import { ADD_FOOD } from "../gql/mutations";
import { useMutation } from "@apollo/react-hooks";
import { GET_FOOD_LOG } from "../gql/queries";

export default function NutritionFacts({
  data: { info, label, meal_type },
  setActiveControl
}) {

  const [qty, setQty] = useState(1); //  Qty value used to get final values
  const [enteredQty, setEnteredQty] = useState(1); //  No of servings entered into the nutrition display, default value of 1

  const {
    //  Destructure info for access to properties we're loading into foodLogData
    calories,
    totalNutrients: {
      FAT: { quantity: fatQuantity },
      CHOCDF: { quantity: carbsQuantity },
      PROCNT: { quantity: proteinQuantity },
      FIBTG: { quantity: fiberQuantity }
    },
    ingredients: [ { parsed } ]
  } = info;
  
  const foodString = {...parsed[0], favorite: false}
  const foodLogData = {
    //Obj for storing the vales used in the nutrition graphic and the dailyRecord mutation

    recordData: {
      date: new Date(Date.now()).toLocaleDateString(),
      calories: calories * qty || 0,
      fat: Math.floor(fatQuantity * qty) || 0,
      carbs: Math.floor(carbsQuantity * qty) || 0,
      fiber: Math.floor(fiberQuantity * qty) || 0,
      protein: Math.floor(proteinQuantity * qty) || 0,
      food_string: JSON.stringify(foodString),
      meal_type: meal_type
    },
    graphicData: info
  };

  const {
    //  Access needed data from foodLogdata to build our Nutrition Label
    ingredients,
    totalNutrients,
    totalWeight,
    totalDaily,
    yield: itemYield
  } = foodLogData.graphicData;

  const name = ingredients[0].parsed[0].food;  // Name of food item
  const nutrients = Object.keys(totalNutrients).splice(1); // Array of returned nutrients for creating nutrition lable
  const servingSize = Math.floor(totalWeight / itemYield); // Weight of a single serving

  const nutrientList = nutrients.map(nutrient => {
    //  Programatically grab our return nutrients and create items for display in the Nutrition Label
    const nutrientTotals = totalNutrients; // Macros
    const dailyTotals = totalDaily; //  Percent daily values
    const label = nutrientTotals[nutrient].label; //  Macro name

    const nutrientQuantity = Math.floor(
      //  Total per selected serving
      nutrientTotals[nutrient].quantity * qty
    );

    const nutrientUnit = nutrientTotals[nutrient].unit; //  Unit for serving total

    const totalQuantity = dailyTotals[nutrient] //  Qty for the % daily value
      ? Math.floor(dailyTotals[nutrient].quantity * qty)
      : "";

    const totalUnit = dailyTotals[nutrient] //  Unit for the % daily value
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

  const [addFood] = useMutation(   // Returns CB needed to make mutation call, updates cache with returned values *** no it doesn't **
    ADD_FOOD,
    {
      update(cache, { data: { addFood } }) {
        const { todos } = cache.readQuery({ query: GET_FOOD_LOG });
        cache.writeQuery({
          query: GET_FOOD_LOG,
          data: { todos: todos.concat([addFood]) },
        });
      }
    }
  );

  const logFood = async () => {
    //  CB that runs mutation for us iin handleSubmit
    const { loading, data, error } = await addFood({
      variables: foodLogData.recordData
    });

    if (error) return `Error: ${error}`;

    if (data) {
      //  On success set Dashboard to Food Journal
      console.log(data)
      setActiveControl("journal");
    }
  };

  const handleChange = e => {
    setEnteredQty(e.target.value);
  };

  const handleSubmit = e => {
    //  Adjusts values on macros according to the quantity set by the user and returns a new object
    e.preventDefault();
    const adjustQty = (obj, multiplier) => {
      return Object.keys(obj).map(key => {
        typeof obj[key] === "number"
          ? (obj[key] = obj[key] * multiplier)
          : (obj[key] = obj[key]);
      });
    };
    setQty(enteredQty);
    adjustQty(foodLogData.recordData, enteredQty);
  };

  return (
    <div className="flex flex-col w-3/5 max-w-sm">
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
