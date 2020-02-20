import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";
import withApollo from "../lib/apollo";
import { getDataFromTree } from "@apollo/react-ssr";

export const GET_ALL_USERS = gql`
  query {
    users {
      id
      name
      email
    }
  }
`;

function User() {
  const { loading, error, data } = useQuery(GET_ALL_USERS);

  if (error) {
    console.log("error block", error);
    return <ErrorMessage message="Error loading posts." />;
  }
  if (loading) {
    console.log("loading block", data.users);
    return <div>loading ...</div>;
  }

  const names = data.users.map(({ id, name }) => <li key={id}>{name}</li>);

  return <ul>{names}</ul>;
}

// export default withApollo(User);
export default withApollo(User, { getDataFromTree });
