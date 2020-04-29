import React, {useState} from 'react'
import { useQuery } from '@apollo/react-hooks';
import { useRouter } from 'next/router';
import { GET_FORUM_SELECTION_STATE } from '../../gql/queries';
import TopicList from './TopicList';
import Modal from '../Modal.js';

const ForumContainer = () => {
    
    const router = useRouter();
    const [showModal, setShowModal] = useState(true);

      const toggleModal = () => {
        setShowModal(!showModal);
    }
    
    return (
        <div className="w-3/4 mx-auto">
            
            <div className="flex justify-end border-b-2 border-gray-100">
                <button 
                    className="bg-cyan-300 text-white text-xs muli w-40 py-1 my-4 rounded"
                    onClick={() => { router.push('/forum/create')}}>Create Post</button>
            </div>
                <TopicList />
                <Modal showModal={showModal} />
        </div>
    )
}

export default ForumContainer;