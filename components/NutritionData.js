import React, {useState, useEffect} from 'react';
import fetch from 'isomorphic-unfetch';
import IngredientDetails from './IngredientDetails.js';

const NutritionData = () => {
    const [item, setItem] = useState("")
    const [results, setResults] = useState({})

    const query = item.replace(' ', '%20');
    // console.log(query)

    const handleChange = (e) => {
        setItem(e.target.value)
    }
    // console.log(item);

    const search = async () => {
        let list;

        const response = await fetch(`https://api.edamam.com/api/food-database/parser?app_id=8de772d5&app_key=ba31a7a9230043a9bc36135b1a432184&ingr=${query}`)
        list = await response.json();
        return setResults(list.hints);
    }
    
    const handleSubmit = (e) => {
        search();
    }

    console.log(results);

    return (
        <div>
            <div>
                <input 
                    type="text"
                    placeholder="Search for a food..."
                    name="food"
                    onChange={handleChange}></input>
                <button 
                    className="text-xs text-white px-6 py-1 bg-indigo-500 border-indigo-500 rounded"
                    onClick={handleSubmit}
                >Search</button>
            </div>
            {/* <div>
                {(results === {}) ? <h2>Search for a food</h2> : results.map((item) => {
                    <IngredientDetails details={item} />
                })}
            </div> */}
        </div>
    )
}

export default NutritionData;
