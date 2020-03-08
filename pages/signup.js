import { useState, useEffect } from "react"

import AppLayout from "../components/AppLayout"
import CreateUserForm from "../components/form/CreateUserForm"
import LogInSVG from '../components/svg/LogInSVG'
import withApollo from '../lib/apollo'
import CreateProfileForm from "../components/form/CreateProfileForm"

const SignUp = () => {
  const [formStep, setFormStep] = useState("createProfile")
  const [user, setUser] = useState({})  

  return (
    <AppLayout>
      {formStep === "createUser" ? 
      <CreateUserForm setFormStep={setFormStep} user={user} setUser={setUser}/>
      : formStep === "createProfile" ? 
      <CreateProfileForm  setFormStep={setFormStep} user={user} setUser={setUser}/>
      : "error"  //TODO: Proper error handling or default. Will using either component as default lead to bugs?
      }
      <LogInSVG />
    </AppLayout>
  );
};

export default withApollo(SignUp)
