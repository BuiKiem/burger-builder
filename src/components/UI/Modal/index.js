import React from "react";
import PropTypes from "prop-types";

import classes from "./Modal.module.css";
import Aux from "../../../hoc/Aux/Aux";
import Backdrop from "../Backdrop";

const modal = (props) => (
    <Aux>
        <Backdrop show={props.show} clicked={props.close}/>
        <div
            className={classes.Modal}
            style={{
                transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
                opacity: props.show ? '1' : '0',
            }}
        >
            {props.children}
        </div>
    </Aux>
);

modal.propTypes = {
    show: PropTypes.bool,
    close: PropTypes.func,
};

const areEqual = (prevProps, nextProps) => {
    return !nextProps.show && prevProps.children === nextProps.children;
};

export default React.memo(modal, areEqual);
