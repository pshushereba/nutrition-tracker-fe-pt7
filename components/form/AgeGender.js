import { useState } from "react";

export default function AgeGender({ user, setUser, setProfileStep }) {

  function handleSubmit() {
    setProfileStep("dietPreferences")
  }

  // * Gender is set to a Boolean in the schema, UI set for age range on age, schema set for Int, select option values temporary workaround*
  return (
    <>
      <h1 className="">Getting Personal</h1>
      <form className="flex flex-col w-full px-12" onChange={e => setUser({ ...user, [e.target.id]: e.target.value })}>
        <h3 className="font-extrabold text-sm self-start px-12 my-4">
          How Old Are You
        </h3>
          <input placeholder="Age" />
        <h3 className="font-extrabold text-sm self-start px-12 my-4">
          How Do You Identify?
        </h3> 
          <select id="gender" required="">
            <option disabled="" defaultValue >Gender</option>
            <option value={true}>Female</option>
            <option value={false}>Male</option>
            <option value="null">Prefer not to say</option>
          </select>
      </form>
      <button className="w-full mt-4 py-2 text-white bg-pink-500 rounded hover:bg-pink-600" onClick={handleSubmit}>Continue</button>
    </>
  );
}
