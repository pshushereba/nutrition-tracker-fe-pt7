import { request } from 'graphql-request'
import useSWR from 'swr'

const API = 'https://labspt7-nutrition-tracker-be.herokuapp.com'

// Make these imports and set this var at the top of your page

function User() {
  
  //Add this hook inside your React component
  const { data, error } = useSWR(
    `mutation loginUser($email: String!, $password: String!) {
      login (
        data: {
          email: $email,
          password: $password
        }
      ) {
        token
        user {
          id
          name
        }
      }
    }`,
    query => request(API, query, variables)
  )
  // End of hook

  // useSWR(`define the query`, cb(query => doSomething(withThe, query, heres your variables))

  //this is where you pass in your form data. just replace the hardcoded
  // strings with your state variables
  const variables = {
    email: "testing@testing.com",
    password: "test1234"
  }

  //We'll be using ApolloClient, but this requires zero config
  // and was quicker to get working
  //eventually we will have these calls and all their logic in the routes
  //in the pages/api folder

  if (error) return <div>failed to load</div>
  if (!data) return <div>loading...</div>
  return <div>User: {JSON.stringify(data.login)}!</div>
}

export default User