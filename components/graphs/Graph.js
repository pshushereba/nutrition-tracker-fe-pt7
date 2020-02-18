import React from 'react'
import { Line } from 'react-chartjs-2';

const Graph = () => {
    
    const graphData = {
        data: {
           datasets:
                {
                    data: [172, 170.2, 169.6, 169.4]
                }
        }
    }

    const graphOptions = {
        
        layout: {
            padding: 50
        },

        title: {
            display: true,
            text: 'Your Progress'
        },

        scales: {
            yAxes: {
                ticks: {
                    min: 100,
                    max: 300
                }
            },

            xAxes: [{
                type: 'category',
                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
            }]
        }
    }
    
    return (
        <div>
            <Line data={graphData} options={graphOptions} />
        </div>
    )
}

export default Graph;
