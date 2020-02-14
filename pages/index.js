import React from "react";
import { withApollo } from "../lib/apollo";
import Link from 'next/link'
import Layout from "../components/Layout";
import BlueButton from "../components/Button/BlueButton";
import UserCard from "../components/UserCard";

const Home = () => (
  <Layout>
    <h1 className="block text-5xl font-bold text-blue-700 mb-10">Home Page</h1>
    <a
      className="block text-2xl bg-blue-400 font-bold text-white border-2 px-4 py-2 rounded"
      href="/userSample">
      sample return values for user from server
    </a>
    <UserCard />
  </Layout>
);

export default withApollo({ ssr: true })(Home);
