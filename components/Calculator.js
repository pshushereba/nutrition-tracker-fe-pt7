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
        const userBMI = Math.ceil(703 * (Number(bmiInfo.weight) / Math.pow(Number(bmiInfo.height), 2)));
        setBmiInfo({...bmiInfo, bmi: userBMI})
        return userBMI;
    }
    console.log(bmiInfo);
    const content = (
        <div>
            <p className="leading-tight">Body mass index (BMI) is a value derived from the mass (weight) and height of a person.</p>
            <p className="leading-tight">The BMI is a convenient rule of thumb used to broadly categorize a person as underweight,</p>
            <p className="leading-tight"> normal weight, overweight, or obese based on tissue mass (muscle, fat, and bone) and height.</p>
        </div>
    )
    
    return(
        <>
            <div className="shadow-md mx-auto p-4 m-4 w-56 min-h-0">
                <div className="flex-row content-around p-2">
                    <h1 className="inline pr-2">What is your BMI?</h1>
                    <Popover content={content}>
                        <Button type="primary" className="p-2">?</Button>
                    </Popover>
                </div>
                
                <Form onSubmit={handleSubmit} className="flex-col">
                    <Input 
                        placeholder="Height"
                        name="height"
                        type="text"
                        onChange={handleChange}></Input>
                    <Input 
                        type="text"
                        name="weight"
                        placeholder="Weight"
                        onChange={handleChange}></Input>
                    <Input 
                        type="text"
                        name="age"
                        placeholder="Age"
                        onChange={handleChange}></Input>
                    <Button htmlType="submit">Calculate My BMI</Button>
                    <Button onClick={clearForm}>Clear</Button>
                </Form>
            </div>
            <div>
                {complete && <h1 className="px-4 text-center">Your BMI is: {bmiInfo.bmi}</h1>}
            </div>
        </>
    )
}

export default Calculator;