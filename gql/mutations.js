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

export const UPDATE_PROFILE = gql`
mutation UPDATE_PROFILE(
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
  updateProfile (
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

export const ADD_FOOD = gql`
  mutation ADD_FOOD(
    $date: String!
    $calories: Int!
    $fat: Int!
    $carbs: Int!
    $fiber: Int!
    $protein: Int!
    $food_string: String!
    $meal_type: String!
  ) {
    createDailyRecord (
      data: {
        date: $date
        calories: $calories
        fat: $fat
        carbs: $carbs
        fiber: $fiber
        protein: $protein
        food_string: $food_string
        meal_type: $meal_type
      }
    ) {
      date
      calories
      fat
      carbs
      fiber
      protein
      food_string
      meal_type
      createdAt
    }
  }
`

export const UPDATE_FOOD_STRING = gql`
  mutation UPDATE_FOOD_STRING (
    $id: String! 
    $food_string: String!
    ) {
  updateDailyRecord (
    id: $id,
    data: {
      food_string: $food_string
    }
  ) {
    date
    calories
    fat
    carbs
    fiber
    protein
    food_string
    meal_type
    createdAt
  }
}
`
export const CREATE_WEIGHT_LOG = gql`
  mutation CREATE_WEIGHT_LOG (
  $current_weight: Int!
  $date: String!
) {
  createWeightLog(
    data: {
      current_weight: $current_weight
      date: $date
    }
  )
  {
    current_weight
    date
  }
}`

export const UPDATE_WEIGHT_LOG = gql`
mutation UPDATE_WEIGHT_LOG (
  $id: String!
  $current_weight: Int
) {
  updateWeightLog(
    id: $id
    data: {
      current_weight: $current_weight
    }
  ) {
    current_weight
  }
}
`
