import { useState } from "react";
import { useMutation, useQuery } from "@apollo/react-hooks";
import { UPDATE_WEIGHT_LOG } from "../gql/mutations";
import { GET_WEIGHT_LOGS } from "../gql/queries";

export default function WeightInput() {
  const [weight, setWeight] = useState({ value: undefined });
  const [updateWeightLog, { data: newData }] = useMutation(UPDATE_WEIGHT_LOG);
  const { data, loading, error } = useQuery(GET_WEIGHT_LOGS);

  if (error) return `${error}`;
  if (loading) return "Loading ...";

  const { myWeightLogs } = data;

  const handleChange = (e) => {
    setWeight(e.target.value);
  };

  const lastWeightLogId = myWeightLogs[0].id;

  const handleSubmit = () => {
    updateWeightLog({
      variables: {
        id: lastWeightLogId,
        current_weight: parseInt(weight),
      },
      optimisticResponse: {
        __typename: "Mutation",
        updateWeightLog: {
          id: lastWeightLogId,
          __typename: "WeightLog",
          current_weight: parseInt(weight),
        },
      },
    });
  };

  return (
    <div className="flex border rounded pl-4 ml-6 mr-32">
      <form>
        <input
          type="number"
          placeholder="Enter today's weight"
          name="dailyWeight"
          value={weight.value}
          onChange={handleChange}
        ></input>
      </form>
      <button
        className="border rounded bg-purple-300 text-white px-4 py-2"
        onClick={handleSubmit}
      >
        Log Weight
      </button>
    </div>
  );
}
