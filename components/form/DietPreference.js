import FormRadio from "./FormRadio";

export default function DietPreference({ setProfileStep, user, setUser }) {

  function handleSubmit() {
    setProfileStep("macros")
  }

  const formName = "diet"

  // * Schema set for "veg" instead of "Vegan" or "Vegetarian" *
  return (
    <>
      <h2 className="text-2xl my-6 self-center">Dietary Preference</h2>
      <h3 className="font-extrabold text-sm self-start px-12 my-4">
        Choose a type:
      </h3>
      <form className="flex flex-col w-full px-12" onChange={e => setUser({ ...user, [e.target.id.toLowerCase()]: true})}>
        <FormRadio radioFor="Keto" inputName={formName} icon="Icon" />
        <FormRadio radioFor="Paleo" inputName={formName} icon="Icon" />
        <FormRadio radioFor="US Govt Nutrition Guidelines" inputName={formName} icon="Icon" />
        <FormRadio radioFor="None" inputName={formName} icon="Icon" />
      </form>
      <button className="w-full mt-4 py-2 text-white bg-pink-500 rounded hover:bg-pink-600" onClick={handleSubmit}>Continue</button>
    </>
  );
}

