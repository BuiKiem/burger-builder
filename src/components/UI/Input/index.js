import React from "react";
import PropTypes from "prop-types";

import classes from "./Input.module.css";

const input = (props) => {
    let inputJSX = null;

    switch (props.inputType) {
        case ("input"):
            inputJSX = <input {...props} className={classes.InputElement} />;
            break;
        case ("textarea"):
            inputJSX = <textarea {...props} className={classes.InputElement} />
            break;
        default:
            inputJSX = <input {...props} className={classes.InputElement} />
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
