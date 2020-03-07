import { useState } from 'react';
import { useMutation } from '@apollo/react-hooks'

import { CREATE_PROFILE } from '../../gql/mutations'
import AgeGender from './AgeGender';
import DietPreference from './DietPreference';
import Macros from './Macros';
import HeightWeight from './HeightWeight';
import { useRouter } from 'next/router';

export default function CreateProfileForm({ setFormStep, user, setUser}) {
  const [profileStep, setProfileStep] = useState("ageGender")

  const router = useRouter()

  const nameWithoutWhitespace = name => name.trim().split(' ').join('')
  
  const variables = {
    age: parseInt(user.age),
    weight: parseInt(user.weight),
    height: parseInt(user.height),
    gender: !!user.gender  // <-- Temporary hack to make form work
  };

  const [createProfile, {}] = useMutation(CREATE_PROFILE)  
  
  const handleSubmit = async () => {
    // TODO: Needs to also update user w/profile id after successful createProfile
    
    const {
      loading,
      data,
      error
    } = await createProfile({ variables: variables })

    if (error) { 
    }

    if (data) {
      router.push('/[user]/dashboard', `/${nameWithoutWhitespace(user.name)}/dashboard`)  
    }
  }

  return (
    <>
      <div className="flex flex-col w-full">
        {profileStep ==="ageGender" ? (
          <AgeGender user={user} setUser={setUser} setProfileStep={setProfileStep}/>
          ) : profileStep === "dietPreferences" ? (
          <DietPreference user={user} setUser={setUser} setProfileStep={setProfileStep}/>
          ) : profileStep === "macros" ? (
          <Macros user={user} setUser={setUser} setProfileStep={setProfileStep}/>
          ) : profileStep === "heightWeight" ? (
          <HeightWeight user={user} setUser={setUser} setProfileStep={setProfileStep} handleSubmit={handleSubmit}/>
          ) : "Error"   //TODO: Proper error handling or default. Will using AgeGender or HeightWeight as default lead to bugs?
        }
      </div>
    </>
  );
}