import React from 'react';
import Graph from '../graphs/Graph.js';
import { GET_WEIGHTS } from '../../gql/queries';
import { useQuery } from '@apollo/react-hooks';

const ProgressGraph = () => {
   const {loading, error, data} = useQuery(GET_WEIGHTS);
   if (loading) return 'Loading...';
   if (error) return `Error! ${error.message}`;
   
    return (
        <div className="w-1/3">
            <Graph data={data} />
        </div>
    )
}

export default ProgressGraph;