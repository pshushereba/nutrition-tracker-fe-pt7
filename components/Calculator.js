import {useState} from 'react';


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
            <div className="flex-row shadow-md p-4 m-4 w-56 min-h-0">
                <div className="flex-row content-around p-2">
                    <h1 className="inline pr-2">What is your BMI?</h1>
                </div>
                
                <form onSubmit={handleSubmit} className="flex-col">
                    <input 
                        placeholder="Height"
                        name="height"
                        type="text"
                        onChange={handleChange}
                        className="m-2"></input>
                    <input 
                        type="text"
                        name="weight"
                        placeholder="Weight"
                        onChange={handleChange}
                        className="m-2"></input>
                    <input 
                        type="text"
                        name="age"
                        placeholder="Age"
                        onChange={handleChange}
                        className="m-2"></input>
                    <button className="text-xs text-white px-6 py-1 bg-indigo-500 border-indigo-500 rounded my-4" htmlType="submit">Calculate My BMI</button>
                    <button className="text-xs text-white px-6 py-1 bg-indigo-500 border-indigo-500 rounded" onClick={clearForm}>Clear</button>
                </form>
            </div>
            <div>
                {complete && <h1 className="px-4 text-center">Your BMI is: {bmiInfo.bmi}</h1>}
            </div>
        </>
    )
}

export default Calculator;