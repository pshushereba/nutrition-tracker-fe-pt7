import { GET_USER } from '../gql/queries'
import { useQuery } from '@apollo/react-hooks'
import UserCard from './ProfileCard'



const ProfileCard = () => {

  const { loading , error, data: { user } } = useQuery(GET_USER)
  // console.log('ProfileCard', id, name, email)

  if (loading) return <div>Loading ...</div>
  if (error) return <div>Error: {error}</div>
console.log(user)
  return (
    <UserCard id={user.id} name={user.name} email={user.email} />
    // <div>!</div>
  )
}

export default ProfileCard