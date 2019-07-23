import React, {Component} from "react";

import Aux from "../Aux/Aux";
import Toolbar from "../../components/Navigation/Toolbar";
import SideDrawer from "../../components/Navigation/SideDrawer";

import classes from "./Layout.module.css";

class Layout extends Component {

    state = {
        showSideDrawer: false,
    };

    closeSideDrawerHandler = () => {
        this.setState({showSideDrawer: false})
    };

    toggleSideDrawerHandler = () => {
        this.setState((prevState) => ({showSideDrawer: !prevState.showSideDrawer}))
    };

    render() {
        return (
            <Aux>
                <Toolbar clickDrawerToggle={this.toggleSideDrawerHandler} />
                <SideDrawer show={this.state.showSideDrawer} backdropClick={this.closeSideDrawerHandler} />
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </Aux>
        );
    }
}

export default Layout;
