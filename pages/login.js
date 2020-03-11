import React, { useState } from "react";
import Router from "next/router";
import Cookie from "js-cookie";
import { useMutation } from "@apollo/react-hooks";

import LogInSVG from '../components/svg/LogInSVG';
import withApollo from "../lib/apollo";
import { LOG_IN } from "../gql/mutations";
import AppLayout from "../components/AppLayout";

const Login = () => {
  const [thisUser, setThisUser] = useState("");

  const handleChange = e => {
    setThisUser({ ...thisUser, [e.target.name]: e.target.value });
  };
  
  const variables = {
    email: thisUser.email,
    password: thisUser.password
  };

  const [login, {}] = useMutation(LOG_IN);
  
  const handleSubmit = async e => {
    console.log("In handleSubmit");
    e.preventDefault();
    const {
      data: {
        login: {
          token,
          user: { id, name }
        }
      }
    } = await login({ variables: variables });

    Cookie.set("token", token);
    Cookie.set("id", id);
    Router.push(`/${name}/dashboard`);
  };

  return (
    <AppLayout>
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
                name="email"
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
                name="password"
                placeholder="Password"
                type="password"
                onChange={handleChange}
              />
            </div>
          </div>
        </form>
        <button className="text-xs text-white px-6 py-1 bg-indigo-500 border-indigo-500 rounded relative" onClick={handleSubmit}>Login</button>
        <h3 className="py-2">Don't have an account?</h3>
        <button className="text-black relative"><a className="text-black" href="/signup">Sign Up</a></button>
      </div>
      <div className="mt-8">
        <LogInSVG />
      </div>
    </AppLayout>
  );
};

export default withApollo(Login);