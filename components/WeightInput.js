import { useState } from "react";
import { useMutation, useQuery } from "@apollo/react-hooks";
import { UPDATE_WEIGHT_LOG } from "../gql/mutations";
import { GET_LAST_WEIGHT_LOG, USER_DASH_HEADER } from "../gql/queries";

export default function WeightInput() {
  const [weight, setWeight] = useState();
  const [updateWeight] = useMutation(UPDATE_WEIGHT_LOG);
  const { data, loading, error } = useQuery(GET_LAST_WEIGHT_LOG);

  if (error) return `${error}`;
  if (loading) return "Loading ...";
  const handleChange = (e) => {
    setWeight(e.target.value);
  };
  const lastWeightLogId = data.myWeightLogs[0].id;

  const weightUpdateData = {
    me: {
      profile: {
        id: data.me.profile.id,
        weight: parseInt(weight),
        __typename: "Profile",
      },
      __typename: "User",
    }
  };

  const handleSubmit = () => {
    updateWeight({
      variables: {
        id: lastWeightLogId,
        current_weight: parseInt(weight),
      },
      update: (cache) => {
        cache.writeQuery({
          query: USER_DASH_HEADER,
          data: { weightUpdateData },
        });
      },
    });
    setWeight(null);
    console.log("WeightInput: handleSubmit: weight=", weight);
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

const asoifdha = {
  data: {
    me: {
      profile: {
        id: "ck8cf2gpl001d0774gafeu9qn",
        weight: 170,
        __typename: "Profile",
      },
      __typename: "User",
    },
    myWeightLogs: [
      {
        id: "ck8i4pjfi00270728x67h1eev",
        current_weight: 167,
        __typename: "WeightLog",
      },
      {
        id: "ck8i5togl003o07288e9e01bs",
        current_weight: 170,
        __typename: "WeightLog",
      },
      {
        id: "ck8i5tv48003u07288d6z4ltq",
        current_weight: 171,
        __typename: "WeightLog",
      },
      {
        id: "ck8i5u3dh004007280xp1ioo3",
        current_weight: 172,
        __typename: "WeightLog",
      },
    ],
  },
};
