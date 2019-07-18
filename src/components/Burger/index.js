import React from "react";
import classes from "./Burger.module.css";
import BurgerIngredient from "./BurgerIngredient";

const burger = (props) => {
    const burgerIngredientsArray = Object.keys(props.ingredients)
        .map(key =>
            ([...Array(props.ingredients[key])]
                .map((_, i) => (<BurgerIngredient key={key + i} type={key} />))
            )
        );

    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top"/>
            {burgerIngredientsArray}
            <BurgerIngredient type="bread-bottom"/>
        </div>
    );
};

export default burger;
