import React from 'react'
import withApollo from '../../lib/apollo';
import Layout from '../../components/Layout/index';

function post() {
    return (
        <div>
            <Layout>
                post
            </Layout>
            
        </div>
    )
}

export default withApollo(post);