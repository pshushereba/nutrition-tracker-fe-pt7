import React from 'react'
import PhoneManBigSVG from '../../components/svg/PhoneManBigSVG.js';

const MarketingTop = () => {
    return (
        <div className="flex justify-center m-4 w-full">
            <div className="w-1/2">
                <PhoneManBigSVG />
            </div>
            <div className="w-1/2">
                <div className="justify-center">
                    <h1 className="text-2xl muli">UVP Slogan Here</h1>
                    <p>Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum</p>
                </div>
                
                <button className="text-xs text-white w-1/3 px-6 py-1 bg-btn-pink border-btn-pink rounded relative">Join Now</button>
            </div>
        </div>
    )
}

export default MarketingTop;