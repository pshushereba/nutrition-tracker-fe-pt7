import { useState } from "react";
import FoodLog from "./FoodLog";
import PreviousLog from "./PreviousLog";
import Favorites from "./Favorites.js";
import DashFoodJournalSVG from "../svg/DashFoodJournalSVG";
import WaterGirlSVG from "../svg/WayerGirlSVG";
import { CenteredContainer } from "../Layout/LayoutPrimitives";

export default function DesktopFoodJournal() {
  const [activeControl, setActiveControl] = useState("daily");

  return (
    <div className="flex-1 flex">
      <div className="flex flex-col w-1/2">
        <div className="flex text-lg font-medium py-2 mb-8">
          <div
            className={`${
              activeControl === "daily" ? "border-b-4 border-pink-500" : ""
            } cursor-pointer mr-12`}
            onClick={() => setActiveControl("daily")}
          >
            Daily Food Log
          </div>
          <div
            className={`${
              activeControl === "favorites" ? "border-b-4 border-pink-500" : ""
            } cursor-pointer mr-12`}
            onClick={() => setActiveControl("favorites")}
          >
            Favorites
          </div>
          <div
            className={`${
              activeControl === "previous" ? "border-b-4 border-pink-500" : ""
            } cursor-pointer mr-12`}
            onClick={() => setActiveControl("previous")}
          >
            Previous
          </div>
        </div>
        {/* Replace strings with corresponding components */}
        {activeControl === "daily" ? (
          <FoodLog />
        ) : activeControl === "favorites" ? (
          <Favorites />
        ) : activeControl === "previous" ? (
          <PreviousLog />
        ) : (
          "Error"
        )}
      </div>
      <div className="flex-1"></div>
      <CenteredContainer extraClasses={`pt-20`}>
        <WaterGirlSVG />
      </CenteredContainer>
    </div>
  );
}
