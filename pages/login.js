import React, { useState } from "react";
import Router from "next/router";
import Cookie from "js-cookie";
import { useMutation } from "@apollo/react-hooks";

import Layout from "../components/Layout.js";
import LogInSVG from '../components/svg/LogInSVG';
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
    <Layout>
      <div className="mt-8 w-64 h-64 p-3 flex-col">
        <h1 className="p-4 text-center">Sign In</h1>
        <p className="pb-8 text-center">Let's Start Crushing Those Goals!</p>
        <Form className="flex-col">
          <div className="py-2">
            <Input
              type="text"
              name="email"
              placeholder="Email"
              onChange={handleChange}
            ></Input>
          </div>
          <div className="pb-2">
            <Input
              type="password"
              name="password"
              placeholder="Password"
              onChange={handleChange}
            ></Input>
          </div>
          <Button type="primary" onClick={handleSubmit}>Login</Button>
          <h3 className="py-2">Don't have an account?</h3>
          <Button>Sign Up</Button>
        </Form>
      </div>
      <div className="mt-8">
        <LogInSVG />
      </div>
    </Layout>
  );
};

export default withApollo(Login);
