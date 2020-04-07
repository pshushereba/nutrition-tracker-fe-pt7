import { useQuery } from "@apollo/react-hooks";

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
import { Spacer } from "../../components/Layout/LayoutPrimitives";

const Dashboard = ({ apollo }) => {
  //Gets active dashboard component from client cache
  const { data, client } = useQuery(GET_DASHBOARD_STATE);

  const lowerNav = data ? data.lowerNav : apollo.cache.data.data.data.lowerNav; // gets the label for the component to render from the client instance passed in props the first render, and from useQuery after that

  return (
    <div>
      <Layout>
        <div className="flex">
          <DashUser />
          <Spacer />
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
