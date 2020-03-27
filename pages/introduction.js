import Layout from '../components/Layout/index.js';
import Calculator from '../components/Calculator.js';
import MarketingSVG from '../components/svg/MarketingSVG.js';
import MarketingTop from '../components/marketing/MarketingTop.js';
import MarketingCenter from '../components/marketing/MarketingCenter.js';

const Introduction = () => {
    return(
        <>
            <Layout>
                <div className="my-8">
                    <MarketingTop />
                </div>
                <div className="my-8">
                    <MarketingCenter />
                </div>
            <h1 className="text-center text-lg m-8 muli">Now, let's track your current weight & log your BMI</h1>
            <div className="flex justify-around">
                <div>
                    <Calculator />
                    <div className="my-16">
                        <button className="text-xs px-12 py-1 rounded relative mx-12">Skip</button>
                        <button className="text-xs text-white px-12 py-1 rounded bg-btn-pink relative mx-12">Next</button>
                    </div>
                </div>
                <div className="container-lg flex-row justify-around mx-10">
                    <MarketingSVG />
                    <div className="m-8 mx-20">
                        <h2 className="my-4">BMI Categories:</h2>
                        <p>Underweight = 18.5</p>
                        <p>Normal Weight = 18.5 - 24.9</p>
                        <p>Overweight = 25 - 29.9</p>
                        <p>Obese = BMI of 30 or greater</p>
                    </div>
                </div>
            </div>
            </Layout>
        </>
    )
}

export default Introduction;