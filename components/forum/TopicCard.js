import React from 'react'
import EyeIconSVG from '../svg/EyeIconSVG.js';
import CommentIconSVG from '../svg/CommentIconSVG.js';
import LikeIconSVG from '../svg/LikeIconSVG.js';

const TopicCard = (props) => {
    return (
        <div className="border-b-2 border-gray-50">
            <div className="flex">
                <div className="w-1/2">
                    <h1 className="muli text-2xl my-4">{props.data.title}</h1>
                    <p className="mb-4">{props.data.user.name}</p>
                </div>
                <div className="flex flex-1"></div>
                <div className="flex justify-end align-middle w-1/6">
                    <div className="my-4 mx-2 w-1/3">
                        <EyeIconSVG /> 3
                    </div>
                    <div className="my-4 mx-2 w-1/3">
                        <CommentIconSVG /> 10
                    </div>
                    <div className="my-4 mx-2 w-1/3">
                        <LikeIconSVG /> 6
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TopicCard;
