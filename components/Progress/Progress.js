import React from "react";
import ProgressCenter from "./ProgressCenter.js";
import ProgressWeightLog from "./ProgressWeightLog.js";
import ProgressGraph from './ProgressGraph.js';
import { GET_PROGRESS_DATA } from '../../gql/queries';
import { useQuery } from '@apollo/react-hooks';


const Progress = () => {
  const {loading, error, data} = useQuery(GET_PROGRESS_DATA);
  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;
  
  return (
    <section className="flex items-center justify-center">
      <div className="w-1/3">
        <ProgressGraph data={data} />
      </div>
      <div className="w-1/3">
        <ProgressCenter />
      </div>
      <div className="w-1/3">
        <ProgressWeightLog />
      </div>
    </section>
  );
};

export default Progress;