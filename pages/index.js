import React from 'react'
import Head from 'next/head'
import { withApollo } from '../lib/apollo'

const Home = () => (
  <div>
    <Head>
      <title>Home</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <h1 className="text-red-900">Home Page</h1>
  </div>
)

export default withApollo()(Home)
