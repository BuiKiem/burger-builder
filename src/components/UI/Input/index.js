import React from "react";
import PropTypes from "prop-types";

import classes from "./Input.module.css";

const input = (props) => {
    let inputJSX = null;

    switch (props.elementType) {
        case ("input"):
            inputJSX = <input {...props.elementConfig} className={classes.InputElement} value={props.value} />;
            break;
        case ("textarea"):
            inputJSX = <textarea {...props.elementConfig} className={classes.InputElement} value={props.value} />
            break;
        default:
            inputJSX = <input {...props.elementConfig} className={classes.InputElement} value={props.value} />
    }

    return (
        <div className={classes.Input}>
            <label htmlFor="" className={classes.Label}>{props.label}</label>
            {inputJSX}
        </div>
    );
};

input.propTypes = {
    inputType: PropTypes.string,
}

export default input;
