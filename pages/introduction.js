import AppLayout from '../components/AppLayout';
import Calculator from '../components/Calculator.js';
import MarketingSVG from '../components/svg/MarketingSVG.js';

const Introduction = () => {
    return(
        <>
            <AppLayout />
            <div className="flex-row justify-around">
                <MarketingSVG />
                <Calculator />
            </div>
            
        </>
    )
}

export default Introduction;