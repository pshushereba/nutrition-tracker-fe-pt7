import React from "react";

const ProgressWeightLogItem = props => {
  return (
    <div>
      <h3 className="text-sm muli font-normal bg-chartPurple py-1 pl-4">
        {props.month}
      </h3>
      {props.data.map(cv => {
        return (
          <div key={`${cv.date}-${cv.weight}`} className="flex justify-between px-5">
            <p className="muli font-bold text-base">{cv.date}</p>
            <p className="muli font-bold text-base">{cv.weight} lbs</p>
          </div>
        );
      })}
    </div>
  );
};

export default ProgressWeightLogItem;
