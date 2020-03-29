import React, { useState } from "react";
import FullHeartSVG from "../svg/FullHeartSVG.js";
import HeartOutlineSVG from "../svg/HeartOutlineSVG.js";
import { useClient } from "../../lib/useClient.js";

const DashboardChartItem = props => {
  // used to determine if heart is full or not?
  const [fav, setFav] = useState(false);

  // this might not actually be the props, but we will get there
  const { quantity, name, calories, fats, protein, carbs, food_string, meal_type } = props.data;

  const foodItem = JSON.parse(food_string);
  console.log("In DashboardChartItem", foodItem);


  return (
    <div className={`${(meal_type !== props.activeControl) ? "hidden" : null}`}>
      <tr className="flex align-center border-gray-300 border">
        <div className="w-1/2 flex align-center">
          <div className="flex align-center justify-center w-8 border-r p-2">
            <td className="cursor-pointer"
                onClick={() => setFav(!fav)}>
              {fav ? <FullHeartSVG /> : <HeartOutlineSVG />}
            </td>
          </div>
          <div className="flex align-center p-2">
            <td>
              {quantity} {foodItem.food}
            </td>
          </div>
        </div>
        <div className="flex w-1/2 justify-around align-center p-2">
          <td>{calories}</td>
          <td>{fats}g</td>
          <td>{protein}g</td>
          <td>{carbs}g</td>
        </div>
      </tr>
    </div>
  );
};

export default DashboardChartItem;
