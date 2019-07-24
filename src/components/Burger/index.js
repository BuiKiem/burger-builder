import React from "react";
import PropTypes from "prop-types";

import classes from "./Burger.module.css";
import BurgerIngredient from "./BurgerIngredient";

const burger = (props) => {
    let burgerIngredientsArray = Object.keys(props.ingredients)
        .map(key =>
            ([...Array(props.ingredients[key])]
                .map((_, i) => (<BurgerIngredient key={key + i} type={key} />))
            )
        )
        .reduce((array, element) => array.concat(element), []);

    if (burgerIngredientsArray.length === 0) {
        burgerIngredientsArray = <p>Please start adding ingredients!!!</p>
    }

    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top"/>
            {burgerIngredientsArray}
            <BurgerIngredient type="bread-bottom"/>
        </div>
    );
};

burger.propTypes = {
    ingredients: PropTypes.object,
};

export default burger;
