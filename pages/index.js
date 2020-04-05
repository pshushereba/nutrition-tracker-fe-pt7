import Layout from "../components/Layout/index";
import SplashSVG from "../components/svg/SplahSVG";
import { CenteredContainer } from "../components/Layout/LayoutPrimitives";
import { useRouter } from "next/router";

const Home = () => {
  const router = useRouter();

  return (
    <Layout>
      <CenteredContainer extraClasses={"h-full"}>
        <section className="flex">
          <div className="flex flex-col w-1/3 mt-16">
            <h1 className=" font-semibold leading-10 text-4xl text-gray-700">Tracking your calories just got easier.</h1>
            <p className="text-2xl py-8">Connect with friends, earn badges and crush your goals</p>
            <button className="bg-pink-400 rounded text-white py-3 w-full hover:bg-pink-500 mb-8" onClick={() => router.push("/signup")}>Sign In</button>
            <button className="border border-pink-400 rounded text-pink-400 py-3 w-full" onClick={() => router.push("/login")}>Sign In</button>
          </div>
          <CenteredContainer extraClasses={`p-20 w-2/3 mt-20 ml-20`}>
            <SplashSVG />
          </CenteredContainer>
        </section>
      </CenteredContainer>
    </Layout>
  );
};

export default Home;