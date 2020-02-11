import React from "react";
import { withApollo } from "../lib/apollo";
import Layout from "../components/Layout";
import BlueButton from "../components/Button/BlueButton";

const Home = () => (
  <Layout>
    <h1 className="block text-5xl font-bold text-blue-700">Home Page</h1>
    <BlueButton text="Test Button" />
  </Layout>
);

export default withApollo()(Home);
