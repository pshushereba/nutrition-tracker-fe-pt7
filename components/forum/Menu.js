import React from 'react'
import { useRouter } from 'next/router';

const Menu = (props) => {
    const router = useRouter();


    return (
        <div 
            className="relative mx-2"
            onMouseLeave={(e) => props.toggleMenu()}>
            <div className="bg-white border border-gray-900 text-xs rounded py-1 px-4 right-0 bottom-full">
                <button
                    onClick={() => router.push('/forum/edit/[edit]', `/forum/edit/${props.data.id}`)}>Edit</button>
                <button>Delete</button>
                <svg className="absolute text-black h-2 right-0 mr-3 top-full" x="0px" y="0px" viewBox="0 0 255 255" xmlSpace="preserve"><polygon className="fill-current" points="0,0 127.5,127.5 255,0" /></svg>
            </div>
        </div>
    )
}

export default Menu;