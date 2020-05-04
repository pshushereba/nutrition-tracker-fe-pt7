import React from 'react'
import ForumContainer from '../../components/forum/ForumContainer.js';
import withApollo from '../../lib/apollo.js';
import Layout from '../../components/Layout/index.js';

const posts = () => {
    return (
        <Layout>
            <ForumContainer />
        </Layout>
    )
}

export default withApollo(posts);