export default function FormRadio({ radioFor, formName }) {
  return (
    <div className="flex justify-between">
      <div className="my-3">
        <input type="radio" id={radioFor} name={formName} value={radioFor} />
        <label className="px-2" for={radioFor}>
          {radioFor}
        </label>
      </div>
      <i>Icon</i>
    </div>
  );
}
