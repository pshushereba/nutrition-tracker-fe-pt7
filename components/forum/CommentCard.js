import React from 'react'
import { CenteredContainer } from '../../components/Layout/LayoutPrimitives.js';

const CommentCard = (props) => {
    
    return (
        <div className="w-full">
            <div className="mb-4 flex-col">
                <p className="text-sm mb-2">{props.data.user.name}</p>
                <p className="muli">{props.data.body}</p>
            </div>
        </div>
            
    )
}

export default CommentCard;