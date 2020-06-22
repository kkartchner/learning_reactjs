import React from 'react';

import classes from './Burger.module.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {
    let burgerIngredients = props.ingredients.map((val, i) => {
        return <BurgerIngredient key={i+ "_" + val} type={val} />
    });
    if (burgerIngredients.length === 0){
        burgerIngredients = <p>Please start adding ingredients! (From bottom to top)</p>
    }
    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top" />
            {burgerIngredients}
            <BurgerIngredient type="bread-bottom" />
        </div>
    )
}

export default burger;