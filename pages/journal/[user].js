import { useQuery } from "@apollo/react-hooks";

import withApollo from "../../lib/apollo";
import { GET_DASHNAV_STATE } from "../../gql/queries";
import Layout from "../../components/Layout/index"
import FoodSearchBox from "../../components/ingredients/FoodSearchBox";
import DailyVibe from "../../components/DailyVibe";
import DesktopFoodJournal from "../../components/foodJournal/DesktopFoodJounal";
import FoodSearchResults from "../../components/FoodSearchResults";
import Progress from "../../components/Progress/Progress.js";
import ForumContainer from "../../components/forum/ForumContainer";
import DonutGraph from "../../components/graphs/DonutGraph";


const FoodJournal = () => {
  //Gets active dashboard component from client cache
  const { data } = useQuery(GET_DASHNAV_STATE);

  const journalComponent = data ? data.journalComponent : "log"; // gets the label for the component to render

  return (
    <div>
      <Layout>
        <div className="ml-20 mr-40">
          {journalComponent === "log" ? (
            <DesktopFoodJournal />
          ) : journalComponent === "searchResults" ? (
            <FoodSearchResults />
          ) : (
            "Error"
          )}
        </div>
      </Layout>
    </div>
  );
};

export default withApollo(FoodJournal);