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

export const CREATE_PROFILE = gql`
mutation CREATE_PROFILE(
    $age: Int!, 
    $weight: Int!, 
    $height: Int!, 
    $gender: Boolean,
    $goal_weight: Int,
    $activity_level: Int,
    $fat: Int,
    $carbs: Int,
    $protein: Int
) {
  createProfile (
    data: {
			age: $age,
      weight: $weight,
      height: $height,
      gender: $gender,
      goal_weight: $goal_weight,
      activity_level: $activity_level,
      fat: $fat,
      carbs: $carbs,
      protein: $protein
    }
  ) {
  	id
    age
    weight
    height
    gender
	}
}
`
