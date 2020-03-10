import { useMutation } from '@apollo/react-hooks'
import Cookie from 'js-cookie'
import { useRouter } from 'next/router'

import FormInput from "./FormInput";
import {ADD_USER } from '../../gql/mutations'
import ThunderboltSVG from '../svg/ThunderboltSVG';

export default function({ user, setUser }) {

  const Router = useRouter()
  
  const variables = {
    name: user.name,
    email: user.email,
    password: user.password
  };

  const [addUser, {}] = useMutation(ADD_USER);
  
  const handleSubmit = async () => {

    const {
      data: {
        createUser: {
          token,
          user
        }
      },
      error
    } = await addUser({ variables: variables });
    //TODO: Proper error handling
    if (error) { 
      window.alert(`ERROR: ${error}`)
    }
    if (user) {
      Cookie.set("token", token);
      Cookie.set("name", user.name);
      Router.push('/createProfile')
    }

  };


  return (
    <>
      <div className="flex mt-2">
        <ThunderboltSVG />
        <h2 className="text-xl font-extrabold my-4">Sign Up</h2>
      </div>
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
          required={true}
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
      <button className="w-full mt-4 py-2 text-white bg-pink-500 rounded hover:bg-pink-600" onClick={handleSubmit}>Let's Go</button>
      <p className="mt-8 -mb-12">
        Already a member? <a className="text-gray-900 font-semibold" href="/signin">Sign In</a>
      </p>
    </>
  );
}
