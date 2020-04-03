import gql from "graphql-tag";

export const GET_USER = gql`
  {
    user {
      id
      name
      email
    }
  }
`;

export const GET_ALL_USERS = gql`
  {
    users {
      id
      name
      email
    }
  }
`;

export const ME = gql`
  {
    me {
      id
      name
      email
      profile {
        id
        age
        weight
        height
        gender
        goal_weight
        activity_level
        diet
        fat
        carbs
        protein
        calories
      }
      dailyRecords {
        id
        date
        calories
        fat
        carbs
        fiber
        protein
        food_string
        meal_type
      }
      weightLogs {
        id
        current_weight
      }
    }
  }
`;

export const USER_DASH_HEADER = gql`
  {
    me {
      id
      name
      profile {
        id
        weight
        gender
      }
    }
  }
`;

export const GET_FOOD_LOG = gql`
  {
    myDailyRecords {
      id
      date
      calories
      fat
      carbs
      fiber
      protein
      food_string
      meal_type
    }
  }
`;

export const GET_DASHBOARD_STATE = gql`
  {
    lowerNav @client
  }
`;

export const GET_SEARCH_RESULTS = gql`
  {
    searchResults @client
  }
`;
export const GET_NUTRITION = gql`
  {
    nutritionInfo @client
    lowerNav @client
  }
`;
