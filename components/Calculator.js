import {useState} from 'react';
import FormInput from '../components/form/FormInput.js';


const Calculator = () => {
    const [bmiInfo, setBmiInfo] = useState({height: 0, weight: 0, age: 0, bmi: 0});
    const [complete, setComplete] = useState(false);

    const handleChange = (e) => {
        setBmiInfo({...bmiInfo, [e.target.name]: e.target.value})
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        bmiCalc(bmiInfo);
        setComplete(true);
    }

    const clearForm = () => {
        setBmiInfo({height: 0, weight: 0, age: 0, bmi: 0})
        setComplete(false);
    }

    const bmiCalc = (bmiInfo) => {
        const userBMI = Math.ceil(703 * (Number(bmiInfo.weight) / Math.pow(Number(bmiInfo.height), 2))); // Calculating the BMI for the user using height in inches, weight in pounds.
        setBmiInfo({...bmiInfo, bmi: userBMI})
        return userBMI;
    }
    
    return(
        <>
            <div className="flex-row p-4 m-4 min-h-0">
                <div className="flex-row content-around p-2">
                    <h1 className="inline text-2xl">First, Select a Type</h1>
                </div>
                <div className="flex">
                    <button className="text-xs text-white px-12 py-1 bg-dark-gray border-dark-gray rounded relative mx-6">Standard</button>
                    <p>or</p>
                    <button className="text-xs text-white px-12 py-1 bg-dark-gray border-dark-gray rounded relative mx-6">Metric</button>
                </div>
                <h1 className="text-xl">Enter Height & Weight</h1>
                    <form onSubmit={handleSubmit}>
                        <div className="flex">
                            <FormInput 
                                placeholder="Height"
                                label="Height"
                                name="height"
                                type="text"
                                onChange={handleChange}
                                className="m-2"></FormInput>
                            <FormInput 
                                type="text"
                                label="Weight"
                                name="weight"
                                placeholder="Weight"
                                onChange={handleChange}
                                className="m-2"></FormInput>
                            <FormInput 
                                type="text"
                                label="Age"
                                name="age"
                                placeholder="Age"
                                onChange={handleChange}
                                className="m-2"></FormInput>
                            {/* <div className="flex">
                                <button className="text-xs text-white px-6 py-1 bg-indigo-500 border-indigo-500 rounded my-4" htmlType="submit">Calculate My BMI</button>
                                <button className="text-xs text-white px-6 py-1 bg-indigo-500 border-indigo-500 rounded" onClick={clearForm}>Clear</button>
                            </div> */}
                        </div>
                    </form>
            </div>
            <div className="border-b">
                <h1 className="pl-8 text-2xl">Your BMI: {bmiInfo.bmi}</h1>
            </div>
        </>
    )
}

export default Calculator;