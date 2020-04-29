import React from "react";
import ProgressCenter from "../../components/Progress/ProgressCenter";
import ProgressWeightLog from "../../components/Progress/ProgressWeightLog.js";
import ProgressGraph from "../../components/Progress/ProgressGraph.js";
import { GET_WEIGHT_LOGS } from "../../gql/queries";
import { useQuery } from "@apollo/react-hooks";
import withApollo from "../../lib/apollo.js";
import Layout from "../../components/Layout";
import DailyVibe from "../../components/DailyVibe";
import DonutGraph from "../../components/graphs/DonutGraph";
import FoodSearchBox from "../../components/ingredients/FoodSearchBox";

const Progress = () => {
  const { loading, error, data, refetch } = useQuery(GET_WEIGHT_LOGS);

  if (loading) return "Loading...";
  if (error) return `Error: ${error}`;

  // useEffect(() => {
  //   refetch()
  // }, [data])

  return (
    <Layout>
      <div className="flex my-10">
        <DailyVibe />
        <DonutGraph />
        <div className="w-3/12 mt-2 mr-40">
          <FoodSearchBox />
        </div>
      </div>
      <section className="flex items-center justify-center">
        <div className="w-1/3">
          <ProgressGraph data={data} />
        </div>
        <div className="w-1/3">
          <ProgressCenter data={data} />
        </div>
        <div className="w-1/3">
          <ProgressWeightLog data={data} />
        </div>
      </section>
    </Layout>
  );
};

export default withApollo(Progress);
