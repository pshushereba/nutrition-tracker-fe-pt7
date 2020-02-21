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
