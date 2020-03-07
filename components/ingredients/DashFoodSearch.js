import React, {useState} from 'react';
import fetch from 'isomorphic-unfetch';
import IngredientCard from './IngredientCard.js';

const DashFoodSearch = () => {
    const [item, setItem] = useState("")
    const [results, setResults] = useState([])

    const query = item.replace(' ', '%20');

    const handleChange = (e) => {
        setItem(e.target.value)
    }
 
    const search = async () => {
        let list;

        const response = await fetch(`https://api.edamam.com/api/food-database/parser?app_id=8de772d5&app_key=ba31a7a9230043a9bc36135b1a432184&ingr=${query}`)
        list = await response.json();
        return setResults(list.hints);
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        search();
    }

    return (
        <div className="w-full px-4 mb-2">
            <form className="flex flex-col"
                onSubmit={handleSubmit}>
                <h2 className="font-bold my-4">Quick Search</h2>
                <input 
                    className="border border-purple-400 rounded focus:border-purple-200 px-4 py-2"
                    type="text"
                    placeholder="Search Food Item"
                    name="food"
                    onChange={handleChange} />
            </form>
            <div>
                {results.map((item) => {
                  return <IngredientCard key={item.food.foodId} details={item} />
                })}
            </div>
        </div>
    )
}

export default DashFoodSearch;
