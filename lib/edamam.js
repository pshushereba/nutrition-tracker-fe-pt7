export const foodDbSearch = async (query) => {
    const response = await fetch(`https://api.edamam.com/api/food-database/parser?app_id=8de772d5&app_key=ba31a7a9230043a9bc36135b1a432184&ingr=${query}`)
    return response.json();        
}

export const getNutritionInfo = async (foodObj, hook, extraProps) => {
    const response = await fetch(`https://api.edamam.com/api/food-database/nutrients?app_id=8de772d5&app_key=${process.env.FOOD_DB_KEY}`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({"ingredients": [foodObj]})
    })
    const nutritionInfo = await response.json()
    hook({ info: nutritionInfo, label : extraProps.label, meal_type: extraProps.meal_type})
}