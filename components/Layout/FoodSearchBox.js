import { useState } from "react";
import { useQuery } from "@apollo/react-hooks";

import { foodDbSearch } from "../../lib/edamam.js";
import { GET_SEARCH_RESULTS } from "../../gql/queries.js";

export default function FoodSearchBox() {
  const [item, setItem] = useState("");
  //  Pull in the client so result data can be written to the cache
  const { data, client } = useQuery(GET_SEARCH_RESULTS); 

  const handleChange = (e) => {
    setItem(e.target.value);
  };

  // Format the entered food item for the API call
  const query = item.replace(" ", "%20"); 

  const handleSubmit = async (e) => {
    e.preventDefault();
    //  Hit the foodDB API
    const list = await foodDbSearch(query);
    // Change the needed data to a string
    const searchResults = JSON.stringify(list.hints);
    // Reset the input
    setItem("");
    // Write the searchResults to the cache, change the dash component to search results
    client.writeData({
      data: {
        ...data,
        journalComponent: "searchResults",
        searchResults: searchResults,
      },
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        className="w-full border border-gray-200 rounded focus:border-item-hover_lucero_78
         py-2 px-4"
        type="text"
        placeholder="Search Food Item"
        name="food"
        onChange={handleChange}
      />
    </form>
  );
}
