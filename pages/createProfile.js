import { useState } from "react";
import Cookie from 'js-cookie'

import AgeGenderHeight from '../components/form/AgeGenderHeight';
import DietPreference from '../components/form/DietPreference';
import Macros from '../components/form/Macros';
import WeightGoalWeight from '../components/form/WeightGoalWeight';
import ActivityLevel from '../components/form/ActivityLevel';
import AppLayout from "../components/AppLayout"
import LogInSVG from '../components/svg/LogInSVG'
import withApollo from '../lib/apollo'

const CreateProfile = () => {
  const [user, setUser] = useState({})  
  const [profileStep, setProfileStep] = useState("ageGenderHeight");
  console.log("In CreateProfile", user);
  const cookie = Cookie.get('token')

  return (
    <AppLayout>
      <div className="flex flex-col w-full">
        {profileStep ==="ageGenderHeight" ? (
        <AgeGenderHeight user={user} setUser={setUser} setProfileStep={setProfileStep}/>
        ) : profileStep ==="weightGoalWeight" ? (
        <WeightGoalWeight user={user} setUser={setUser} setProfileStep={setProfileStep}/>
        ) : profileStep === "activityLevel" ? (
        <ActivityLevel user={user} setUser={setUser} setProfileStep={setProfileStep}/>
        ) : profileStep === "dietPreferences" ? (
        <DietPreference user={user} setUser={setUser} setProfileStep={setProfileStep}/>
        ) : profileStep === "macros" ? (
        <Macros user={user} setUser={setUser}/>
        ) : "Error"   //TODO: Proper error handling or default. Will using AgeGender or HeightWeight as default lead to bugs?
        }
      </div>
      <LogInSVG />
    </AppLayout>
  );
};

export default withApollo(CreateProfile)


// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJjazhlMDhmaTIwMGQyMDcyOGd3NGtkZ2I1IiwiaWF0IjoxNTg1NTQ0NDYwLCJleHAiOjE1ODYxNDkyNjB9.Db-F9dBY7rKy2tP4gWQotNczjocmlu8I8wgMoZsGy24