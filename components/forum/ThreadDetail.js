import React from 'react'
import { CenteredContainer, Spacer } from '../../components/Layout/LayoutPrimitives.js';
import EyeIconSVG from '../svg/EyeIconSVG.js';
import CommentIconSVG from '../svg/CommentIconSVG.js';
import LikeIconSVG from '../svg/LikeIconSVG.js';
import AddComment from './AddComment.js';

const ThreadDetail = () => {
    return (
        <div>
            <CenteredContainer>
                <button className="flex justify-start my-4">Back</button>
                <h1 className="muli text-2xl w-3/4">Today is my first day and I'm feeling really excited! I hope this works!</h1>
                <p className="my-4">Posted by Michael Jordan 4 hours ago</p>
                <div className="flex justify-end">
                    <EyeIconSVG />
                    <CommentIconSVG />
                    <LikeIconSVG />
                </div>
                <div className="flex flex-wrap mb-6">
                    <p className="w-3/4">Maybe this will finally be the kick in the ass that I need. Maybe this will finally be the kick in the ass that I need.</p>
                </div>
                
               <AddComment />
            </CenteredContainer>
        </div>
    )
}

export default ThreadDetail;
