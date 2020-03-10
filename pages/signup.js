import { useState, useEffect } from "react"

import AppLayout from "../components/AppLayout"
import CreateUserForm from "../components/form/CreateUserForm"
import LogInSVG from '../components/svg/LogInSVG'
import withApollo from '../lib/apollo'

const SignUp = () => {
  const [user, setUser] = useState({})  

  return (
    <AppLayout>
      <CreateUserForm user={user} setUser={setUser}/>
      <LogInSVG />
    </AppLayout>
  );
};

export default withApollo(SignUp)
