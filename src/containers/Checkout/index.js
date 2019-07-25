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
        const extendState = this.props.location.state;
        if (extendState) {
            this.setState({
                ingredients: extendState.ingredients,
                totalPrice: extendState.totalPrice,
            });
        }
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
                <Route path={this.props.match.path + "/contact-data"} render={(props) => <ContactData ingredients={this.state.ingredients} totalPrice={this.state.totalPrice} {...props} />}/>
            </div>
        );
    }
}

export default Checkout;
