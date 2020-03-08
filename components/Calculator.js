import {useState} from 'react';
import FormInput from '../components/form/FormInput.js';
import InfoSVG from './svg/InfoSVG.js';


const Calculator = () => {
    const [bmiInfo, setBmiInfo] = useState({height: 0, weight: 0, age: 0, bmi: null});
    const [complete, setComplete] = useState(false);
    
    const handleSubmit = (e) => {
        e.preventDefault();
        bmiCalc(bmiInfo);
        setComplete(true);
    }

    const clearForm = () => {
        setBmiInfo({height: 0, inches: 0, weight: 0, age: 0, bmi: 0})
        setComplete(false);
    }

    const bmiCalc = (bmiInfo) => {
        const userBMI = Math.ceil(703 * (Number(bmiInfo.weight) / Math.pow(((Number(bmiInfo.height) * 12) + Number(bmiInfo.inch)), 2)));
        setBmiInfo({...bmiInfo, bmi: userBMI})
        return userBMI;
    }
    console.log(bmiInfo)
    
    return(
        <>
            <div className="flex-row p-4 m-4 min-h-0">
                <div className="flex-row content-around p-2 text-center">
                    <h1 className="inline text-3xl">First, Select a Type</h1>
                </div>
                <div className="flex justify-center my-10">
                    <button 
                        className="text-xs text-white px-12 py-1 bg-dark-gray active:bg-active-blue border-dark-gray rounded relative mx-10">Standard</button>
                    <p>or</p>
                    <button className="text-xs text-white px-12 py-1 bg-dark-gray border-dark-gray rounded relative mx-10">Metric</button>
                </div>
                <div className="flex justify-center">
                    <h1 className="text-xl mx-10 muli">Enter Height & Weight</h1>
                    <InfoSVG />
                </div>
                    <form onSubmit={handleSubmit}>
                        <div className="flex">
                            <div className="m-2 w-24">
                                <FormInput 
                                    placeHolder="ft"
                                    label="Your Height"
                                    name="height"
                                    type="text"
                                    setInput={setBmiInfo}
                                    data={bmiInfo}
                                ></FormInput>
                            </div>
                            <div className="m-2 w-24">
                            <FormInput 
                                type="text"
                                label="In"
                                name="inch"
                                placeHolder="inch"
                                setInput={setBmiInfo}
                                data={bmiInfo}
                            ></FormInput>
                            </div>
                            <div className="m-2 mx-6 w-24">
                            <FormInput 
                                type="text"
                                label="Your Weight"
                                name="weight"
                                placeHolder="lbs"
                                setInput={setBmiInfo}
                                data={bmiInfo}
                            ></FormInput>
                            </div>
                            
                            <div className="flex self-center">
                                <button className="text-xs text-white px-6 py-1 bg-indigo-500 border-indigo-500 rounded" htmlType="submit">Calculate My BMI</button>
                                {/* <button className="text-xs text-white px-6 py-1 bg-indigo-500 border-indigo-500 rounded" onClick={clearForm}>Clear</button> */}
                            </div>
                        </div>
                    </form>
            </div>
            <div className="border-b">
                <h1 className="pl-8 text-2xl muli">Your BMI: {bmiInfo.bmi}</h1>
            </div>
        </>
    )
}

export default Calculator;

// #8D4CFF - Active button color