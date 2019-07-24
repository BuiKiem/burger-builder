import React from "react";
import {Route} from "react-router-dom";

import CheckoutSummary from "../../components/Order/CheckoutSummary";
import ContactData from "./ContactData";

class Checkout extends React.Component {
    state = {
        ingredients: {
            salad: 0,
            meat: 0,
            cheese: 0,
            bacon: 0,
        },
    };

    componentDidMount() {
        const ingredients = this.props.location.state;
        if (ingredients) this.setState({ingredients: ingredients});
    }

    cancelCheckoutHandler = () => {
        this.props.history.goBack();
    };

    continueCheckoutHandler = () => {
        this.props.history.replace("/checkout/contact-data");
    };

    render() {
        return (
            <div>
                <CheckoutSummary
                    ingredients={this.state.ingredients}
                    clickCancel={this.cancelCheckoutHandler}
                    clickContinue={this.continueCheckoutHandler}
                />
                <Route path={this.props.match.path + "/contact-data"} component={ContactData}/>
            </div>
        );
    }
}

export default Checkout;
