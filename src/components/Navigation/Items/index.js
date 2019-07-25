import React from "react";

import Item from "./Item";

import classes from "./Items.module.css";

const items = (props) => (
    <ul className={classes.NavigationItems}>
        <Item link="/" exact>Burger Builder</Item>
        <Item link="/orders" >Order</Item>
    </ul>
);

export default items;
