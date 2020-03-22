import { useQuery } from "@apollo/react-hooks";
import { useState } from "react";

import withApollo from "../../lib/apollo";
import { ME } from "../../gql/queries";
import Layout from "../../components/Layout/index";
import FoodSearchBox from "../../components/ingredients/FoodSearchBox";
import DashUser from "../../components/DashUser";
import DailyVibe from "../../components/DailyVibe";
import DesktopFoodJournal from "../../components/foodJournal/DesktopFoodJounal";
import FoodSearchResults from "../../components/FoodSearchResults";
import Progress from "../../components/Progress/Progress.js";

const Dashboard = () => {
  const [activeControl, setActiveControl] = useState("journal"); //Sets which component is rendered on the lower half of dash
  const [searchResults, setSearchResults] = useState(); //Sets search results returned from FoodSearchBox
  const { loading, error, data } = useQuery(ME); //Gets logged in user

  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;

  const currentDate = new Date(Date.now()); //Sets date for lower dash nav, format does not match UX design

  return (
    <div>
      <Layout>
        <div className="flex">
          <DashUser data={data} />
          <div className="flex-1"></div>
          <div className="flex-1 px-32 self-center">
            <FoodSearchBox
              setSearchResults={setSearchResults}
              setActiveControl={setActiveControl}
            />
          </div>
        </div>
        <nav className="flex bg-mobileFoot">
          <div className="flex-1"></div>
          <ul className="flex-1 flex justify-around text-lg font-medium py-2">
            <li
              className={`${
                activeControl === "journal" ? "border-b-2 border-pink-500" : ""
              } cursor-pointer`}
              onClick={() => setActiveControl("journal")}
            >
              Food Journal
            </li>
            <li
              className={`${
                activeControl === "progress" ? "border-b-2 border-pink-500" : ""
              } cursor-pointer`}
              onClick={() => setActiveControl("progress")}
            >
              Progress
            </li>
            <li
              className={`${
                activeControl === "badges" ? "border-b-2 border-pink-500" : ""
              } cursor-pointer`}
              onClick={() => setActiveControl("badges")}
            >
              Badges
            </li>
            <li
              className={`${
                activeControl === "challenges"
                  ? "border-b-2 border-pink-500"
                  : ""
              } cursor-pointer`}
              onClick={() => setActiveControl("challenges")}
            >
              Challenges
            </li>
          </ul>
          <span className="flex flex-1 text-sm justify-end items-center">
            {/* Needs reformatting */}
            <time className="pr-32">{currentDate.toLocaleDateString()}</time>
          </span>
        </nav>
        <div className="flex py-4">
          <DailyVibe />
          <div className="flex-1"></div>
          <div className="border border-black mr-32 ml-6">Macro Charts</div>
        </div>
        <div className="ml-20 mr-32">
          {/* Replace strings with corresponding components */}
          {activeControl === "journal" ? (
            <DesktopFoodJournal />
          ) : activeControl === "progress" ? (
            <Progress />
          ) : activeControl === "badges" ? (
            "Badges"
          ) : activeControl === "challenges" ? (
            "Challenges"
          ) : activeControl === "searchResults" ? (
            <FoodSearchResults searchResults={searchResults} />
          ) : (
            "Error"
          )}
        </div>
      </Layout>
    </div>
  );
};

export default withApollo(Dashboard);
