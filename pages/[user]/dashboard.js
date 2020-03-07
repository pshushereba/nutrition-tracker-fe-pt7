import React from 'react';
import AppLayout from '../../components/AppLayout.js';
import IngredientSearch from '../../components/ingredients/IngredientSearch.js';


const Dashboard = () => {
    return (
        <div className="bg-soft-gray">
            <AppLayout />
            <div className="container-md flex justify-center my-4">
                <IngredientSearch />
            </div>
            
        </div>
    )
}

export default Dashboard;