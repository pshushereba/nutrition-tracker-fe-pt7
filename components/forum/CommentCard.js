import React from 'react'

const CommentCard = (props) => {
    console.log("In CommentCard", props)
    
    return (
        <div className="w-2/3 mb-4">
            <p className="text-sm mb-2">{props.data.user.name}</p>
            <p className="muli">{props.data.body}</p>
        </div>
    )
}

export default CommentCard;