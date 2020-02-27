import FormRadio from "./FormRadio";

export default function DietPreference() {
  return (
    <>
      <h2 className="text-xl font-semibold mt-6">SELECT A DIET PREFERENCE</h2>
      <h3 className="font-extrabold text-sm self-start px-12 my-4">
        Choose a type:
      </h3>
      <form className="flex flex-col w-full px-12">
        <FormRadio radioFor="Keto" formName="diet" />
        <FormRadio radioFor="Paleo" formName="diet" />
        <FormRadio radioFor="Vegan" formName="diet" />
        <FormRadio radioFor="Dukan" formName="diet" />
        <FormRadio radioFor="Ultra-Low-Fat" formName="diet" />
        <FormRadio radioFor="Atkins" formName="diet" />
        <FormRadio radioFor="US. Gov. Nutrition Guidelines" formName="diet" />
        <FormRadio radioFor="None" formName="diet" />
      </form>
    </>
  );
}
