import React from "react";
import PropTypes from "prop-types";

import classes from "./Input.module.css";

const input = (props) => {
    let inputJSX = null;

    switch (props.elementType) {
        case ("input"):
            inputJSX = <input {...props.elementConfig} className={classes.InputElement} value={props.value} onChange={props.onChange} />;
            break;
        case ("textarea"):
            inputJSX = <textarea {...props.elementConfig} className={classes.InputElement} value={props.value} onChange={props.onChange} />
            break;
        case ("select"):
            inputJSX = (
                <select className={classes.InputElement} value={props.value} onChange={props.onChange}>
                    {props.elementConfig.options.map((option) => <option key={option.value} value={option.value}>{option.display}</option>)}
                </select>
            )
            break;
        default:
            inputJSX = <input {...props.elementConfig} className={classes.InputElement} value={props.value} onChange={props.onChange} />
    }

    return (
        <div className={classes.Input}>
            <label htmlFor="" className={classes.Label}>{props.label}</label>
            {inputJSX}
        </div>
    );
};

input.propTypes = {
    elementType: PropTypes.string,
}

export default input;
