import { useState } from "react";

export default function AgeGender({ user, setUser, setProfileStep }) {

  function handleSubmit() {
    setProfileStep("weightGoalWeight")
  }

  function handleChange(e) {
    setUser({ ...user, [e.target.name]: e.target.value})
  }

  return (
    <>
      <h1 className="text-2xl my-6 self-center">Getting Personal</h1>
      <form className="flex flex-col w-full max-w-md px-16 self-center" onChange={handleChange}>
        <h3 className="font-medium text-lg mt-4">
          How old are you?
        </h3>
          <input 
            className="border border-gray-400 px-2 py-2 mt-1 focus:border-pink-600 max-w-sm"
            name= 'age'
            placeholder="Age" 
            value={user.age}
          />
          <h3 className="font-medium text-lg mt-4">
          How tall are you?
        </h3>
          <input 
            className="border border-gray-400 px-2 py-2 mt-1 focus:border-pink-600 max-w-sm"
            name= 'height'
            placeholder="Height" 
            value={user.height}
          />
        <h3 className="font-medium text-lg mt-4">
          How Do You Identify?
        </h3> 
          <select 
            className="border border-gray-400 px-2 py-2 mt-1 mb-20 bg-white max-w-sm"
            name="gender" 
            required="">
            <option className="text-gray-100" disabled="" defaultValue >Gender</option>
            <option value={true}>Female</option>
            <option value={false}>Male</option>
            <option value="null">Prefer not to say</option>
          </select>
      </form>
      <button className="w-full mt-4 py-2 text-white bg-pink-500 rounded hover:bg-pink-600 self-center max-w-xs" onClick={handleSubmit}>Continue</button>
    </>
  );
}
