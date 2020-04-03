import { useState } from "react";
import { useMutation, useApolloClient } from "@apollo/react-hooks";
import { UPDATE_WEIGHT_LOG } from "../gql/mutations";

export default function WeightInput() {
  const [weight, setWeight] = useState();
  const [updateWeight, { data }] = useMutation(UPDATE_WEIGHT_LOG);
  const client = useApolloClient()
  console.log(client)
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
    console.log("WeightInput: handleSubmit", data)
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

// const [someMutation] = useMutation(SOME_MUTATION);
// const handleSubmit = e => {
//   e.preventDefault();
//   // Run the callback you set in the useMutation hook
//   someMutation({
//     variables: variables,
//     optimisticResponse: null,
//     update: cache => {  // Grab the cache to work with it
//       // Run the query related to the field you want to update against the cache
//       const exisitingData = cache.readQuery({ query: SOME_RELEVANT_QUERY });
//       //  Do what you need to do to change the data
//       const updatedData = existingData.filter(
//         data => data.property === someValue
//       );
//     }
//   });
//   //  Write the results back to the cache immediately
//   cache.writeQuery({
//     query: SOME_RELEVANT_QUERY,
//     data: {itemInCache: updatatedData}
//   })
// };