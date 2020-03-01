import { useEffect, useState } from 'react';
import { useMutation } from '@apollo/react-hooks'
import Cookie from 'js-cookie'

import FormInput from "../form/FormInput";
import {ADD_USER } from '../../gql/mutations'

export default function({ setFormStep, shouldSubmit, setShouldSubmit }) {
  const [user, setUser] = useState({ name: '', email: '', password: '' });

  
  const variables = {
    name: user.name,
    email: user.email,
    password: user.password
  };

  const [addUser, {}] = useMutation(ADD_USER);
  
  const handleSubmit = async () => {
    console.log(user)
    const {
      data: {
        createUser: {
          token,
          user: { id }
        }
      },
      error
    } = await addUser({ variables: variables });
    if (error) { 
      window.alert(`ERROR: ${error}`)
    }
    if (user) {
      Cookie.set("token", token);
      Cookie.set("id", id);
      setFormStep(2)
    }
  };

  useEffect(() => {
    shouldSubmit && handleSubmit()
    shouldSubmit && setShouldSubmit(false)
  }, [shouldSubmit]);

  return (
    <>
      <h2 className="text-xl font-extrabold my-4">Sign Up</h2>
      <form className="flex flex-col w-full">
        <FormInput
          name="name"
          label="Your Name"
          placeHolder="First and Last Name"
          type="text"
          required={true}
          setInput={setUser}
          data={user}
        />
        <FormInput
          name="email"
          label="E-mail"
          placeHolder="email@email.com"
          type="email"
          required={true}
          setInput={setUser}
          data={user}
        />
        <FormInput 
          name="password"
          label="Password" 
          placeHolder="password" 
          type="password"
          setInput={setUser}
          data={user}
        />
        <FormInput
          label="Verify Password"
          placeHolder="password"
          type="password"
          required={true}
          setInput={setUser}
          data={user}
        />
      </form>
      <h3 className="font-bold my-6">
        You're one step closer to achieving your goals
      </h3>
    </>
  );
}
