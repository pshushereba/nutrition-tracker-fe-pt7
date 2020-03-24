export default function MealDropdown({ setValue, obj }) {

    const handleChange = e => {  
      setValue({ ...obj, meal_type: e.target.value });
    };
  
    return (
      <select 
        className="border border-gray-400 px-2 py-2 mt-1 mb-20 bg-white w-1/6"
        name="meal" 
        required=""
        onChange={handleChange}>
        <option className="text-gray-100" disabled="" defaultValue >Meal Type</option>
        <option value="breakfast">Beakfast</option>
        <option value="lunch">Lunch</option>
        <option value="dinner">Dinner</option>
        <option value="snack">Snack</option>
      </select>
    );
  }
  
  