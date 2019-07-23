import React from "react";

import Logo from "../../Logo";
import NavigationItems from "../Items"

import classes from "./Toolbar.module.css";

const toolbar = (props) => (
    <header className={classes.Toolbar}>
        <div>MENU</div>
        <div className={classes.Logo}>
            <Logo />
        </div>
        <nav>
            <NavigationItems />
        </nav>
    </header>
);

export default toolbar;
