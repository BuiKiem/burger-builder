import React from "react";

import Item from "./Item";

import classes from "./Items.module.css";

const items = (props) => (
    <ul className={classes.NavigationItems}>
        <Item link="/" active >Burger Builder</Item>
        <Item link="/order" >Order</Item>
    </ul>
);

export default items;
