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
      weightLogs {
        current_weight
        id
      }
      myWeightLogs(orderBy: createdAt_DESC, first: 1) {
        id
        current_weight
      }
    }
  }
`;

export const USER_DASH_HEADER = gql`
  {
    me {
      name
      profile {
        weight
        gender
      }
      weightLogs {
        date
        current_weight
        id
      }
    }
  }
`;

export const GET_PROGRESS_DATA = gql`
  {
    myDailyRecords {
      date
    }
    me {
      profile {
        goal_weight
        weight
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

export const GET_FOODJOURNAL_LOGS = gql`
  query getFoodJournalLogs{
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
    mealType @client
  }
`;

export const GET_DASHNAV_STATE = gql`
  {
    lowerNav @client
  }
`;

export const GET_MEAL_TYPE = gql`
  {
    mealType @client
  }
`;

export const GET_OPEN_LOG_STATE = gql`
  {
    logType @client
    mealType @client
  }
`;

export const GET_LOG_TYPE_STATE = gql`
  {
    logType @client
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

export const GET_FORUM_SELECTION_STATE = gql`
  {
    activeCat @client
  }
`;

export const GET_LAST_WEIGHT_LOG = gql`
  {
    me {
      profile {
        weight
      }
    }
    myWeightLogs(orderBy: createdAt_DESC, first: 1) {
      id
      current_weight
    }
  }
`;

export const GET_WEIGHT_LOGS = gql`
  {
    myWeightLogs(orderBy: date_DESC) {
      date
      current_weight
      id
    }
    me {
      name
      profile {
        gender
        goal_weight
      }
    }
  }
`;

export const GET_FORUM_TOPICS = gql`
	{
    posts {
      body
      id
      comments {
        id
        user_id
        body
      }
      user {
        id
        name
        email
      }
      viewCount
      title
      createdAt
      updatedAt
  }
    me {
      id
      name
    }
	}
`;

export const GET_POST_COMMENTS = gql`
{
  comments {
    id
    user_id
    user {
      id
      name
    }
    updatedAt
    likeCount
    body
		post {
      id
    }
  }
}
`

export const GET_POST_DETAILS = gql`
query getPost($id: String!) {
  post(
    id: $id
  ) {
    id
    body
    title
    user {
      id
      name
    }
    user_id
    comments {
      id
      user {
        id
        name
      }
      body
    }
    viewCount
    likeCount
  }
  me {
      name
    }
}
`