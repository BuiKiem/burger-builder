import React from "react";

import CheckoutSummary from "../../components/Order/CheckoutSummary";

class Checkout extends React.Component {

    state = {
        ingredients: {
            salad: 2,
            meat: 1,
            cheese: 1,
            bacon: 1,
        },
    };

    componentDidMount() {
        const query = new URLSearchParams(this.props.location.search);
        const ingredients = {};
        for (let param of query.entries()) {
            ingredients[param[0]] = parseInt(param[1]);
        }
        console.log(ingredients);
        this.setState({ingredients: ingredients});
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
            </div>
        );
    }
}

export default Checkout;
