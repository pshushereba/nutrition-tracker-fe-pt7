import gql from 'graphql-tag'

export const GET_USER = gql`
{ 
  user (id: $id) {
    id
    name
    email
  }
}
`

export const GET_ALL_USERS = gql`
{
  users {
    id
    name
    email
  }
}
`