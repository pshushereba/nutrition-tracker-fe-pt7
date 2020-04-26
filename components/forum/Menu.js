import React from 'react'

const Menu = (props) => {
    return (
        <div 
            className="z-10"
            onMouseLeave={(e) => props.toggleMenu()}>
            <button>Edit</button>
            <button>Delete</button>
        </div>
    )
}

export default Menu;
