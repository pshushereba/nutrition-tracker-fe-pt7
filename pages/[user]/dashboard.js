import React from 'react';
import AppLayout from '../../components/AppLayout.js';
import DashFoodSearch from '../../components/ingredients/DashFoodSearch'


const Dashboard = () => {
    return (
        <AppLayout>
            <div className="flex w-full justify-around pt-6">
                <div className="mt-8">
                    <div className="h-16 w-16 border-2 border-gray-900 rounded-full"></div>
                    <div className="">
                        Calories
                    </div>
                </div>
                <div className="mb-8">
                    <div className="h-16 w-16 border-2 border-gray-900 rounded-full"></div>
                    <div className="">
                        UserName
                    </div>
                </div>
                <div className="mt-8">
                    <div className="h-16 w-16 border-2 border-gray-900 rounded-full "></div>
                    <div className="">
                        Streak
                    </div>
                </div>
            </div>
            <div className="container-md flex justify-center my-4">
                <DashFoodSearch />
            </div>
            <div className=" border rounded-lg shadow-xl mt-2">
                <div className="flex justify-center rounded w-auto mt-3">
                    <span className="px-8 py-1 bg-gray-300 rounded text-sm hover:bg-purple-500 hover:text-white hover:z-auto">
                        Dash
                    </span>
                    <span className="px-8 py-1 bg-gray-300 rounded text-sm hover:bg-purple-500 hover:text-white hover:z-auto -ml-1 -mr-1">
                        Daily Food
                    </span>
                    <span className="px-8 py-1 bg-gray-300 rounded text-sm hover:bg-purple-500 hover:text-white hover:z-auto">
                        Weight
                    </span>
                </div>
                <div className="flex flex-col my-6 px-4">
                    <h2 className="text-2xl">
                        Daily Vibe
                    </h2>
                    <p className="text-base text-gray-500 mb-2">
                        Nothing worth having is going to be easy.
                    </p>
                    <hr />
                </div>
                <div className="px-2">
                    <div className="flex flex-wrap ">
                        <div className="w-1/2 border-2 p-2 h-32 rounded-lg bg-purple-600 flex flex-col justify-between text-white">
                             <div className="">
                                 MenuIcon
                             </div>
                             <div className="">
                                 Food Journal
                             </div>
                             <div className="">
                                 2 logged
                             </div>
                        </div>
                        <div className="w-1/2 border-2 p-2 h-32 rounded-lg bg-purple-600 flex flex-col justify-between text-white">
                             <div className="">
                                 MenuIcon
                             </div>
                             <div className="">
                                 Food Journal
                             </div>
                             <div className="">
                                 2 logged
                             </div>
                        </div>
                        <div className="w-1/2 border-2 p-2 h-32 rounded-lg bg-purple-600 flex flex-col justify-between text-white">
                             <div className="">
                                 MenuIcon
                             </div>
                             <div className="">
                                 Food Journal
                             </div>
                             <div className="">
                                 2 logged
                             </div>
                        </div>
                        <div className="w-1/2 border-2 p-2 h-32 rounded-lg bg-purple-600 flex flex-col justify-between text-white">
                             <div className="">
                                 MenuIcon
                             </div>
                             <div className="">
                                 Food Journal
                             </div>
                             <div className="">
                                 2 logged
                             </div>
                        </div>
                    </div>
                </div>
            </div>
        </AppLayout>
    )
}

export default Dashboard;