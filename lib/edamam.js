export const foodDbSearch = async (query) => {
    const response = await fetch(`https://api.edamam.com/api/food-database/parser?app_id=8de772d5&app_key=ba31a7a9230043a9bc36135b1a432184&ingr=${query}`)
    return response.json();        
}