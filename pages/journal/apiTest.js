import React from 'react'
import AppLayout from '../../components/AppLayout.js';
import NutritionData from '../../components/NutritionData.js';

const apiTest = () => {
    return (
        <div>
            <AppLayout>
                <div className="p-6">
                    <NutritionData />
                </div>
            </AppLayout>
            
        </div>
    )
}

export default apiTest;
