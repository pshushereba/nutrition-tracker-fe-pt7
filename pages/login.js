import React, { useState } from "react";
import Router from "next/router";
import Link from 'next/link';
import Cookie from "js-cookie";
import { useMutation } from "@apollo/react-hooks";

import AltLayout from "../components/AltLayout.js";
import LogInSVG from '../components/svg/LogInSVG';
import FormInput from '../components/form/FormInput.js';
import withApollo from "../lib/apollo";
import { LOG_IN } from "../gql/mutations";

const Login = () => {
  const [thisUser, setThisUser] = useState("");

  const handleChange = e => {
    setThisUser({ ...thisUser, [e.target.name]: e.target.value });
    console.log(e.target.value);
  };
  
  const variables = {
    email: thisUser.email,
    password: thisUser.password
  };

  const [login, {}] = useMutation(LOG_IN);

  const handleSubmit = async e => {
    e.preventDefault();
    console.log("In handlesubmit")
    const {
      data: {
        login: {
          token,
          user: { id }
        }
      }
    } = await login({ variables: variables });

    Cookie.set("token", token);
    Cookie.set("id", id);
    // const user = name;
    Router.push(`/allUsersSample`);
  };

  return (
    <AltLayout>
      <div className="mt-8 w-64 h-64 p-3 flex-col">
        <h1 className="p-4 text-center">Sign In</h1>
        <p className="pb-8 text-center">Let's Start Crushing Those Goals!</p>
        <form className="flex-col">
        <div className="pb-2">
            <div className="flex flex-col my-2">
              <div className="-mb-3 z-0 pl-2">
                <label className="text-xs bg-white p-1">
                  Email
                </label>
              </div>
              <input
                className="w-full border border-gray-400 rounded pl-2 py-2"
                placeholder="Email"
                type="text"
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="pb-2">
            <div className="flex flex-col my-2">
              <div className="-mb-3 z-0 pl-2">
                <label className="text-xs bg-white p-1">
                  Password
                </label>
              </div>
              <input
                className="w-full border border-gray-400 rounded pl-2 py-2"
                placeholder="Password"
                type="password"
                onChange={handleChange}
              />
            </div>
          </div>
          <button onClick={handleSubmit}>Login</button>
          <h3 className="py-2">Don't have an account?</h3>
          <button><Link href="/signup"><a>Sign Up</a></Link></button>
        </form>
      </div>
      <div className="mt-8">
        <LogInSVG />
      </div>
    </AltLayout>
  );
};

export default withApollo(Login);
