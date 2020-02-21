import { useQuery } from "@apollo/react-hooks";

import withApollo from "../lib/apollo";
import { GET_ALL_USERS } from "../gql/queries";
import Layout from "../components/Layout";
import UserCard from "../components/UserCard";

function AllUsers(props) {
  const {
    loading,
    error,
    data
  } = useQuery(GET_ALL_USERS);

  if (loading) return <div>Loading ...</div>;
  if (error) return <div>Error: {error}</div>;

  const users = data.users

  const allUsers = users.map(({ id, name, email }) => {
    return <UserCard key={id} id={id} name={name} email={email} />;
  });

  return <Layout>{users && allUsers}</Layout>;
}
export default withApollo(AllUsers);
