import gql from 'graphql-tag'

export const GET_USER = gql`
{
  user (id: "ck6efrv4l000y0718emgsattc") {
    id
    name
    email
  }
}
`