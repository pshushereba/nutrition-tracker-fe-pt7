import { useQuery } from "@apollo/react-hooks";

import withApollo from "../lib/apollo";
import { GET_ALL_USERS } from "../gql/queries";
import Layout from "../components/Layout";
import UserCard from "../components/UserCard";

function AllUsers(props) {
  const {
    loading,
    error,
    data: { users }
  } = useQuery(GET_ALL_USERS);

  if (loading) return <div>Loading ...</div>;
  if (error) return <div>Error: {error}</div>;

  const allUsers = users.map(({ id, name, email }) => {
    return <UserCard id={id} name={name} email={email} />;
  });

  return <Layout>{users && allUsers}</Layout>;
}
export default withApollo(AllUsers);
