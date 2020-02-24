import Layout from "../components/Layout";
import SplashSVG from "../components/svg/SplahSVG";

const Home = () => {
  return (
    <Layout>
      <h1 className="my-6 font-black text-gray-900 text-xl">NUTRITION TRACKER</h1>
      <h2 className="font-extrabold text-lg" >Tracking your calories just got easier.</h2>
      <div className="m-8">
        <SplashSVG />
      </div>
      <p className="leading-none text-sm" >Connect with freinds, earn badges</p>
      <p className="leading-none text-sm" >and crush your goals</p>
      <div className="flex flex-col min-w-full" >
        <button 
          className="min-w-full py-3 border rounded-md bg-indigo-500 my-8 hover:bg-indigo-600"
        >
          <a 
            className="text-white"
            href="/login"
          >
            Sign In
          </a>
        </button>
        <button
          className="min-w-full py-3 border-solid border-2 border-indigo-500 rounded-md hover:bg-indigo-600"
        >
          <a
            className="text-indigo-500"
          >
            Sign Up
          </a>
        </button>
      </div>
    </Layout>
  );
};

export default Home;
