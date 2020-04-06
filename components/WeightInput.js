import { useState } from "react";
import { useMutation, useQuery } from "@apollo/react-hooks";
import { UPDATE_WEIGHT_LOG, CREATE_WEIGHT_LOG } from "../gql/mutations";
import { GET_WEIGHT_LOGS } from "../gql/queries";
import { formatDate } from "../lib/utils";

export default function WeightInput() {
  const [weight, setWeight] = useState({ value: undefined });
  const [updateWeightLog, { data: updateData }] = useMutation(UPDATE_WEIGHT_LOG);
  const [createWeightLog, { data: newData}] = useMutation(CREATE_WEIGHT_LOG)
  const { data, loading, error } = useQuery(GET_WEIGHT_LOGS);

  if (error) return `${error}`;
  if (loading) return "Loading ...";

  const { myWeightLogs } = data;

  const handleChange = (e) => {
    setWeight(e.target.value);
  };

  const lastWeightLogId = myWeightLogs[0].id;
  const lastWeightLogDate = myWeightLogs[0].date
  const date = new Date(Date.now())
  const currentDate = formatDate(date).split("-").reverse().join("-")

  function createWeight() {
    createWeightLog({
      variables: {
        date: currentDate,
        current_weight: parseInt(weight),
      },
      optimisticResponse: {
        __typename: "Mutation",
        createWeightLog: {
          current_weight: parseInt(weight),
          date: currentDate,
          __typename: "WeightLog",
        },
      },
    });
  }

  function updateWeight() {
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
  }

  const handleSubmit = () => {
    currentDate === lastWeightLogDate ?
    updateWeight() :
    createWeight()
  };

  return (
    <div className="flex border rounded pl-4 ml-6 mr-32">
        <input
          type="number"
          placeholder="Enter today's weight"
          name="dailyWeight"
          value={weight.value}
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
