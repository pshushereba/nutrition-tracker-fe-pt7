import React, { useState } from "react";
import FullHeartSVG from "../svg/FullHeartSVG.js";
import HeartOutlineSVG from "../svg/HeartOutlineSVG.js";
import { CenteredContainer, Spacer } from "../Layout/LayoutPrimitives.js";

const DashboardChartItem = ({ data,toggleFav }) => {
  const [item, setItem] = useState(data);
  
  const { calories, fat, protein, carbs, food_string } = item;

  const { quantity, measure, food, favorite, loggedQty } = JSON.parse(food_string);

  return (
    <div className="w-full flex border-b border-r">
      <div className="flex w-5/12 items-center">
        <div className="w-1/12 border-r border-purple-100">
          <CenteredContainer>
            <i
              className="cursor-pointer"
              onClick={() => setItem(toggleFav(item))}
            >
              {favorite ? <FullHeartSVG /> : <HeartOutlineSVG />}
            </i>
          </CenteredContainer>
        </div>
        <div className="flex w-11/12 pl-3 items-center">{`${loggedQty ? loggedQty : quantity} ${measure} ${food}`}</div>
      </div>
      <div className="flex w-7/12 justify-center items-center">
        <div className="w-1/6 text-sm text-center">{calories}</div>
        <div className="w-1/6 text-sm text-center">{fat}g</div>
        <div className="w-1/6 text-sm text-center">{protein}g</div>
        <div className="w-1/6 text-sm text-center">{carbs}g</div>
        <Spacer />
        <div className="flex w-1/3 pr-2 py-2">
          <div className="w-1/3"></div>
          <div className="w-1/3 text-xs text-right cursor-pointer">edit</div>
          <div className="w-1/3 text-xs text-right cursor-pointer">delete</div>
        </div>
      </div>
    </div>
  );
};

export default DashboardChartItem;
