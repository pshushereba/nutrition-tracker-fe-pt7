import { useQuery } from "@apollo/react-hooks";
import { getDataFromTree } from '@apollo/react-ssr'

import withApollo from "../../lib/apollo";
import { GET_DASHNAV_STATE } from "../../gql/queries";
import Layout from "../../components/Layout/index";
import FoodSearchBox from "../../components/ingredients/FoodSearchBox";
import DailyVibe from "../../components/DailyVibe";
import DesktopFoodJournal from "../../components/foodJournal/DesktopFoodJounal";
import FoodSearchResults from "../../components/FoodSearchResults";
import Progress from "../../components/Progress/Progress.js";
import { Spacer } from "../../components/Layout/LayoutPrimitives";
import { useEffect } from "react";

const Dashboard = ({ apollo }) => {
  //Gets active dashboard component from client cache
  const { data, client } = useQuery(GET_DASHNAV_STATE);

  useEffect(() => {
    client.writeData({ data: { ...data, lowerNav: "journal", logType: "daily", mealType: "breakfast" } })
    return () => null
  }, [])

  const lowerNav = data ? data.lowerNav : "journal" // gets the label for the component to render 
  
  return (
    <div>
      <Layout>
        <div className="flex my-10">
          <DailyVibe />
          <Spacer />
          <div className="w-3/12 mt-2 mr-40">
            <FoodSearchBox />
          </div>
        </div>
        <div className="ml-20 mr-40">
          {lowerNav === "journal" ? (
            <DesktopFoodJournal />
          ) : lowerNav === "progress" ? (
            <Progress />
          ) : lowerNav === "badges" ? (
            "Badges"
          ) : lowerNav === "challenges" ? (
            "Challenges"
          ) : lowerNav === "searchResults" ? (
            <FoodSearchResults />
          ) : (
            "Error"
          )}
        </div>
      </Layout>
    </div>
  );
};

export default withApollo(Dashboard, { getDataFromTree });
