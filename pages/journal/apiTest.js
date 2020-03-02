import React from 'react'
import AppLayout from '../../components/AppLayout.js';
import IngredientSearch from '../../components/ingredients/IngredientSearch'

// Set this page up to test components for Edamam API. Can delete once everything works.

const apiTest = () => {
    return (
        <div>
            <AppLayout>
                <div className="p-6">
                    <IngredientSearch />
                </div>
            </AppLayout>
        </div>
    )
}

export default apiTest;
