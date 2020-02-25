import Layout from '../components/Layout.js';
import Calculator from '../components/Calculator.js';

const Introduction = () => {
    return(
        <>
            <Layout />
            <div>
                <LogInSVG />
            </div>
            
            <Calculator />
        </>
    )
}

export default Introduction;