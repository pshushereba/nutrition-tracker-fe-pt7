import FormRadio from "./FormRadio";

export default function Macros() {
  return (
    <>
      <h2 className="text-xl font-semibold mt-6 self-start pl-12">TRACKING MACROS</h2>
      <h3 className="font-extrabold text-sm self-start px-12 my-4">
        Select all that apply:
      </h3>
      <form className="flex flex-col w-full px-12">
        <FormRadio radioFor="Carbs" formName="macro" />
        <FormRadio radioFor="Fat" formName="macro" />
        <FormRadio radioFor="Protein" formName="macro" />
        <FormRadio radioFor="None" formName="macro" />
      </form>
    </>
  );
}