export default function FormRadio({ radioFor, inputName, icon }) {
  return (
    <div className="flex justify-between">
      <div className="my-3">
        <input className="form-radio" type="radio" id={radioFor} name={inputName} value={inputName} />
        <label className="px-6 text-2xl" htmlFor={radioFor}>
          {radioFor}
        </label>
      </div>
      {icon && <i>Icon</i>}
    </div>
  );
}

//TODO: Icons and info tool tips on the radio inputs