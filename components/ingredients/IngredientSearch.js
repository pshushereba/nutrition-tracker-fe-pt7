import React, {useState} from 'react';
import fetch from 'isomorphic-unfetch';
import IngredientCard from './IngredientCard.js';
import Dropdown from '../DropdownFunc'

const IngredientSearch = () => {
    const [item, setItem] = useState("")
    const [results, setResults] = useState([])
    const [filter, setFilter] = useState("")
    const query = item.replace(' ', '%20');

   // Object for FilterDropdown
   const filterDropdown = {
       dropName: "Diet",
       options: [
           
        {
           id: 1,
           field: 'health',
           label:'Dairy Free',
           value: 'dairy-free'
        },
        
        {
            id: 2,
            field: 'health',
            label: 'Keto',
            value: 'keto-friendly'
         },
         
         {
            id:3,
            field: 'health',
            label: 'Gluten Free',
            value: 'gluten-free'
          },
        
        {   id: 4,
            field: 'health',
            label: 'Vegan',
            value: 'vegan'}]
   }

    const handleChange = (e) => {
        setItem(e.target.value)
    }
 
    const search = async () => {
        let list;
 
    // Checks if filter is active and appends to API call if needed
        const response = await fetch(`https://api.edamam.com/api/food-database/parser?app_id=8de772d5&app_key=${process.env.FOOD_DB_KEY}&ingr=${query}${filter ? field + `=` + filter : ''}`)
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
                <Dropdown filterDropdown={filterDropdown} setFilter={setFilter}/>
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
            {results.length > 0 ? 
            <div className="flex justify-around p-4">
                <p className="px-4">Food Item</p>
                <p className="px-4">Serving Size</p>
                <p className="px-4">Fats %</p>
                <p className="px-4">Protein %</p>
                <p className="px-4">Carb %</p>
                <p className="px-4">Quick View</p>
            </div> : null}
            <div>
                {results.map((item) => {
                  return <IngredientCard key={item.food.foodId} details={item} />
                })}
            </div>
        </div>
    )
}

export default IngredientSearch;
