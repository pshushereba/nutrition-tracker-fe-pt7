import Layout from "../components/Layout";

const Home = () => {

  return (
    <Layout>
      <h1 className="block text-5xl font-bold text-blue-700 mb-10">Home Page</h1>
      <a
        className="block text-2xl bg-blue-400 font-bold text-white border-2 px-4 py-2 rounded"
        href="/login">
        Log In
      </a>
    </Layout>
  )
}

export default Home;
