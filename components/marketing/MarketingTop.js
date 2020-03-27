import React from 'react'
import PhoneManBigSVG from '../../components/svg/PhoneManBigSVG.js';

const MarketingTop = () => {
    return (
        <div className="flex justify-center m-4 w-full">
            <div className="w-1/2 flex justify-end mr-8">
                <PhoneManBigSVG />
            </div>
                <div className="w-1/2 flex flex-col ml-8">
                    <div className="flex-1"></div>
                    <h1 className="text-4xl muli my-4">UVP Slogan Here</h1>
                    <p className="w-1/2 my-4">Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum</p>
                    <button className="text-sm muli text-white w-1/3 px-6 py-2 bg-btn-pink border-btn-pink rounded relative my-4">Join Now</button>
                    <div className="flex-1"></div>
                </div>
        </div>
    )
}

export default MarketingTop;