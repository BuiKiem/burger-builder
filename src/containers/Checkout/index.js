import React from "react";

import CheckoutSummary from "../../components/Order/CheckoutSummary";

class Checkout extends React.Component {

    state = {
        ingredients: {
            salad: 1,
            meat: 1,
            cheese: 1,
            bacon: 1,
        },
    };

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
            </div>
        );
    }
}

export default Checkout;
