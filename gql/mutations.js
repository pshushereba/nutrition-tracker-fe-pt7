import gql from "graphql-tag";

export const LOG_IN = gql`
  mutation LogIn($email: String!, $password: String!) {
    login(data: { email: $email, password: $password }) {
      token
      user {
        id
        name
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation ADD_USER($name: String!, $email: String!, $password: String!) {
  createUser (
    data: {
      name: $name,
      email: $email,
      password: $password
    }
  ) {
    token
    user {
      id
      name
      email
    }
  }
}
`
