import React from "react";
import PropTypes from "prop-types";

import DrawerToggle from "../SideDrawer/DrawerToggle";
import Logo from "../../Logo";
import NavigationItems from "../Items"

import classes from "./Toolbar.module.css";

const toolbar = (props) => (
    <header className={classes.Toolbar}>
        <DrawerToggle click={props.clickDrawerToggle} />
        <div className={[classes.Logo, classes.DesktopOnly].join(' ')}>
            <Logo />
        </div>
        <nav className={classes.DesktopOnly}>
            <NavigationItems />
        </nav>
    </header>
);

toolbar.propTypes = {
    clickDrawerToggle: PropTypes.func,
};

export default toolbar;
