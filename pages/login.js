import React, { useState } from "react";
import { useRouter } from "next/router";
import Cookie from "js-cookie";
import { useMutation } from "@apollo/react-hooks";
import ThunderboltSVG from "../components/svg/ThunderboltSVG.js";

import LogInSVG from "../components/svg/LogInSVG";
import withApollo from "../lib/apollo";
import { LOG_IN } from "../gql/mutations";
import Layout from "../components/Layout/index.js";

const Login = () => {
  const [thisUser, setThisUser] = useState("");
  const Router = useRouter();

  const handleChange = (e) => {
    setThisUser({ ...thisUser, [e.target.name]: e.target.value });
  };

  const variables = {
    email: thisUser.email,
    password: thisUser.password,
  };

  const [login, {}] = useMutation(LOG_IN);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const {
      data: {
        login: {
          token,
          user: { id, name },
        },
      },
    } = await login({ variables: variables });

    Cookie.set("token", token);
    Cookie.set("id", id);
    const nameWithoutWhitespace = (name) => name.trim().split(" ").join("");
    Router.push(
      "/[user]/dashboard",
      `/${nameWithoutWhitespace(name)}/dashboard`
    );
  };

  return (
    <Layout>
      <div className="mt-8 w-64 h-64 p-3 flex-col">
        <div className="flex justify-center align-middle">
          <ThunderboltSVG />
          <h1 className="p-4 text-center text-2xl muli">Sign In</h1>
        </div>
        <p className="pb-8 text-center">Let's Start Crushing Those Goals!</p>
        <form className="flex-col">
          <div className="pb-2">
            <div className="flex flex-col my-2">
              <div className="-mb-3 z-0 pl-2">
                <label className="text-xs bg-white p-1">Email</label>
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
                <label className="text-xs bg-white p-1">Password</label>
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
        <button
          className="text-xs text-white w-full px-6 py-1 bg-btn-pink border-btn-pink rounded relative"
          onClick={handleSubmit}
        >
          Let's Go!
        </button>
        <h3 className="py-2 text-center">
          Not a member?
          <span className="mx-1 font-semibold">
            <a className="text-black" href="/signup">
              Sign Up
            </a>
          </span>
        </h3>
      </div>
      <div className="mt-16">
        <LogInSVG />
      </div>
    </Layout>
  );
};

export default withApollo(Login);