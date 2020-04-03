import { useQuery } from "@apollo/react-hooks";
import { useState, useEffect } from "react";

import withApollo from "../../lib/apollo";
import { GET_DASHBOARD_STATE } from "../../gql/queries";
import Layout from "../../components/Layout/index";
import FoodSearchBox from "../../components/ingredients/FoodSearchBox";
import DashUser from "../../components/DashUser";
import DailyVibe from "../../components/DailyVibe";
import DesktopFoodJournal from "../../components/foodJournal/DesktopFoodJounal";
import FoodSearchResults from "../../components/FoodSearchResults";
import Progress from "../../components/Progress/Progress.js";
import WeightInput from "../../components/WeightInput";
import LowerNav from "../../components/LowerNav";

const Dashboard = ({ apollo }) => {
  const [activeControl, setActiveControl] = useState("journal"); //Sets which component is rendered on the lower half of dash
  const [searchResults, setSearchResults] = useState(); //Sets search results returned from FoodSearchBox
  const { data, client } = useQuery(GET_DASHBOARD_STATE); //Gets active dashboard component from client cache

  const lowerNav = data ? data.lowerNav : apollo.cache.data.data.data.lowerNav; // gets the label for the component to render from the client instance passed in props the first render, and from useQuery after that

  const lowerNavDate = () => {
    //  Sets date for lower dash nav, format does not match UX design
    const dateOptions = { year: "numeric", month: "long", day: "numeric" };
    const currentDate = new Date(Date.now());
    return currentDate.toLocaleString("en-US", dateOptions);
  };

  useEffect(() => {
    data && console.log("dashboard.js useEffect: data=", data);
  }, [data]);

  return (
    <div>
      <Layout>
        <div className="flex">
          <DashUser />
          <div className="flex-1"></div>
          <div className="flex-1 px-32 self-center">
            <FoodSearchBox />
          </div>
        </div>
        <LowerNav />
        <div className="flex py-4">
          <DailyVibe />
          <div className="flex-1"></div>
          <WeightInput />
        </div>
        <div className="ml-20 mr-32">
          {lowerNav === "journal" ? (
            <DesktopFoodJournal />
          ) : lowerNav === "progress" ? (
            <Progress />
          ) : lowerNav === "badges" ? (
            "Badges"
          ) : lowerNav === "challenges" ? (
            "Challenges"
          ) : lowerNav === "searchResults" ? (
            <FoodSearchResults
              searchResults={searchResults}
              setActiveControl={setActiveControl}
            />
          ) : (
            "Error"
          )}
        </div>
      </Layout>
    </div>
  );
};

export default withApollo(Dashboard);
