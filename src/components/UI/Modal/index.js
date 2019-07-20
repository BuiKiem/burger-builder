import React from "react";

import classes from "./Modal.module.css";
import PropTypes from "prop-types";

const modal = (props) => (
    <div
        className={classes.Modal}
        style={{
            transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
            opacity: props.show ? '1' : '0',
        }}
    >
        {props.children}
    </div>
);

modal.propTypes = {
    show: PropTypes.bool.isRequired,
};

export default modal;
