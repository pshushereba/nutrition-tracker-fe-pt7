import {useState} from 'react';

export default function FormInput({ content, placeHolder, type, required, value, name }) {
  const [thisInput, setThisInput] = useState("");

  const handleChange = e => {
    setThisInput({ ...thisInput, [e.target.name]: e.target.value });
    console.log(e.target.value);
  };
  
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
        className="w-full border border-gray-400 rounded pl-2 py-2"
        placeholder={placeHolder}
        name={name}
        type={type}
        // value={thisInput[name].value}
        onChange={handleChange}
      />
    </div>
  );
}
