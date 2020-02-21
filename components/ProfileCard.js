import { GET_USER } from "../gql/queries";
import { useQuery } from "@apollo/react-hooks";
import Cookie from "js-cookie";

import UserCard from "./ProfileCard";

const ProfileCard = () => {
  const userId = Cookie.get("id");

  const { loading, error, data } = useQuery(GET_USER, {
    variables: { id: userId }
  });

  if (loading) return <div>Loading ...</div>;
  if (error) return <div>Error: </div>;

  const { id, name, email } = data.user;

  return (
    <UserCard id={user.id} name={user.name} email={user.email} />
    // <div>someone please help</div>
  );
};

export default ProfileCard;
