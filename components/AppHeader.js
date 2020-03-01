import { useRouter } from "next/router";

import MenuSVG from "./svg/MenuSVG";

const AppHeader = () => {
  const router = useRouter();

  return (
    <div className="flex w-full text-xl bg-gray-900 pt-8 pb-4 px-4">
      <MenuSVG />
      <div className="flex w-full justify-center">
        {/* <div className="flex">
          <a className="p-2">Home</a>
          <a className="p-2">Badges</a>
          <a className="p-2">Journal</a>
          <a className="p-2">Community</a>
        </div> */}
        <h1 className="title text-white justify-center">
          {router.pathname === "/" ? "" : "NUTRITION TRACKER"}
        </h1>
      </div>
    </div>
  );
};

export default AppHeader;
