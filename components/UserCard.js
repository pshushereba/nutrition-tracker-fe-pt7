const UserCard = ({ id, name, email }) => {
  return (
    <>
      <ul className="mb-10">
        <li className="leading-9">Id: {id}</li>
        <li className="leading-9 text-purple-900">Name: {name}</li>
        <li className="leading-9">Email: {email}</li>
      </ul>
    </>
  );
};

export default UserCard;
