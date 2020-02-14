import { useQuery } from '@apollo/react-hooks'
import gql from 'graphql-tag'

export const GET_ALL_USERS = gql`
  query {
    allUsers {
      id
      firstName
      lastName
      email
    }
  }
`
const UserCard = () => {
  const { loading, error, data } = useQuery(GET_ALL_USERS)
  
  // const { users } = data
  
  if (loading) <div>loading...</div>
  if (error) <div>{error}</div>
  // if (data) {    
  
    // const userCards = users.map(user => {
    //   return (
    //     <div key={user.id}>
    //         <ul>
    //           <li>{user.id}</li>
    //           <li>{user.name}</li>
    //         </ul>
    //       </div>
    //         )
    //     }
    // )
    
    return (
      <div>
        {/* {userCards} */}
        something
    </div>
    )
  }
// }

export default UserCard