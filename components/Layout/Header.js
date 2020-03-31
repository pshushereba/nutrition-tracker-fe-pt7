import { useRouter } from "next/router";
import { Spacer } from "./LaytoutPrimitives";

const Header = () => {
  const router = useRouter();
  console.log(router.asPath);
  const isSignUp = router.asPath === "/signup";

  return (
    <div className="flex w-full p-4 bg-gray-10">
      <h1 className="flex-1 text-2xl font-medium pl-20">Nutrivurv</h1>
      {!isSignUp && (
        <span className="flex flex-1 justify-center">
          <ul className="flex items-center">
            <a className="px-5">Log Food +</a>
            <a className="px-5">Settings</a>
            <a className="px-5 cursor-pointer">Sign Out</a>
          </ul>
        </span>
      )}
      {/* <Spacer /> */}
      {isSignUp && (
        <span className="">
          <ul className="flex  pr-40">
            <li className="py-2 px-8">Sign In</li>
            <li className="py-2 px-8">Sign Up</li>
          </ul>
        </span>
      )}
    </div>
  );
};

export default Header;

// Header.getInitialProps = async ctx => {
//   const
// }
