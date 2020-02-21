import React, { useState } from "react";
import Router from "next/router";
import Cookie from "js-cookie";
import { useMutation } from "@apollo/react-hooks";

import Layout from "../components/Layout.js";
import withApollo from "../lib/apollo";
import { LOG_IN } from "../gql/mutations";

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
    // const user = name;
    Router.push(`/allUsersSample`);
  };

  return (
    <Layout>
      <div>
        <form className="flex-col" onSubmit={handleSubmit}>
          <input
            type="text"
            name="email"
            placeholder="Email"
            onChange={handleChange}
          ></input>
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
          ></input>
          <button>Login</button>
        </form>
      </div>
    </Layout>
  );
};

<style jsx>{`
  .form-container {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`}</style>;

export default withApollo(Login);
