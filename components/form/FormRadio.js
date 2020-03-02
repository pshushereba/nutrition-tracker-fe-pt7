export default function FormRadio({ radioFor, inputName }) {
  return (
    <div className="flex justify-between">
      <div className="my-3">
        <input type="radio" id={radioFor} name={inputName} value={inputName} />
        <label className="px-2" for={radioFor}>
          {radioFor}
        </label>
      </div>
      <i>Icon</i>
    </div>
  );
}

//TODO: Icons and info tool tips on the radio inputs