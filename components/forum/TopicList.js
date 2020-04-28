import React, {useEffect} from 'react'
import { useQuery, useSubscription } from '@apollo/react-hooks';

import { GET_FORUM_TOPICS } from '../../gql/queries.js';
import { SUBSCRIBE_FORUM_THREADS } from '../../gql/subscriptions.js';
import TopicCard from './TopicCard.js';

const TopicList = () => {
    
    const { loading, data, error } = useQuery(GET_FORUM_TOPICS)

    if (loading) {
        return "loading"
    }

    if (error) {
        return `Error ${error}`
    }
    
    console.log(data)
    return (
        <div className="flex-row">
            {data.posts ? data.posts.map((post) => {
                return <TopicCard key={post.id} data={post} user={data.me} />
            }) : null}
        </div>
    )
}

export default TopicList;