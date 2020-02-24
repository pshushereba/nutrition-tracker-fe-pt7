import React, { useState } from "react";
import Router from "next/router";
import Cookie from "js-cookie";
import { useMutation } from "@apollo/react-hooks";

import Layout from "../components/Layout.js";
import {Form, Input, Button} from 'antd';
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
      <div className="w-64 h-64 p-3 shadow-md flex-col">
        <h1 className="p-1 text-center">Login to your Account</h1>
        <Form className="flex-col" onSubmit={handleSubmit}>
          <Input
            type="text"
            name="email"
            placeholder="Email"
            onChange={handleChange}
          ></Input>
          <Input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
          ></Input>
          <Button type="primary">Login</Button>
          <h3 className="py-2">Don't have an account?</h3>
          <Button>Sign Up</Button>
        </Form>
      </div>
    </Layout>
  );
};

export default withApollo(Login);
