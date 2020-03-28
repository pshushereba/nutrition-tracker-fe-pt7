import Layout from '../components/Layout/index'
import SplashSVG from "../components/svg/SplahSVG";
import Layout from '../components/Layout/index.js';

const Home = () => {
  return (
    <Layout>
      <h1 className="title my-6 font-black text-gray-900 text-xl">NUTRITION TRACKER</h1>
      <h2 className="font-black text-base tracking-tight" >Tracking your calories just got easier.</h2>
      <div className="m-8">
        <SplashSVG />
      </div>
      <p className="leading-3 text-sm font-light py-2" >Connect with freinds, earn badges</p>
      <p className="leading-3 text-sm font-light" >and crush your goals</p>
      <div className="flex flex-col min-w-full" >
        <button 
          className="min-w-full py-3 border-indigo-500 rounded-md bg-indigo-500 my-8 hover:bg-indigo-600"
        >
          <a 
            className="text-white"
            href="/login"
          >
            Sign In
          </a>
        </button>
        <button
          className="min-w-full py-3 border-solid border-2 border-indigo-500 rounded-md hover:bg-indigo-500 text-white"
        >
          <a
            className="text-indigo-500 hover:text-white"
            href="/signup"
          >
            Sign Up
          </a>
        </button>
      </div>
    </Layout>
  );
};

export default Home;
