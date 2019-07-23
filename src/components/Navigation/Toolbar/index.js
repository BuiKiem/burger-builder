import React from "react";

import Logo from "../../Logo";

import classes from "./Toolbar.module.css";

const toolbar = (props) => (
    <header className={classes.Toolbar}>
        <div>MENU</div>
        <Logo />
        <nav>
            ....
        </nav>
    </header>
);

export default toolbar;
