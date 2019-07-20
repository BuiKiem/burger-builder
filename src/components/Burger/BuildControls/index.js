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
        {controls.map(control =>
            <BuildControl
                key={control.label} label={control.label}
                addIngredient={() => props.addIngredient(control.type)}
                removeIngredient={() => props.removeIngredient(control.type)}
                disabled={props.disabled[control.type]}
            />)
        }
    </div>
);

buildControls.propTypes = {
    addIngredient: PropTypes.func.isRequired,
    removeIngredient: PropTypes.func.isRequired,
    disabled: PropTypes.object.isRequired,
};

export default buildControls;
