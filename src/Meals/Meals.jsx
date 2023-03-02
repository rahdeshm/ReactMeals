import React from 'react'
import AvailableMeals from './AvailableMeals'
import MealsSummary from './MealsSummary'
const Meals = () => {
  return (
    <div style={{'marginBottom':'40px'}}>
        <MealsSummary/>
        <AvailableMeals/>
    </div>
  )
}

export default Meals