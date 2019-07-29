import React from "react";
import PropTypes from "prop-types";

import classes from "./Input.module.css";

const input = (props) => {
    let inputJSX = null;

    const inputElementClasses = [classes.InputElement];
    if (props.invalid && props.shouldValidate && props.touched) inputElementClasses.push(classes.Invalid);

    switch (props.elementType) {
        case ("input"):
            inputJSX = <input {...props.elementConfig} className={inputElementClasses.join(' ')} value={props.value} onChange={props.onChange} />;
            break;
        case ("textarea"):
            inputJSX = <textarea {...props.elementConfig} className={inputElementClasses.join(' ')} value={props.value} onChange={props.onChange} />
            break;
        case ("select"):
            inputJSX = (
                <select className={inputElementClasses.join(' ')} value={props.value} onChange={props.onChange}>
                    {props.elementConfig.options.map((option) => <option key={option.value} value={option.value}>{option.display}</option>)}
                </select>
            )
            break;
        default:
            inputJSX = <input {...props.elementConfig} className={inputElementClasses.join(' ')} value={props.value} onChange={props.onChange} />
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
    invalid: PropTypes.bool,
    shouldValidate: PropTypes.bool,
    touched: PropTypes.bool,
}

export default input;
