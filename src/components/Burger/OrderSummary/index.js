import React from "react";
import PropTypes from "prop-types";

import Aux from "../../../hoc/Aux";

const orderSummary = (props) => {
    const ingredients = Object.keys(props.ingredients)
        .map(key =>
            <li>
                <span key={props.ingredients[key]}
                      style={{textTransform: 'capitalize'}}>{key}</span>: {props.ingredients[key]}
            </li>
        );
    return (
        <Aux>
            <h3>Your Order</h3>
            <p>A delicious burger with the following ingredients: </p>
            <ul>
                {ingredients}
            </ul>
            <p>Continue to Checkout</p>
        </Aux>
    );
};

orderSummary.propTypes = {
    ingredients: PropTypes.object.isRequired,
};

export default orderSummary;
