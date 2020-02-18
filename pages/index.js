import { useState, useEffect } from "react";
import withApollo from "../lib/apollo";
import Layout from "../components/Layout";
import UserCard from "../components/UserCard";

const Home = () => {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, []);

  return (
    <Layout>
      <h1 className="block text-5xl font-bold text-blue-700 mb-10">Home Page</h1>
      <a
        className="block text-2xl bg-blue-400 font-bold text-white border-2 px-4 py-2 rounded"
        href="/userSample">
        sample return values for user from server
      </a>
      <a
        className="block text-2xl bg-blue-400 font-bold text-white border-2 px-4 py-2 rounded"
        href="/login">
        Log In
      </a>
      <UserCard />
    </Layout>
  )
}

// Home.getInitialProps = ctx => [
// console.log('ctx', ctx.req.headers)
// ]

export default withApollo(Home);
