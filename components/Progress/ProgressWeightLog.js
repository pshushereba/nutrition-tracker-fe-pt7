import React, { useState, useEffect } from "react";
import ProgressWeightLogItem from "./ProgressWeightLogItem.js";

const ProgressWeightLog = props => {
  // sorted is a sacrificial variable that we need
  // keep
  var sorted = {};

  // this is what will get mapped to generate elements
  // keep
  const [sortedLogs, setSortedLogs] = useState({});

  // this object is used to pair string values to months
  // keep it
  const monthObj = {
    January: "01",
    February: "02",
    March: "03",
    April: "04",
    May: "05",
    June: "06",
    July: "07",
    August: "08",
    September: "09",
    October: "10",
    November: "11",
    December: "12"
  };

  // replace this whenever real data comes in
  // do not keep
  const logs = [
    { date: "01/02/2020", weight: 160 },
    { date: "01/09/2020", weight: 165 },
    { date: "01/16/2020", weight: 163 },
    { date: "02/02/2020", weight: 160 },
    { date: "02/09/2020", weight: 162 },
    { date: "02/16/2020", weight: 167 },
    { date: "03/02/2020", weight: 161 },
    { date: "03/09/2020", weight: 166 },
    { date: "03/16/2020", weight: 164 }
  ];

  useEffect(() => {
    // change logs to real data that comes in
    // expects an array of objects that have a date key
    // expects date key to be MM/DD/YYYY
    // matches the MM to a month string, sets the key of
    // sacrificial object
    // has a ternary operator to check for existence of current key
    // this is to prevent spreading not iterable error
    logs.map(cv => {
      const monthChars = cv.date.charAt(0) + cv.date.charAt(1);
      const currentMonth = Object.keys(monthObj).filter(curval => {
        return monthObj[curval] == monthChars;
      })[0];
      return (sorted = {
        ...sorted,
        [currentMonth]: sorted[currentMonth]
          ? [...sorted[currentMonth], cv]
          : [cv]
      });
    });

    // set the state once
    // cannot set state from the map
    // too many re-renders
    setSortedLogs(sorted);
  }, []);

  return (
    <div className="p-3">
      <h2 className="text-base muli font-normal">Your logs:</h2>
      {Object.keys(sortedLogs).length > 0
        ? Object.keys(sortedLogs).map(cv => {
            return <ProgressWeightLogItem data={sortedLogs[cv]} month={cv} />;
          })
        : ""}
    </div>
  );
};

export default ProgressWeightLog;
