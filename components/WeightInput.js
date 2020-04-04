import { useState } from "react";
import { useMutation, useQuery } from "@apollo/react-hooks";
import { UPDATE_WEIGHT_LOG } from "../gql/mutations";
import { GET_LAST_WEIGHT_LOG, USER_DASH_HEADER } from "../gql/queries";

export default function WeightInput() {
  const [weight, setWeight] = useState();
  const [updateWeight] = useMutation(UPDATE_WEIGHT_LOG);
  const { data, loading } = useQuery(GET_LAST_WEIGHT_LOG);

  if (loading) return "Loading ...";
  const handleChange = (e) => {
    setWeight(e.target.value);
  };
  const lastWeightLogId = data.myWeightLogs[0].id;

  const handleSubmit = () => {
    updateWeight({
      variables: {
        id: lastWeightLogId,
        current_weight: parseInt(weight),
      },
      update: (cache) => {
        cache.writeQuery({
          query: USER_DASH_HEADER,
          data: { me: { profile: { weight: parseInt(weight) } } },
        });
      },
    });
  };

  return (
    <div className="flex border rounded pl-4 ml-6 mr-32">
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
