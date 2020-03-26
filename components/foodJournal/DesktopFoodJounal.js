import { useState } from "react"
import FoodLog from "./FoodLog"
import DashFoodJournalSVG from "../svg/DashFoodJournalSVG"
import WaterGirlSVG from "../svg/WayerGirlSVG"

export default function DesktopFoodJournal() {
    const [activeControl, setActiveControl] = useState("daily")

    return (
        <div className="flex-1 flex">
            <div className="flex flex-col w-full">
                <div className="flex text-lg font-medium py-2 mb-8">
                    <div 
                        className={`${activeControl === "daily" ? "border-b-4 border-pink-500" : ""} cursor-pointer mr-12`}
                        onClick={() => setActiveControl("daily")}
                    >
                        Daily Food Log
                    </div>
                    <div 
                        className={`${activeControl === "favorites" ? "border-b-4 border-pink-500" : ""} cursor-pointer mr-12`}
                        onClick={() => setActiveControl("favorites")}
                    >
                        Favorites
                    </div>
                    <div 
                        className={`${activeControl === "previous" ? "border-b-4 border-pink-500" : ""} cursor-pointer mr-12`}
                        onClick={() => setActiveControl("previous")}
                    >
                        Previous
                    </div>
                </div>
                {/* Replace strings with corresponding components */}
                { activeControl === "daily" ? (
                    <FoodLog />
                ) : activeControl === "favorites" ? (
                    "Favorites"
                ) : activeControl === "previous" ? (
                    "Previous"
                ) : "Error"}
            </div>
            <div className="flex-1"></div>
            <div className="mt-32">
                <WaterGirlSVG />
            </div>
        </div>
    )
}