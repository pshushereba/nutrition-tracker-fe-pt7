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
    <div className="flex w-full bg-gray-10">
      <div className="w-1/3 pl-16 flex">
        <div className="w-20 h-14 pr-2">
          <svg
            className="w-full h-full"
            viewBox="0 0 738 398"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M326.482 278.527C320.772 224.446 316.366 286.027 297.982 286.027C284.759 286.027 283.154 278.838 279.482 306.527L254.306 321.527L140.044 212.905V346.36C140.044 349.674 137.358 352.36 134.044 352.36H76.6328C73.3191 352.36 70.6328 349.674 70.6328 346.36V130.896C70.6328 121.498 73.2668 113.739 78.5348 107.626C83.8028 101.512 91.2878 98.4531 101.001 98.4531C113.599 98.4531 125.272 103.515 136.016 113.635L266.782 238.26V104.453C266.782 101.139 269.468 98.4531 272.782 98.4531H330.193C333.507 98.4531 336.193 101.143 336.193 104.457C336.193 170.102 336.193 213.988 336.193 271.527C336.193 273.018 332.482 270.518 332.482 272.027C327.772 270.027 326.482 262.909 326.482 278.527Z"
              fill="#363537"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M557.522 356.233C544.711 356.233 532.113 346.609 519.717 327.356L429.808 187.238C428.644 185.424 428.551 183.128 429.512 181.199C442.917 154.304 446.667 129.132 437.967 108.301C436.122 103.884 439.094 98.4531 443.881 98.4531H455.686C457.739 98.4531 459.65 99.5029 460.751 101.236L553.712 247.569C556.065 251.273 561.468 251.28 563.832 247.583L657.392 101.222C658.495 99.4968 660.4 98.4531 662.447 98.4531H727.022C729.082 98.4531 731.009 99.5038 732.053 101.279C733.401 103.57 734.692 105.953 735.928 108.424C736.861 110.289 736.694 112.506 735.549 114.249L595.327 327.709C582.931 346.725 570.328 356.233 557.522 356.233Z"
              fill="#1F7DA2"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M402.239 58.92C402.239 58.92 379.207 54.113 378.066 58.92C376.925 63.725 373.915 63.345 371.665 58.92C369.731 55.113 350.526 52.929 351.365 58.92C346.589 61.061 342.876 68.512 349.811 74.119C460.102 163.283 237.881 381.986 0 397.164C310.474 378.29 501.508 154.151 402.239 58.92Z"
              fill="#00426C"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M402.536 62.0005C402.536 68.8675 396.969 74.4345 390.101 74.4345C383.233 74.4345 377.666 68.8675 377.666 62.0005C377.666 55.1325 383.233 49.5645 390.101 49.5645C396.969 49.5645 402.536 55.1325 402.536 62.0005Z"
              fill="#00426C"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M368.943 31.4939C368.943 37.3119 364.226 42.0269 358.41 42.0269C352.593 42.0269 347.877 37.3119 347.877 31.4939C347.877 25.6769 352.593 20.9609 358.41 20.9609C364.226 20.9609 368.943 25.6769 368.943 31.4939Z"
              fill="#00426C"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M346.589 50.3695C346.589 57.5365 340.779 63.3455 333.616 63.3455C326.448 63.3455 320.639 57.5365 320.639 50.3695C320.639 43.2045 326.448 37.3945 333.616 37.3945C340.779 37.3945 346.589 43.2045 346.589 50.3695Z"
              fill="#00426C"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M372.742 64.2054C372.742 71.7144 366.654 77.8004 359.148 77.8004C351.639 77.8004 345.551 71.7144 345.551 64.2054C345.551 56.6964 351.639 50.6094 359.148 50.6094C366.654 50.6094 372.742 56.6964 372.742 64.2054Z"
              fill="#00426C"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M383.587 37.1298C383.587 40.0738 381.202 42.4588 378.258 42.4588C375.314 42.4588 372.928 40.0738 372.928 37.1298C372.928 34.1868 375.314 31.8008 378.258 31.8008C381.202 31.8008 383.587 34.1868 383.587 37.1298Z"
              fill="#00426C"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M318.45 34.6785C318.45 35.2035 318.397 35.7165 318.296 36.2135C317.586 39.6835 314.515 42.2935 310.835 42.2935C306.628 42.2935 303.219 38.8835 303.219 34.6785C303.219 30.4715 306.628 27.0625 310.835 27.0625C315.041 27.0625 318.45 30.4715 318.45 34.6785Z"
              fill="#00426C"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M325.556 16.998C325.556 19.941 323.17 22.326 320.227 22.326C317.283 22.326 314.898 19.941 314.898 16.998C314.898 14.054 317.283 11.668 320.227 11.668C323.17 11.668 325.556 14.054 325.556 16.998Z"
              fill="#00426C"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M342.136 26.4706C342.136 29.4136 339.75 31.7996 336.806 31.7996C333.863 31.7996 331.477 29.4136 331.477 26.4706C331.477 23.5266 333.863 21.1406 336.806 21.1406C339.75 21.1406 342.136 23.5266 342.136 26.4706Z"
              fill="#00426C"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M228.268 3.465C228.268 5.379 226.716 6.93 224.803 6.93C222.89 6.93 221.338 5.379 221.338 3.465C221.338 1.551 222.89 0 224.803 0C226.716 0 228.268 1.551 228.268 3.465Z"
              fill="#00426C"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M304.78 15.8132C304.78 20.3632 301.091 24.0522 296.541 24.0522C291.99 24.0522 288.301 20.3632 288.301 15.8132C288.301 11.2632 291.99 7.57422 296.541 7.57422C301.091 7.57422 304.78 11.2632 304.78 15.8132Z"
              fill="#00426C"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M251.891 12.259C251.891 15.071 249.612 17.35 246.8 17.35C243.989 17.35 241.709 15.071 241.709 12.259C241.709 9.44797 243.989 7.16797 246.8 7.16797C249.612 7.16797 251.891 9.44797 251.891 12.259Z"
              fill="#00426C"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M200.614 3.87156C200.614 5.12556 199.597 6.14156 198.343 6.14156C197.09 6.14156 196.074 5.12556 196.074 3.87156C196.074 2.61756 197.09 1.60156 198.343 1.60156C199.597 1.60156 200.614 2.61756 200.614 3.87156Z"
              fill="#00426C"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M327.542 38.9057C323.04 40.9277 318.876 41.0117 318.297 36.2147C317.718 31.4157 306.098 42.0547 310.836 42.2947C315.572 42.5347 320.639 45.2307 320.668 51.0017C320.691 55.5067 331.478 37.1357 327.542 38.9057Z"
              fill="#00426C"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M317.436 12.4614C312.954 15.1804 306.606 12.8004 302.818 10.4824C296.738 11.6664 298.848 25.5664 301.973 21.9944C305.552 17.9044 311.495 16.9574 316.878 21.1404C317.581 17.7454 318.709 14.6704 317.436 12.4614Z"
              fill="#00426C"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M261.645 1.48306C263.124 0.0980583 265.446 0.174058 266.832 1.65406C268.217 3.13406 268.142 5.45506 266.662 6.84106C265.184 8.22606 262.861 8.15106 261.476 6.67006C260.09 5.19206 260.166 2.86906 261.645 1.48306Z"
              fill="#00426C"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M270.829 12.4814C273.116 10.3394 276.705 10.4584 278.848 12.7434C280.989 15.0314 280.872 18.6204 278.585 20.7634C276.298 22.9044 272.706 22.7864 270.567 20.5004C268.423 18.2134 268.543 14.6224 270.829 12.4814Z"
              fill="#00426C"
            />
          </svg>
        </div>
        <h1
          className="text-2xl font-medium cursor-pointer self-center pt-1"
          onClick={() => router.push("/")}
        >
          Nutrivurv
        </h1>
      </div>
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
