import React from 'react';
import MealItem from './meal'
import { getMeals } from '@/lib/database/utils';


const Grid  = async () => {
    const meals = await getMeals();
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {meals.map((meal) => (
                <MealItem key={meal.id} meal={meal} />
            ))}
        </div>
    )
}

export default Grid