import { ApolloClient } from 'apollo-client'
import { GET_USER } from '../lib/GET_USER'
import { useQuery } from '@apollo/react-hooks'



const ProfileCard = (props) => {




  const { loading, error, data } = useQuery(GET_USER)

  if (loading) return <div>loading</div>
  console.log('data', data)
  return (
    <ul className="border-red-500">
      <li className="break-words w-64 border-black bg">
        Data:
      </li>
      <li className="text-orange-500">
        {/* Id: {props.user.id} */}
      </li>
      <li>
        {/* Name: {props.user.name} */}
      </li>
    </ul>
  )
}

export default ProfileCard