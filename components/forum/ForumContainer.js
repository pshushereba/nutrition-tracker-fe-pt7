import React from 'react'
import { useQuery } from '@apollo/react-hooks';
import { useRouter } from 'next/router';
import { GET_FORUM_SELECTION_STATE } from '../../gql/queries';
import TopicList from './TopicList';

const ForumContainer = () => {
    
    const router = useRouter();
    const {data, client} = useQuery(GET_FORUM_SELECTION_STATE);
    const activeCat = data ? data.activeCat : "featured"

    const handleClick = (e) => {
        const activeCat = e.target.dataset.activecat;
        console.log(activeCat)
        client.writeData({ data: { ...data, activeCat: activeCat } });
      };
    
    return (
        <div>
            <div className="flex-1 flex"></div>
            <div className="flex justify-end border-b-2 border-gray-100">
                <button 
                    className="bg-cyan-300 text-white text-xs muli w-40 py-1 my-4 rounded"
                    onClick={() => { router.push('/forum/create')}}>Create Post</button>
            </div>
                <TopicList />
            <div className="flex-1"></div>
        </div>
    )
}

export default ForumContainer;