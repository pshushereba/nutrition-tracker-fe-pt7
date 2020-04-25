import React from 'react'
import withApollo from '../../lib/apollo';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { useQuery } from '@apollo/react-hooks';
import { GET_POST_DETAILS } from '../../gql/queries.js';
import Layout from '../../components/Layout/index';
import {CenteredContainer} from '../../components/Layout/LayoutPrimitives.js';
import CommentCard from '../../components/forum/CommentCard.js';
import EyeIconSVG from '../../components/svg/EyeIconSVG.js';
import CommentIconSVG from '../../components/svg/CommentIconSVG.js';
import LikeIconSVG from '../../components/svg/LikeIconSVG.js';
import AddComment from '../../components/forum/AddComment.js';

const post = () => {
    
    const router = useRouter();
    const id = router.query;

    const { data, loading, error } = useQuery(GET_POST_DETAILS, { variables: {id: id.post} });

    if (loading) {
        return "Loading..."
    }

    if (error) {
        return `There was an error getting the post, ${error}`
    }

    console.log(data);
    
    return (
        <div>
            <Layout>
                <CenteredContainer extraClasses="flex-wrap">
                    <Link href="/forum/posts" replace>
                        <button className="flex justify-start my-4">Back</button>
                    </Link>
                    <div className="flex-col w-2/3 justify-center">
                        <h1 className="muli text-2xl w-3/4">{data.post.title}</h1>
                        <p className="my-4">Posted by {data.post.user.name} 4 hours ago</p>
                    </div>
                    <div className="flex justify-end w-1/3">
                        <div className="mx-2">
                            <EyeIconSVG /> {data.post.viewCount || 0}
                        </div>
                        <div className="mx-2">
                            <CommentIconSVG /> {data.post.comments.length}
                        </div>
                        <div className="mx-2">
                            <LikeIconSVG /> {data.post.likeCount || 0}
                        </div>
                    </div>
                    <div className="flex flex-wrap mb-6">
                    <p className="w-3/4">{data.post.body}</p>
                    </div>
                    
                <AddComment data={data} />
                <div className="flex-col">
                    {data.post.comments.map((comment) => {
                        return <CommentCard key={comment.id} data={comment} />
                    })}
                </div>
                
                </CenteredContainer>
            </Layout>
        </div>
    )
}

export default withApollo(post);