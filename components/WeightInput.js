import { useState } from "react";
import { useMutation, useQuery } from "@apollo/react-hooks";
import { UPDATE_WEIGHT_LOG } from "../gql/mutations";
import { USER_DASH_HEADER } from "../gql/queries";

export default function WeightInput() {
  const [weight, setWeight] = useState();
  const [updateWeight] = useMutation(UPDATE_WEIGHT_LOG);
  const { data, loading, error } = useQuery(USER_DASH_HEADER);

  if (error) return `${error}`;
  if (loading) return "Loading ...";

  const {
    me: {
      name,
      profile: { gender },
      weightLogs,
    },
  } = data;

  const handleChange = (e) => {
    setWeight(e.target.value);
  };

  const lastWeightLogId = weightLogs[0].id;
  const currentLog = weightLogs[0];

  const handleSubmit = () => {
    
    updateWeight({
      variables: {
        id: lastWeightLogId,
        current_weight: parseInt(weight),
      },
      update: (cache) => {
        
        cache.writeQuery({
          query: USER_DASH_HEADER,
          data: {
            me: {
              name: name,
              profile: {
                weight: weight,
                gender: gender,
                __typename: "Profile",
              },
              weightLogs: weightLogs,
              __typename: "User",
            },
          },
        });
        return cache;
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