import { useState } from "react";
import { useMutation } from "@apollo/react-hooks";
import { UPDATE_WEIGHT_LOG } from "../gql/mutations";

export default function WeightInput() {
  const [weight, setWeight] = useState();
  const [updateWeight, { data }] = useMutation(UPDATE_WEIGHT_LOG);
  const handleChange = e => {
    setWeight(e.target.value);
  };
  const handleSubmit = e => {
    // e.preventDefault();
    updateWeight({
      variables: {
        id: "ck8j2lr0d0005073371gzc8ya",
        current_weight: weight
      }
    });
  };
  return (
    <div className="flex border mr-32 ml-6">
      <input
        type="number"
        placeholder="Enter today's weight"
        name="dailyWeight"
        value={weight}
        onChange={handleChange}
      ></input>
      <button
        className="border rounded bg-purple-300 text-white px-4 py-2"
        onClick={handleSubmit}
      >
        Log Weight
      </button>
    </div>
  );
}
