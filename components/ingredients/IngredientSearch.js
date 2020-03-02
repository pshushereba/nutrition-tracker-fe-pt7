import React, {useState} from 'react';
import fetch from 'isomorphic-unfetch';
import IngredientCard from './IngredientCard.js';

const IngredientSearch = () => {
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
        <div>
            <div>
                <h2>Search for a Food</h2>
                <input 
                    type="text"
                    placeholder="Search..."
                    name="food"
                    onChange={handleChange}></input>
                <button 
                    className="text-xs text-white px-6 py-1 bg-indigo-500 border-indigo-500 rounded m-2"
                    onClick={handleSubmit}
                >Search</button>
            </div>
            <div>
                {results.map((item) => {
                  return <IngredientCard key={item.food.foodId} details={item} />
                })}
            </div>
        </div>
    )
}

export default IngredientSearch;
