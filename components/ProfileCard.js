import { GET_USER } from '../gql/queries'
import { useQuery } from '@apollo/react-hooks'
import UserCard from './ProfileCard'



const ProfileCard = ({ loading, error, data }) => {
  
  if (error) return <div>Error: {error}</div>
  if (loading) return <div>Loading ..</div>
  
  const { id , name, email } = data.user

  const profileCard = 
    <UserCard 
      loading={loading} 
      id={id || ''} 
      name={name || ''} 
      email={email || ''}
    />

  return (
    <>
      {data ? profileCard : "nothing"}
    </>
  )
  
}

export default ProfileCard