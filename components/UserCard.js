import { useQuery } from '@apollo/react-hooks'
import gql from 'graphql-tag'

export const GET_ALL_USERS = gql`
  query {
    users {
      id
      name
      email
    }
  }
`
export default UserCard = () => {
  const { loading, error, data } = useQuery(GET_ALL_USERS)

  const userCards = data.users.map(user => {
    return (
        <div>
          <ul>
            <li>{user.id}</li>
            <li>{user.name}</li>
          </ul>
        </div>
      )
    }
  )

  if (loading) <div>loading...</div>
  if (error) <div>{error}</div>
  
  return (
    {userCards}
  )
}

