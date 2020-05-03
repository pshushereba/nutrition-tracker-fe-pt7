import { Spacer } from "../Layout/LayoutPrimitives";
import { useQuery } from "@apollo/react-hooks";
import { ME, GET_DOUGHNUT_DATA } from "../../gql/queries";
import DonutGraph from "./DonutGraph";
import { useRouter } from "next/router";
import { currentRecords } from "../../lib/utils";
import { useState, useEffect } from "react";

const DonutContainer = () => {
  const { data } = useQuery(GET_DOUGHNUT_DATA);
  const router = useRouter()
  const [doughnutData, setDoughnutData] = useState({})
  const inJournal = router.asPath.split("/")[1] === "journal"
  
  useEffect(() => {
    data && setDoughnutData(totals)
  },[data])

  
  const chartData = {
    datasets: [
      {
        data: [doughnutData.fat, doughnutData.carbs, doughnutData.protein],
        backgroundColor: ["#1F7DA2", "#9ABA19", "#00426C"],
        hoverBackgroundColor: ["#035c80", "#4D8037", "#002942"],
      },
    ],
    labels: ["Fat", "Carbs", "Protein"],
  };
  
  if (!data) return "Loading...";
  
  const defaultValuesForNoRecords = { fat: .33, carbs: .33, protein: .33 }
  const graphRecords = currentRecords(data.myDailyRecords)
  const totals = !graphRecords.length ? defaultValuesForNoRecords : deriveDoughnutValues(graphRecords)
  
  function deriveDoughnutValues(dataObj) {
    let newObj = {}
    Object.keys(dataObj).map(record => {
      Object.keys(dataObj[record]).map(prop => {        
        if (typeof dataObj[record][prop] === "number") {
          newObj[prop] ? 
          (newObj[prop] = newObj[prop] += dataObj[record][prop]) : 
          (newObj[prop] = dataObj[record][prop])
        } 
      })
    })
    return newObj
  }

  
  return (
    <div className={`w-1/5 flex justify-around mt-16 -mr-32 ${ inJournal ? "-mb-24" : ""}`}>
      <div className="flex flex-col -mr-12 justify-end text-center pb-6">
        <div className="flex items-baseline">
          <div className="text-3xl">
            {data.me.profile && data.me.profile.weight
              ? data.me.profile.weight
              : "Add Your Weight!"}
          </div>
          <div>lbs</div>
        </div>
        <div>Weight</div>
      </div>
      <div className=" w-96 flex flex-col justify-center">
        <DonutGraph data={chartData} />
        <h2 className="w-full text-center font-semibold text-xl pt-4">
          Daily Intake
        </h2>
        <p className={`text-center ${!doughnutData.calories ? "hidden" : "" }`}>{`${doughnutData.calories} Calories`}</p>
      </div>
      <div className="flex flex-col -ml-12 justify-end text-center pb-6">
        <div className="flex items-baseline">
          <div className="text-3xl">
            {data.myWeightLogCount ? data.myWeightLogCount : "Start Tracking!"}
          </div>
          <div>days</div>
        </div>
        <div>Streak</div>
      </div>
    </div>
  );
};

export default DonutContainer;
