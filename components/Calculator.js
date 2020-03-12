import {useState} from 'react';
import FormInput from '../components/form/FormInput.js';
import InfoSVG from './svg/InfoSVG.js';
import StandardCalc from './StandardCalc.js';
import MetricCalc from './MetricCalc.js';


const Calculator = () => {
    const [bmiInfo, setBmiInfo] = useState({height: 0, weight: 0, age: 0, kilograms: 0, centimeters: 0, bmi: null});
    const [complete, setComplete] = useState(false);
    const [active, setActive] = useState({standard: true, metric: false});

    // const clearForm = () => {
    //     setBmiInfo({height: 0, inches: 0, weight: 0, age: 0, bmi: 0})
    //     setComplete(false);
    // }    
    return(
        <>
            <div className="flex-row p-4 m-4 min-h-0">
                <div className="flex-row content-around p-2 text-center">
                    <h1 className="inline text-3xl">First, Select a Type</h1>
                </div>
                <div className="flex justify-center my-10">
                    <button 
                        className={`text-xs text-white px-12 py-1 active:bg-active-blue border-dark-gray rounded relative mx-10 ${active.standard ? "bg-active-blue" : "bg-dark-gray"}`}
                        name="standard"
                        active="standard"
                        onClick={() => setActive({standard: !active.standard, metric: !active.metric})}
                        >Standard</button>
                    <p>or</p>
                    <button 
                        className={`text-xs text-white px-12 py-1 border-dark-gray rounded relative mx-10 ${active.metric ? "bg-active-blue" : "bg-dark-gray"}`}
                        onClick={() => setActive({standard: !active.standard, metric: !active.metric})}>Metric</button>
                </div>
                <div className="flex justify-center">
                    <h1 className="text-xl mx-10 muli">Enter Height & Weight</h1>
                    <InfoSVG />
                </div>
                    {active.standard ? <StandardCalc bmiInfo={bmiInfo} setBmiInfo={setBmiInfo} /> :
                    <MetricCalc bmiInfo={bmiInfo} setBmiInfo={setBmiInfo} /> }
            </div>
            <div className="border-b">
                <h1 className="pl-8 text-2xl muli">Your BMI: {bmiInfo.bmi}</h1>
            </div>
        </>
    )
}

export default Calculator;