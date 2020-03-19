import React from 'react';
import Graph from '../graphs/Graph.js';


const ProgressGraph = (props) => {
    
    return (
        <div>
            <Graph data={props.data} />
        </div>
    )
}

export default ProgressGraph;