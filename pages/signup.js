import { useState, useEffect } from "react"

import CreateUserForm from "../components/form/CreateUserForm"
import LogInSVG from '../components/svg/LogInSVG'
import withApollo from '../lib/apollo'
import Layout from '../components/Layout/index.js';

const SignUp = () => {
  const [user, setUser] = useState({})  

  return (
    <Layout>
      <CreateUserForm user={user} setUser={setUser}/>
      <LogInSVG />
    </Layout>
  );
};

export default withApollo(SignUp)
