import React from "react";
import PropTypes from "prop-types";

import Burger from "../../Burger";
import Button from "../../UI/Button";

import classes from "./CheckoutSummary.module.css";

const checkoutSummary = (props) => {

    return (
        <div className={classes.CheckoutSummary}>
            <h1>We hope it tastes well!!!</h1>
            <div style={{width: '100%', margin: 'auto'}}>
                <Burger ingredients={props.ingredients} />
            </div>
            <Button btnType="Danger">CANCEL</Button>
            <Button btnType="Success">CONTINUE</Button>
        </div>
    );
};

checkoutSummary.propTypes = {
    ingredients: PropTypes.object,
};

export default checkoutSummary;
