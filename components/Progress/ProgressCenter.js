import React from "react";
import ProgressSVG from "../svg/ProgressSVG.js";
import { useQuery } from "@apollo/react-hooks";

const ProgressCenter = props => {
  // delete this props object
  // and switch the data in the paragraph
  const weight = props.data.myWeightLogs[0].current_weight;
  const goal_weight = props.data.me.profile.goal_weight;

  console.log(props.data)

  // returns the absolute value (always positive)
  // difference between the two.
  // can pass in any order
  function difference(valueOne, valueTwo) {
    return Math.abs(valueOne - valueTwo);
  }

  return (
    <div className="flex flex-col items-center p-3">
      <h1 className="muli text-2xl font-semibold text-center">
        You're only {difference(goal_weight, weight)} pounds
        away from your goal!
      </h1>
      <h2 className="muli text-xl font-semibold">Keep going!</h2>
      <p className="muli font-normal text-sm">Goal weight: {goal_weight}</p>
      <p className="muli font-normal text-sm">
        Current weight: {weight}
      </p>
      <ProgressSVG />
    </div>
  );
};

export default ProgressCenter;
