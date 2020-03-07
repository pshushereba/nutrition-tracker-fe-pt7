import AppLayout from '../components/AppLayout';
import Calculator from '../components/Calculator.js';
import MarketingSVG from '../components/svg/MarketingSVG.js';
import FormInput from '../components/form/FormInput.js';

const Introduction = () => {
    return(
        <>
            <AppLayout />
            <h1 className="text-center text-lg m-8">Now, let's track your current weight & log your BMI</h1>
            <div className="flex justify-around">
                <div>
                    <Calculator />
                    <div className="my-16">
                        <button className="text-xs px-12 py-1 rounded relative mx-12">Skip</button>
                        <button className="text-xs text-white px-12 py-1 rounded bg-btn-pink relative mx-12">Next</button>
                    </div>
                </div>
                <div className="container-lg flex-row justify-around">
                    <MarketingSVG />
                    <h2>BMI Categories</h2>
                    <p>Underweight = 18.5</p>
                    <p>Normal Weight = 18.5 - 24.9</p>
                    <p>Overweight = 25 - 29.9</p>
                    <p>Obese = BMI of 30 or greater</p>
                </div>
            </div>
        </>
    )
}

export default Introduction;

// Button color: #5A5A5A
// Button text: #F9F9F9