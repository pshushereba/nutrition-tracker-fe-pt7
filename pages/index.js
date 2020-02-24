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
      <p className="leading-3 text-sm font-light" >Connect with freinds, earn badges</p>
      <p className="leading-3 text-sm font-light" >and crush your goals</p>
      <div className="flex flex-col min-w-full" >
        <button 
          className="min-w-full py-3 border-app-primary rounded-md bg-app-primary my-8 hover:bg-indigo-600"
        >
          <a 
            className="text-myText-white"
            href="/login"
          >
            Sign In
          </a>
        </button>
        <button
          className="min-w-full py-3 border-solid border-2 border-app-primary rounded-md hover:bg-indigo-600"
        >
          <a
            className="text-app-primary"
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
