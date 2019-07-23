import React from "react";
import PropTypes from "prop-types";

import classes from "./DrawerToggle.module.css";

const drawerToggle = (props) => (
    <div onClick={props.click} className={classes.DrawerToggle} >
        <div />
        <div />
        <div />
    </div>
);

drawerToggle.propTypes = {
    click: PropTypes.func,
};

export default drawerToggle;
