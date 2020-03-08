import FormRadio from "./FormRadio";

export default function ActivityLevel({ setProfileStep, user, setUser }) {

  function handleSubmit() {
    setProfileStep("dietPreferences")
  }

  function handleChange(e) {
    setUser({ ...user, activityLevel: e.target.value})
    console.log(user)
  }


  return (
    <>
      <h2 className="text-2xl my-6 self-center">How active are you?</h2>
      <form className="flex flex-col w-full px-12" onChange={handleChange}>
        <FormRadio radioFor="Not Very" inputName={1} />
        <FormRadio radioFor="Lightly Active" inputName={2} />
        <FormRadio radioFor="Active" inputName={3} />
        <FormRadio radioFor="Very Active" inputName={4} />
        <FormRadio radioFor="None/Custom" inputName={null} />
      </form>
      <button className="w-full mt-4 py-2 text-white bg-pink-500 rounded hover:bg-pink-600 self-center max-w-xs" onClick={handleSubmit}>Continue</button>
    </>
  );
}

