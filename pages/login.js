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

<<<<<<< HEAD
    Cookie.set('user', { token, id })
    console.log(token)
    const user = name
    Router.push(`/${user}/profile`)
  }
=======
    Cookie.set("token", token);
    Cookie.set("id", id);
    console.log(token);
    const user = name;
    Router.push(`/allUsersSample`);
  };
>>>>>>> d17e1da1fc612d443d4f2990c562e1ef4cf14fd9

  return (
    // <Layout>
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
<<<<<<< HEAD
    // </Layout>
  )
}

{/* <style jsx>{`
    .form-container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`}</style> */}
=======
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
>>>>>>> d17e1da1fc612d443d4f2990c562e1ef4cf14fd9

export default withApollo(Login);
