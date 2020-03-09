import { useState } from 'react';

import AgeGenderHeight from './AgeGenderHeight';
import DietPreference from './DietPreference';
import Macros from './Macros';
import WeightGoalWeight from './WeightGoalWeight';
import ActivityLevel from './ActivityLevel';

export default function CreateProfileForm({ setFormStep, user, setUser}) {
  const [profileStep, setProfileStep] = useState("ageGenderHeight")

  return (
    <>
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
          <Macros user={user} setUser={setUser} setProfileStep={setProfileStep}/>
          ) : "Error"   //TODO: Proper error handling or default. Will using AgeGender or HeightWeight as default lead to bugs?
        }
      </div>
    </>
  );
}