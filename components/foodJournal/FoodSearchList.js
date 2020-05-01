import { useQuery } from "@apollo/react-hooks";

import SearchResultsCard from "./SearchResultCard";
import { GET_SEARCH_RESULTS } from "../../gql/queries";

export default function FoodSearchList({ setNutrInfo }) {
  const { data } = useQuery(GET_SEARCH_RESULTS);
  const results = JSON.parse(data.searchResults);

  const cardList = () => {
    let keyOrder = 0;
    return results.map((item) => {
      keyOrder++;
      return (
        <SearchResultsCard
          key={`${item.food.foodId} ${keyOrder}`}
          item={item}
          setNutrInfo={setNutrInfo}
        />
      );
    });
  };

  return (
    <div className="flex flex-col w-1/2">
      {results.length > 0 ? (
        <div className="flex pb-4 justify-around text-lg border-b border-gray-300">
          <p className="w-1/6 mx-4">Food Item</p>
          <p className="w-1/6 mx-4">Serving Size</p>
          <p className="w-1/6 text-center">Fats %</p>
          <p className="w-1/6 text-center">Protein %</p>
          <p className="w-1/6 text-center">Carb %</p>
          <p className="w-1/6 text-center">Meal Type</p>
        </div>
      ) : (
        "No Results Found"
      )}
      {cardList()}
    </div>
  );
}
