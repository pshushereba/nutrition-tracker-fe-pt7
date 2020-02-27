export default function FormInput({ content, placeHolder, type, required }) {
  return (
    <div className="flex flex-col my-2">
      <div className="-mb-3 z-0 pl-2">
        <label className="text-xs bg-white p-1">
          {content}
          {required && (
            <abbr
              className="text-red-500 px-2"
              title="required"
              aria-label="required"
            >
              *
            </abbr>
          )}
        </label>
      </div>
      <input
        className="w-full border border-gray-400 rounded pl-2 py-3"
        placeholder={placeHolder}
        type={type}
      />
    </div>
  );
}
