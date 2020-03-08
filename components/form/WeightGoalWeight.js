import { useState } from "react";

export default function WeightGoalWeight({ user, setUser, setProfileStep }) {

  function handleSubmit() {
    setProfileStep("activityLevel")
  }

  function handleChange(e) {
    setUser({ ...user, [e.target.name]: e.target.value})
  }

  // * Gender is set to a Boolean in the schema, UI set for age range on age, schema set for Int, select option values temporary workaround*
  return (
    <>
      <h1 className="text-2xl my-6 self-center">Set your Goals</h1>
      <form className="flex flex-col w-full max-w-md px-16 self-center" onChange={handleChange}>
        <h3 className="font-medium text-lg mt-4">
          Add your weight?
        </h3>
          <input 
            className="border border-gray-400 px-2 py-2 mt-1 mb-12 focus:border-pink-600 max-w-sm"
            name= 'age'
            placeholder="Enter weight" 
            value={user.age}
          />
          <h3 className="font-medium text-lg mt-4">
          Add your goal weight
        </h3>
          <input 
            className="border border-gray-400 px-2 py-2 mt-1 mb-12 focus:border-pink-600 max-w-sm"
            name= 'goalWeight'
            placeholder="Enter Weight" 
            value={user.height}
          />
      </form>
      <button className="w-full mt-4 py-2 text-white bg-pink-500 rounded hover:bg-pink-600 self-center max-w-xs" onClick={handleSubmit}>Continue</button>

    </>
  );
}
