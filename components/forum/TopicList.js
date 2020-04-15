import React, {useEffect} from 'react'
import { useQuery, useSubscription } from '@apollo/react-hooks';

import { GET_FORUM_TOPICS } from '../../gql/queries.js';
import { SUBSCRIBE_FORUM_THREADS } from '../../gql/subscriptions.js';

const TopicList = () => {
    
    // const { loading, data, subscribeToMore } = useQuery(GET_FORUM_TOPICS)

    const { data, error, loading } = useSubscription(
        SUBSCRIBE_FORUM_THREADS,
        
      );
    /*
        Current problem: We are still not sure if the websocket is staying open, or if it is continuously closing and reconnecting. There is a problem with the subscription when the request is made to the server. The subscription works on the GQL playground, but not on the client side. We were not able to implement the useSubscription hook correctly. Using subscribeToMore seems like the better way to go, but we need to double check to make sure that it is set up correctly.

        Possible fix: Have a separate endpoint for subscriptions. 
    
    
    */

    // useEffect(() => {
    //     subscribeToMore({
    //         document: SUBSCRIBE_FORUM_THREADS,
    //         updateQuery: (prev, { subscriptionData }) => {
    //             if (!subscriptionData.data) return prev;
    //             const newThread = subscriptionData.node.posts;

    //             return Object.assign({}, prev, {
    //                 entry: {
    //                     posts: [newThread, ...prev.entry.posts]
    //                 }
    //             });
    //         }
    //     })
    // }, [data])

    if (loading) {
        return "loading"
    }

    if (error) {
        return `Error ${error}`
    }
    
    console.log(data)
    return (
        <div className="flex">
            {data.posts ? data.posts.map((post) => {
                return <h2>{post.body}</h2>
            }) : null}
        </div>
    )
}

export default TopicList;