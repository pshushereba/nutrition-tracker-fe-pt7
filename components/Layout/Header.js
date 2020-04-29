import { useRouter } from "next/router";
import Cookie from "next-cookies";
import cookies from "js-cookie";
import { Spacer } from "./LayoutPrimitives";
import DashNav from "./DashNav";
import { removeCookies } from "../../lib/utils";

const Header = () => {
  const router = useRouter();
  const onHome = router.asPath === "/";
  const onLogin = router.asPath === "/login";
  const onSignup = router.asPath === "/signup";
  const creatingProfile = router.asPath === "/createProfile";
  const inOnboarding = onHome || onLogin || onSignup || creatingProfile;
  const token = Cookie("*").api_token !== undefined;

  return (
    <div className="flex w-full p-4 bg-gray-10">
      <h1
        className="w-1/3 text-3xl font-semibold pl-16 cursor-pointer"
        onClick={() => router.push("/")}
      >
        Nutrivurv
      </h1>
      {!inOnboarding ? (
        <>
          <DashNav />
          <span className="flex w-1/3 text-lg justify-end items-center">
            <ul className="flex  pr-32">
              <li
                className="py-2 px-8 cursor-pointer"
                onClick={() => router.push("/user/settings")}
              >
                Settings
              </li>
              <li
                className="py-2 px-8 cursor-pointer"
                onClick={() => {
                  removeCookies(cookies, ["auth0_token", "api_token"]);
                  router.push("/api/logout");
                }}
              >
                Sign Out
              </li>
            </ul>
          </span>
        </>
      ) : (
        <>
          <Spacer />
          <span className="flex w-1/3 text-lg justify-end items-center">
            <ul className="flex  pr-32">
              <li
                className="py-2 px-8 cursor-pointer"
                onClick={() => router.push("/api/login")}
              >
                Sign In
              </li>
              {token ? (
                <li
                  className="py-2 px-8 cursor-pointer"
                  onClick={() => {
                    removeCookies(cookies, ["auth0_token", "api_token"]);
                    router.push("/api/logout");
                  }}
                >
                  Sign Out
                </li>
              ) : (
                <li
                  className="py-2 px-8 cursor-pointer"
                  onClick={() => router.push("/api/login")}
                >
                  Sign Up
                </li>
              )}
            </ul>
          </span>
        </>
      )}
    </div>
  );
};

export default Header;
