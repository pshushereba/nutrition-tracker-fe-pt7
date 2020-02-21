import {useState} from 'react';
import {Form, Input, Button} from 'antd';

const Calculator = () => {
    const [bmiInfo, setBmiInfo] = useState("")
    
    return(
        <div className="calculator-container">
            <Form>
                <Input 
                    type="text"
                    placeholder="Height"></Input>
                <Input 
                    type="text"
                    placeholder="Weight"></Input>
                <Input placeholder="Age"></Input>
                <Button>Calculate My BMI</Button>
            </Form>
        </div>
    )
}

<style jsx>{`
    .calculator-container {
        max-width: 300px;
    }
`}</style>

export default Calculator;