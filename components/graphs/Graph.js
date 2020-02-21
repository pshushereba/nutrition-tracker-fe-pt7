import React from 'react'
import { Line } from 'react-chartjs-2';

const Graph = () => {
    
    const graphData = {
        datasets:
            [{
                labels: ['label1', 'label2', 'label3', 'label4', 'label5', 'label6', 'label7', 'label8'],
                data: [172, 170.2, 169.6, 169.4, 168.8, 168.4, 167.0, 166.8],
                label: 'Weight'
            }]
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
                labels: ['2/5', '2/6', '2/7', '2/8', '2/9', '2/10', '2/11', '2/12', '2/13', '2/14', '2/15', '2/16']
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
