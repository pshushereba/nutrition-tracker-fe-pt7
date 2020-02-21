import React, { useState } from 'react';
import Router from 'next/router'
import Cookie from 'js-cookie'
import gql from 'graphql-tag';
import { useMutation } from '@apollo/react-hooks';

import Layout from '../components/Layout.js';
import withApollo from '../lib/apollo'


const Login = () => {
  const [thisUser, setThisUser] = useState("")

  const handleChange = (e) => {
    setThisUser({ ...thisUser, [e.target.name]: e.target.value })
  }

  const variables = {
    email: thisUser.email,
    password: thisUser.password
  }

  const LOG_IN = gql`  
    mutation LogIn($email: String!, $password: String!) {
      login (
        data: {
          email: $email,
          password: $password
        }
      ) {
        token
        user {
          id
          name

        }
      }
    }
  `
  const [login, { data }] = useMutation(LOG_IN)


  const handleSubmit = async (e) => {
    e.preventDefault();
    const {
      data: {
        login: {
          token,
          user: {
            name
          }
        }
      }
    } = await login({ variables: variables })

    Cookie.set('user', { token, id })
    console.log(token)
    const user = name
    Router.push(`/${user}/profile`)
  }

  return (
    // <Layout>
      <div>
        <form className="flex-col" onSubmit={handleSubmit}>
          <input
            type="text"
            name="email"
            placeholder="Email"
            onChange={handleChange}></input>
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}></input>
          <button>Login</button>
        </form>
      </div>
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

export default withApollo(Login)