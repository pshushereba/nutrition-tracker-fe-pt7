import { useRouter } from "next/router";
import { Spacer } from "./LayoutPrimitives";

const Header = () => {
  const router = useRouter();
  const onHome = router.asPath === "/";
  const onLogin = router.asPath === "/login";
  const onSignup = router.asPath === "/signup";
  const creatingProfile = router.asPath === "/createProfile";
  const inOnboarding = onHome || onLogin || onSignup || creatingProfile;
  console.log(inOnboarding);

  return (
    <div className="flex w-full p-4 bg-gray-10">
      <h1
        className="flex-1 text-3xl font-semibold pl-20 cursor-pointer"
        onClick={() => router.push("/")}
      >
        Nutrivurv
      </h1>
      {!inOnboarding && (
        <span className="flex flex-1 justify-center">
          <ul className="flex items-center">
            <a className="px-5">Log Food +</a>
            <a className="px-5">Settings</a>
            <a className="px-5 cursor-pointer">Sign Out</a>
          </ul>
        </span>
      )}
      {inOnboarding && (
        <span className="">
          <ul className="flex  pr-40">
            <li
              className="py-2 px-8 cursor-pointer"
              onClick={() => router.push("/login")}
            >
              Sign In
            </li>
            <li
              className="py-2 px-8 cursor-pointer"
              onClick={() => router.push("/signup")}
            >
              Sign Up
            </li>
          </ul>
        </span>
      )}
    </div>
  );
};

export default Header;
