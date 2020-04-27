import React from 'react'
import { useRouter } from 'next/router';

const Menu = (props) => {
    const router = useRouter();


    return (
        <div 
            className="z-10"
            onMouseLeave={(e) => props.toggleMenu()}>
            <button
                onClick={() => router.push('/forum/edit/[edit]', `/forum/edit/${props.data.id}`)}>Edit</button>
            <button>Delete</button>
        </div>
    )
}

export default Menu;