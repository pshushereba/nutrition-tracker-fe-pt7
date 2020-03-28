import { useQuery } from "@apollo/react-hooks";
import { useState, useEffect } from "react";

import withApollo from "../../lib/apollo";
import { GET_LOWERNAV_STATE } from "../../gql/queries";
import Layout from "../../components/Layout/index";
import FoodSearchBox from "../../components/ingredients/FoodSearchBox";
import DashUser from "../../components/DashUser";
import DailyVibe from "../../components/DailyVibe";
import DesktopFoodJournal from "../../components/foodJournal/DesktopFoodJounal";
import FoodSearchResults from "../../components/FoodSearchResults";
import Progress from "../../components/Progress/Progress.js";

const Dashboard = ({ apollo }) => {
  const [activeControl, setActiveControl] = useState("journal"); //Sets which component is rendered on the lower half of dash
  const [searchResults, setSearchResults] = useState(); //Sets search results returned from FoodSearchBox
  const { data, client } = useQuery(GET_LOWERNAV_STATE); //Gets active dashboard component from client cache

  const lowerNav = data ? data.lowerNav : apollo.cache.data.data.data.lowerNav; // gets the label for the component to render from the client instance passed in props the first render, and from useQuery after that

  const lowerNavDate = () => {  //  Sets date for lower dash nav, format does not match UX design
    const dateOptions = { year: "numeric", month: "long", day: "numeric" };
    const currentDate = new Date(Date.now()); 
    return currentDate.toLocaleString("en-US", dateOptions);
  };


  return (
    <div>
      <Layout>
        <div className="flex">
          <DashUser />
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
                lowerNav === "journal" ? "border-b-2 border-pink-500" : ""
              } cursor-pointer`}
              value={"journal"}
              onClick={() => client.writeData({ data: { ...data,  lowerNav: "journal"}})}
            >
              Food Journal
            </li>
            <li
              className={`${
                lowerNav === "progress" ? "border-b-2 border-pink-500" : ""
              } cursor-pointer`}
              value={"progress"}
              onClick={() => client.writeData({ data: { ...data,  lowerNav: "progress"}})}
            >
              Progress
            </li>
            <li
              className={`${
                lowerNav === "badges" ? "border-b-2 border-pink-500" : ""
              } cursor-pointer`}
              value={"badges"}
              onClick={() => client.writeData({ data: { ...data,  lowerNav: "badges"}})}
            >
              Badges
            </li>
            <li
              className={`${
                lowerNav === "challenges"
                  ? "border-b-2 border-pink-500"
                  : ""
              } cursor-pointer`}
              value={"challenges"}
              onClick={() => client.writeData({ data: { ...data,  lowerNav: "challenges"}})}
            >
              Challenges
            </li>
          </ul>
          <span className="flex flex-1 text-sm justify-end items-center">
            <time className="pr-32">{lowerNavDate}</time>
          </span>
        </nav>
        <div className="flex py-4">
          <DailyVibe />
          <div className="flex-1"></div>
          <div className="border border-black mr-32 ml-6">Macro Charts</div>
        </div>
        <div className="ml-20 mr-32">
          {/* Replace strings with corresponding components */}
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
