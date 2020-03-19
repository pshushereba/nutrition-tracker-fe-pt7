import React from "react";
import ProgressSVG from "../svg/ProgressSVG.js";

const ProgressCenter = props => {
  // delete this props object
  // and switch the data in the paragraph
  const Props = {
    goalWeight: 165,
    currentWeight: 170
  };

  // returns the absolute value (always positive)
  // difference between the two.
  // can pass in any order
  function difference(valueOne, valueTwo) {
    return Math.abs(valueOne - valueTwo);
  }

  return (
    <div className="flex flex-col items-center p-3">
      <h1 className="muli text-2xl font-semibold text-center">
        You're only {difference(Props.goalWeight, Props.currentWeight)} pounds
        away from your goal!
      </h1>
      <h2 className="muli text-xl font-semibold">Keep going!</h2>
      <p className="muli font-normal text-sm">Goal weight: {Props.goalWeight}</p>
      <p className="muli font-normal text-sm">
        Current weight: {Props.currentWeight}
      </p>
      <ProgressSVG />
    </div>
  );
};

export default ProgressCenter;
