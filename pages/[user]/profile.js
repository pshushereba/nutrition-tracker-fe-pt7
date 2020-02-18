import nextCookie from 'next-cookies'
import Layout from '../../components/Layout'
import ProfileCard from '../../components/ProfileCard'
import withApollo from '../../lib/apollo'
import { useQuery } from '@apollo/react-hooks'
import { GET_USER } from '../../lib/GET_USER';
import { ApolloClient } from 'apollo-client';

function Profile(props) {


  return (
    <Layout>
      <ProfileCard {...props} />
    </Layout>
  )

}

export default withApollo(Profile)

// Profile.getInitialProps = ctx => {
//   const client = ctx.apolloClient
//   // console.log('apolloClient', apolloClient)

//   client.query({ GET_USER })
//     .then(data => data)

//   return data
// }