import React from 'react'
import JoyrideSVG from '../../components/svg/JoyrideSVG.js';
import FoodSearchBox from '../../components/ingredients/FoodSearchBox.js';

const MarketingCenter = () => {
    return (
        <div>
            <h1 className="text-4xl text-center">Search Food</h1>
            <div className="flex justify-center">
                <FoodSearchBox />
            </div>
            <div className="flex justify-center">
                <JoyrideSVG />
            </div>
            
        </div>
    )
}

export default MarketingCenter;