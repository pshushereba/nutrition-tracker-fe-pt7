import { useQuery } from "@apollo/react-hooks";

import withApollo from "../../lib/apollo";
import { GET_DASHBOARD_STATE } from "../../gql/queries";
import Layout from "../../components/Layout/index";
import FoodSearchBox from "../../components/ingredients/FoodSearchBox";
import DailyVibe from "../../components/DailyVibe";
import DesktopFoodJournal from "../../components/foodJournal/DesktopFoodJounal";
import FoodSearchResults from "../../components/FoodSearchResults";
import Progress from "../../components/Progress/Progress.js";
import { Spacer } from "../../components/Layout/LayoutPrimitives";

const Dashboard = ({ apollo }) => {
  //Gets active dashboard component from client cache
  const { data } = useQuery(GET_DASHBOARD_STATE);

  const lowerNav = data ? data.lowerNav : apollo.cache.data.data.data.lowerNav; // gets the label for the component to render from the client instance passed in props the first render, and from useQuery after that

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

export default withApollo(Dashboard);
