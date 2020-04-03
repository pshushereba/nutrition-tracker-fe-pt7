import { useQuery } from "@apollo/react-hooks";

import NutritionFacts from "./NutritionFacts";
import PhoneManBigSVG from "./svg/PhoneManBigSVG";
import FoodSearchList from "./FoodSearchList";
import { GET_NUTRITION } from "../gql/queries";

export default function FoodSearchResults({ searchResults, setActiveControl }) {
  const { data, client } = useQuery(GET_NUTRITION);

  const nutrition = data
    ? data.nutritionInfo
    : client.cache.data.data.data.nutritionInfo;

  const svg = (
    <div className="flex flex-col mt-40">
      <PhoneManBigSVG />
    </div>
  );

  return (
    <section className="flex flex-1">
      <FoodSearchList />
      <div className="Flex w-1/2"></div>
      <div className="w-1/2 max-h flex">
        <div className="flex-1"></div>
        {data ? (
          <NutritionFacts
            nutrition={JSON.parse(nutrition)}
            setActiveControl={setActiveControl}
          />
        ) : (
          svg
        )}
        <div className="flex-1"></div>
      </div>
    </section>
  );
}