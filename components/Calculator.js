import {useState} from 'react';
import {Form, Input, Button, Popover} from 'antd';
// import Layout from '../components/Layout.js';
// import {Layout} from 'antd';
// const {Content} = Layout;

const Calculator = () => {
    const [bmiInfo, setBmiInfo] = useState("")

    const content = (
        <div>
            <p className="leading-tight">Body mass index (BMI) is a value derived from the mass (weight) and height of a person.</p>
            <p className="leading-tight">The BMI is a convenient rule of thumb used to broadly categorize a person as underweight,</p>
            <p className="leading-tight"> normal weight, overweight, or obese based on tissue mass (muscle, fat, and bone) and height.</p>
        </div>
    )
    
    return(
            <div className="shadow-md mx-auto p-4 m-4 w-56 min-h-0">
                <div className="flex-row content-around p-2">
                    <h1 className="inline pr-2">What is your BMI?</h1>
                    <Popover content={content}>
                        <Button type="primary" className="p-2">?</Button>
                    </Popover>
                </div>
                
                <Form className="flex-col">
                    <Input 
                        type="text"
                        placeholder="Height"></Input>
                    <Input 
                        type="text"
                        placeholder="Weight"></Input>
                    <Input 
                    type="text"
                    placeholder="Age"></Input>
                    <Button>Calculate My BMI</Button>
                </Form>
            </div>
    )
}

export default Calculator;