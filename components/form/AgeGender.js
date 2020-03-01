export default function AgeGender() {
  return (
    <>
      <h2 className="text-xl font-semibold mt-6">SELECT A DIET PREFERENCE</h2>
      <form className="flex flex-col w-full px-12">
        <h3 className="font-extrabold text-sm self-start px-12 my-4">
          How Old Are You
        </h3>
          <select id="age" required="">
            <option disabled="" selected="">Age</option>
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
          <select id="age" required="">
            <option disabled="" selected="">Gender</option>
            <option value="f">Female</option>
            <option value="m">Male</option>
            <option value="none">Prefer not to say</option>
          </select>
      </form>
    </>
  );
}
