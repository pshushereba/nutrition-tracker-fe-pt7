import React from 'react';
import Graph from '../graphs/Graph.js';


const ProgressGraph = (props) => {
    console.log("In ProgressGraph", props.data)
    return (
        <div>
            <Graph data={props.data.myWeightLogs} />
        </div>
    )
}

export default ProgressGraph;