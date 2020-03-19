export default function FormDropdown({ data, name, setValue, obj }) {
  const handleChange = e => {
    console.log(e.target.value);
    setValue(e.target.value);
    // setValue({ ...obj, quantity: 1, foodId: id, measureURI: (measure ? measure : otherMeasure) })
  };

  const options = data.options.map(option => {
    const id = option.id;
    const label = option.label;
    const value = option.value;

    return (
      <option
        key={id}
        value={value}
        label={label}
        // info={ { quantity:1, foodId: id, measureURI: (measure ? measure : otherMeasure) } }
      >
        {option.label}
      </option>
    );
  });

  // const options = data.measures.map(option =>{
  //     const label = option.label
  //     const id = data.food.foodId
  //     const measure = option.measureURI
  //     const otherMeasure = option.uri

  //     return (
  //         <option
  //             key={measure ? measure : option.uri}
  //             value={label ? label.toLowerCase() : "missing"}
  //             info={ { quantity:1, foodId: id, measureURI: (measure ? measure : otherMeasure) } }

  //         >
  //             {option.label}
  //         </option>
  //     )
  // })
  return (
    <select
      className="border border-gray-400 pl-4 py-2 mt-1 mb-1 bg-white w-1/5 self-center"
      name={name}
      onChange={handleChange}
      required=""
    >
      <option className="text-gray-100" disabled="" defaultValue>
        {name}
      </option>
      {options}
    </select>
  );
}
