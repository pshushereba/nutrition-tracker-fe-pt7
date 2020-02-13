import React, {useState} from 'react';
import Layout from '../components/Layout.js';
// import fetch from 'isomorphic-unfetch';

import { request } from 'graphql-request';
import useSWR from 'swr';

const API = 'https://labspt7-nutrition-tracker-be.herokuapp.com'

const Login = (props) => {
    const [user, setUser] = useState("")
    console.log(user);

    const variables = {
        email: user.email,
        password: user.password
    }

    const handleChange = (e) => {
        setUser({...user, [e.target.name]: e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault();
           const query = `mutation loginUser($email: String!, $password: String!) {
                login(
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
            }`
           request(API, query, variables)
            .then((res) => {
               console.log(res);
           })
           .catch((err) => console.log(err))
    }

    return (
        <Layout>
        <div className="form-container">
            <form onSubmit={handleSubmit}>
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
        </Layout>
    )
}

<style jsx>{`
    .form-container {
        display: flex;
        justify-content: center;
        align-items: center;
    }
`}</style>

export default Login;