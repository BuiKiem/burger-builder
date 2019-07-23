import React from "react";
import PropTypes from "prop-types";

import Aux from "../../../hoc/Aux";
import Backdrop from "../../UI/Backdrop";
import Logo from "../../Logo";
import NavigationItems from "../Items";

import classes from "./SideDrawer.module.css";

const sideDrawer = (props) => {
    const sideDrawerClasses = [classes.SideDrawer, props.show ? classes.Open : classes.Close];

    return (
        <Aux>
            <Backdrop show={props.show} clicked={props.backdropClick} />
            <div className={sideDrawerClasses.join(' ')} >
                <div className={classes.Logo}>
                    <Logo />
                </div>
                <nav>
                    <NavigationItems />
                </nav>
            </div>
        </Aux>

    );
};

sideDrawer.propTypes = {
    backdropClick: PropTypes.func.isRequired,
    show: PropTypes.bool,
};

export default sideDrawer;
