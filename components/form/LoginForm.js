import { useState } from "react";
import Cookie from "js-cookie";
import { useRouter } from "next/router";
import { request } from "graphql-request";

import FormInput from "./FormInput";
import { LOG_IN } from "../../gql/mutations";
import ThunderboltSVG from "../svg/ThunderboltSVG";
import { Spacer } from "../Layout/LayoutPrimitives";

/*
    This component was made obselete by the integration of Auth0.
    Should you want to deploy with out Auth0, create a /login in pages and import
    this component, and it should work out of the box, if withApollo is refactored to grab the tokens
    from the API response from the backend. This component does not use ApolloClient. 
    We had issues with getting ApolloClient to reintialize after login. This means when the queries were
    sent on page load, there were no tokens in the auth header asthe client was instantiated before
    they were set. Refactoring the back end to send and retrieve the session creds strictly from cookies
    and setting "credentials: 'include'" in ApolloClient, might resolve this.

*/

export default function () {
  const [user, setUser] = useState("");
  const Router = useRouter();

  const variables = {
    email: user.email,
    password: user.password,
  };

  const API = process.env.GRAPHQL_ENDPOINT;

  const handleSubmit = async (e) => {
    e.preventDefault();

    const existingToken = Cookie.get("token");

    if (existingToken) {
      Cookie.remove("token");
    }

    const {
      login: {
        token,
        user: { name },
      },
    } = await request(API, LOG_IN, variables);

    Cookie.set("token", token);
    Cookie.set("Authorization", `Bearer ${token}`);
    const nameWithoutWhitespace = (name) => name.trim().split(" ").join("");
    Router.push(
      "/[user]/dashboard",
      `/${nameWithoutWhitespace(name)}/dashboard`
    );
  };

  return (
    <div className="flex flex-col w-full">
      <div className="flex mt-2">
        <Spacer />
        <div className="flex flex-col justify-center pb-3">
          <ThunderboltSVG />
        </div>
        <h2 className="text-3xl font-medium my-4">Sign In</h2>
        <Spacer />
      </div>
      <div className="flex">
        <Spacer />
        <p className="text-xl mb-2">Let's start crushing those goals!</p>
        <Spacer />
      </div>
      <form className="flex flex-col w-full">
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
      </form>
      <button
        className="w-full mt-8 py-2 text-white bg-blue-400 rounded hover:bg-item-hover"
        onClick={handleSubmit}
      >
        Let's Go!
      </button>
      <div className="flex">
        <Spacer />
        <p className="mt-6 -mb-12">
          Already a member?{" "}
          <a className="text-gray-900 font-semibold" href="/signin">
            Sign In
          </a>
        </p>
        <Spacer />
      </div>
    </div>
  );
}
