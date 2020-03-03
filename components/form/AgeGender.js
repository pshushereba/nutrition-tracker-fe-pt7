import { useState } from "react";

export default function AgeGender({ user, setUser, setProfileStep }) {

  const updateUser = (key, value) => setUser({ ...user, key: value })

  function handleSubmit() {
    setProfileStep("dietPrefernces")
  }

  // * Gender is set to a Boolean in the schema, UI set for age range on age, schema set for Int, select option values temporary workaround*
  return (
    <>
      <h1 className="">Getting Personal</h1>
      <form className="flex flex-col w-full px-12" onChange={e => setUser({ ...user, [e.target.id]: e.target.value })}>
        <h3 className="font-extrabold text-sm self-start px-12 my-4">
          How Old Are You
        </h3>
          <select id="age" required="">
            <option disabled="" defaultValue >Age</option>
            <option value="17">Under 18</option>
            <option value="18">18-25</option>
            <option value="25">25-30</option>          
            <option value="30">30-35</option>
            <option value="35">35-45</option>
            <option value="45">45+</option>
          </select>
        <h3 className="font-extrabold text-sm self-start px-12 my-4">
          How Do You Identify?
        </h3> 
          <select id="gender" required="">
            <option disabled="" defaultValue >Gender</option>
            <option value="f">Female</option>
            <option value="m">Male</option>
            <option value="false">Prefer not to say</option>
          </select>
      </form>
      <button className="w-full mt-4 py-2 text-white bg-pink-500 rounded hover:bg-pink-600" onClick={handleSubmit}>Continue</button>
    </>
  );
}
