import { useQuery } from "@apollo/react-hooks";

import Header from "../Layout/Header";
import DailyVibe from "./DailyVibe";
import DonutGraph from "../graphs/DonutGraph";
import FoodSearchBox from "./FoodSearchBox";
import Footer from "./Footer";
import { Spacer } from "./LayoutPrimitives";
import { GET_DASHNAV_STATE } from "../../gql/queries";

export default ({ children }) => {
  const { data } = useQuery(GET_DASHNAV_STATE);

  const inJournal = data ? data.lowerNav === "journal" : false;
  const onHomePage = data ? data.lowerNav === "homePage" : true;

  return (
    <div className="flex flex-col h-screen">
      <Header />
      <div className={`flex flex-col flex-1`}>
        <div className={`${onHomePage ? "hidden" : ""} flex my-10`}>
          <DailyVibe />
          <DonutGraph />
          {!inJournal ? (
            <Spacer />
          ) : (
            <div className="w-3/12 mt-2 mr-40">
              <FoodSearchBox />
            </div>
          )}
        </div>
        {children}
      </div>
      <Footer />
    </div>
  );
};
