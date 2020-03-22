import { useState, useEffect } from "react";

export default function NutritionFacts({ data: { info, label } }) {
  //
  const [enteredQty, setEnteredQty] = useState(1); //No of servings entered into the nutrition display
  const [foodLogData, setFoodLogData] = useState({ //Obj for storing the vales used in the nutrition graphic and the dailyRecord mutation
    recordData: {
      current_weight: 175,
      calories: 0,
      fat: 0,
      carbs: 0,
      fiber: 0,
      protein: 0,
      food_string: "food",
      meal_type: ""
    },
    graphicData: {
      info: info
    }
  });

  function loadFoodValues(data) {
    const {
      graphicData: { info: { calories, totalNutrients }}
    } = data;
    const macroArray = ["fat", "carbs", "fiber", "protein"];

    macroArray.map(label => {
    //   setFoodLogData({
    //     ...foodLogData,
    //     recordData: {          
    //       [label]: totalNutrients[label].quantity * enteredQty
    //     }
    //   }); 
    console.log(totalNutrients[label])
    });

    setFoodLogData({
      ...foodLogData,
      recordData: { calories: calories }
    });
  }
  
  useEffect(() => {
    info && setFoodLogData(loadFoodValues(foodLogData));
  }, [enteredQty]);

  const {
    ingredients,
    totalNutrients,
    totalWeight,
    totalDaily,
    yield: itemYield
  } = foodLogData.graphicData.info;
  const name = ingredients[0].parsed[0].food;
  const nutrients = Object.keys(totalNutrients).splice(1);
  const servingSize = Math.floor(totalWeight / itemYield);

  const handleChange = e => {
    setEnteredQty(e.target.value);
  };


  const nutrientList = nutrients.map(nutrient => {
    const nutrientTotals = totalNutrients; // Macros
    const dailyTotals = totalDaily; //percent daily values
    const label = nutrientTotals[nutrient].label; //Macro name
    const nutrientQuantity = Math.floor(
      nutrientTotals[nutrient].quantity * enteredQty
    );
    const nutrientUnit = nutrientTotals[nutrient].unit;
    const totalQuantity = dailyTotals[nutrient]
      ? Math.floor(dailyTotals[nutrient].quantity * enteredQty)
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

  return (
    <div className="flex flex-col w-2/5 max-w-sm">
      <h1 className="text-2xl font-semibold capitalize pb-4">
        {name.toLowerCase()}
      </h1>
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
      <p>{`Serving Amt. ${servingSize * enteredQty}g`}</p>
      <div className="flex text-xl py-2">
        <p className="">Calories</p>
        <p className="flex-1"></p>
        <p className="">{info.calories}</p>
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
      <button className="w-full text-white bg-pink-500 px-4 rounded-sm">
        Log Food
      </button>
    </div>
  );
}
