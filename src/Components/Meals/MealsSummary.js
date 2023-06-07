import React from 'react'
import classes from './MealsSummary.module.css';
const MealsSummary=()=> {
  return (
    <div className={classes.summary}>
        <h2>Delicious Burger, Delivered to you</h2>
        <p>
        Choose your favorite Burger from our broad selection of available meals
        and enjoy a delicious Burger at home.
        </p>
        <p>
        All our meals are cooked with high-quality ingredients, just-in-time and
        of course by experienced chefs! 
        </p>
    </div>
  )
}

export default MealsSummary