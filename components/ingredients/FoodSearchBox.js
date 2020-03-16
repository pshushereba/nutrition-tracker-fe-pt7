import React, {useState} from 'react';
import fetch from 'isomorphic-unfetch';
import IngredientCard from './IngredientCard.js';

export default function FoodSearchBox() {
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
        <>
            <form onSubmit={handleSubmit}>
                <input 
                    className="w-full border border-purple-400 rounded focus:border-purple-200 px-4 py-2"
                    type="text"
                    placeholder="Search Food Item"
                    name="food"
                    onChange={handleChange} />
            </form>
        </>
    )
}

