import { useQuery } from "@apollo/react-hooks";

import withApollo from "../lib/apollo";
import { GET_ALL_USERS } from "../gql/queries";
import AppLayout from "../components/AppLayout";
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

  return (
  
  <AppLayout>
    <button onClick={handleClick}>run query</button>
    {users && allUsers}
  </AppLayout>);
}
export default withApollo(AllUsers);
