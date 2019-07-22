import React from "react";
import PropTypes from "prop-types";

import Aux from "../../../hoc/Aux";
import Button from "../../UI/Button";

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
            <p>Total Price: {props.totalPrice}</p>
            <p>Continue to Checkout</p>
            <Button btnType="Danger" clicked={props.cancelHandler}>CANCEL</Button>
            <Button btnType="Success" clicked={props.continueHandler}>CONTINUE</Button>
        </Aux>
    );
};

orderSummary.propTypes = {
    ingredients: PropTypes.object.isRequired,
    cancelHandler: PropTypes.func,
    continueHandler: PropTypes.func,
    totalPrice: PropTypes.number,
};

export default orderSummary;
