import React from "react";
import {NavLink} from "react-router-dom";
import PropTypes from "prop-types";

import classes from "./Item.module.css"

const item = (props) => (
    <li key={props.children} className={classes.NavigationItem}>
        <NavLink activeClassName={classes.active} exact={props.exact} to={props.link}>{props.children}</NavLink>
    </li>
);

item.propTypes = {
    link: PropTypes.string,
    children: PropTypes.node,
};

export default item;
