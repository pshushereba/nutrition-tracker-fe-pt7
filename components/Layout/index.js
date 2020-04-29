import Footer from "../Footer";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Header from "../Layout/Header";
import DailyVibe from "../DailyVibe";
import DonutGraph from "../graphs/DonutGraph";
import FoodSearchBox from "../ingredients/FoodSearchBox";

export default ({ children }) => {
  const [hideFooter, setHideFooter] = useState(false);
  const Router = useRouter();

  useEffect(() => {
    const frameWidth = window.innerWidth;
    Router.pathname === "/createProfile" &&
      frameWidth <= 500 &&
      setHideFooter(true);
    Router.pathname === "/signup" && frameWidth <= 500 && setHideFooter(true);
    Router.pathname === "/login" && frameWidth <= 500 && setHideFooter(true);
    Router.pathname === "/" && frameWidth <= 500 && setHideFooter(true);
  }, []);

  return (
    <div className="flex flex-col h-screen">
      <Header />
      <div className="flex flex-col flex-1">
        <div className="flex my-10">
          <DailyVibe />
          <DonutGraph />
          <div className="w-3/12 mt-2 mr-40">
            <FoodSearchBox />
          </div>
        </div>
        {children}
      </div>
      {!hideFooter && <Footer />}
    </div>
  );
};
