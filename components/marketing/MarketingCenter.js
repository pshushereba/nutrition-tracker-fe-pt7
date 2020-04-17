import React from 'react'
import JoyrideSVG from '../../components/svg/JoyrideSVG.js';
import FoodSearchBox from '../../components/ingredients/FoodSearchBox.js';
import Calculator from '../Calculator.js';
import MarketingBoxSVG from '../../components/svg/MarketingBoxSVG.js';

const MarketingCenter = () => {
    return (
        <div className="flex-col">
            <div className="flex justify-center">
                <div className="m-32">
                    <MarketingBoxSVG />
                </div>
                <Calculator />
            </div>
        </div>
    )
}

export default MarketingCenter;