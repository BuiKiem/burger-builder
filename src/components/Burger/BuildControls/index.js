import React from "react";
import PropTypes from "prop-types";

import BuildControl from "./BuildControl";
import classes from "./BuildControls.module.css";

const controls = [
    {label: 'Salad', type: 'salad'},
    {label: 'Bacon', type: 'bacon'},
    {label: 'Cheese', type: 'cheese'},
    {label: 'Meat', type: 'meat'},
];

const buildControls = (props) => (
    <div className={classes.BuildControls}>
        <p>Current Price: <strong>{props.price.toFixed(2)}</strong></p>
        {controls.map(control =>
            <BuildControl
                key={control.label} label={control.label}
                addIngredient={() => props.addIngredient(control.type)}
                removeIngredient={() => props.removeIngredient(control.type)}
                disabled={props.disabled[control.type]}
            />)
        }
        <button className={classes.OrderButton}>ORDER NOW</button>
    </div>
);

buildControls.propTypes = {
    addIngredient: PropTypes.func.isRequired,
    removeIngredient: PropTypes.func.isRequired,
    disabled: PropTypes.object.isRequired,
    price: PropTypes.number.isRequired,
};

export default buildControls;
