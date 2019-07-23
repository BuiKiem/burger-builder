import React from "react";
import PropTypes from "prop-types";

import classes from "./Item.module.css"

const item = (props) => (
    <li key={props.children} className={classes.NavigationItem}>
        <a href={props.link} className={props.active ? classes.active : null}>{props.children}</a>
    </li>
);

item.propTypes = {
    link: PropTypes.string,
    active: PropTypes.bool,
    children: PropTypes.node,
};

export default item;
