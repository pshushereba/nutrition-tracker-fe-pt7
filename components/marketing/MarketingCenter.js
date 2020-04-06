import React from 'react'
import JoyrideSVG from '../../components/svg/JoyrideSVG.js';
import FoodSearchBox from '../../components/ingredients/FoodSearchBox.js';
import Calculator from '../Calculator.js';

const MarketingCenter = () => {
    return (
        <div>
            <div className="flex justify-end">
               <Calculator />
            </div>
            <div className="flex justify-center">
                {/* <JoyrideSVG /> */}
            </div>
        </div>
    )
}

export default MarketingCenter;