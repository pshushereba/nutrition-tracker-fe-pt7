import { useState } from "react";

import AppLayout from "../components/AppLayout"
import LogInSVG from '../components/svg/LogInSVG'
import withApollo from '../lib/apollo'
import CreateProfileForm from "../components/form/CreateProfileForm"
import Cookie from 'js-cookie'

const CreateProfile = () => {
  const [user, setUser] = useState({})  

  const cookie = Cookie.get('token')
//   console.log(cookie)

  return (
    <AppLayout>
      <CreateProfileForm user={user} setUser={setUser}/>
      <LogInSVG />
    </AppLayout>
  );
};

export default withApollo(CreateProfile)
