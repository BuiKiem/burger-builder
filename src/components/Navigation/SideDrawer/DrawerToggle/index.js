import React from "react";
import PropTypes from "prop-types";

const drawerToggle = (props) => (
    <div onClick={props.click}>MENU</div>
);

drawerToggle.propTypes = {
    click: PropTypes.func,
};

export default drawerToggle;
