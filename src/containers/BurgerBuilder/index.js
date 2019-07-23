import React, {Component} from "react";

import Aux from "../../hoc/Aux/Aux";
import Burger from "../../components/Burger";
import BuildControls from "../../components/Burger/BuildControls";
import Modal from "../../components/UI/Modal";
import OrderSummary from "../../components/Burger/OrderSummary";
import Spinner from "../../components/UI/Spinner";
import withErrorHandler from "../../hoc/withErrorHandler";

import axios from "../../axios-orders";

const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7,
};

class BurgerBuilder extends Component {

    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0,
        },
        totalPrice: 4,
        canOrder: false,
        ordering: false,
        loading: false,
    };

    addIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount + 1;
        const updatedIngredients = {
            ...this.state.ingredients,
        };
        updatedIngredients[type] = updatedCount;
        const priceAddition = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition;
        this.setState({
            totalPrice: newPrice,
            ingredients: updatedIngredients,
        });
    };

    removeIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        if (oldCount <= 0) return;
        const updatedCount = oldCount - 1;
        const updatedIngredients = {
            ...this.state.ingredients,
        };
        updatedIngredients[type] = updatedCount;
        const priceDeduction = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - priceDeduction;
        this.setState({
            totalPrice: newPrice,
            ingredients: updatedIngredients,
        });
    };

    orderHandler = () => {
        this.setState({ordering: true});
    };

    cancelOrderHandler = () => {
        this.setState({ordering: false});
    };

    continueOrderHandler = () => {
        this.setState({loading: true});
        const order = {
            ingredients: this.state.ingredients,
            price: this.state.totalPrice,
            customer: {
                name: 'Customer name',
                address: {
                    street: 'Address street',
                    zipCode: '00000',
                    country: 'NeverLand',
                },
                email: 'customer@example.com',
            },
            deliveryMethod: 'economy',
        };
        axios.post("/orders.json", order)
            .then((response) => this.setState({loading: false, ordering: false}))
            .catch((error) => this.setState({loading: false, ordering: false}));

    };

    render() {
        const disabledInfo = {
            ...this.state.ingredients
        };
        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <=0;
        }

        let orderSummary = (
            <OrderSummary
                ingredients={this.state.ingredients}
                cancelHandler={this.cancelOrderHandler}
                continueHandler={this.continueOrderHandler}
                totalPrice={this.state.totalPrice}
            />
        );
        orderSummary = this.state.loading ? <Spinner/> : orderSummary;

        return (
            <Aux>
                <Modal show={this.state.ordering} close={this.cancelOrderHandler}>
                    {orderSummary}
                </Modal>
                <Burger ingredients={this.state.ingredients} />
                <BuildControls
                    addIngredient={this.addIngredientHandler}
                    removeIngredient={this.removeIngredientHandler}
                    disabled={disabledInfo}
                    price={this.state.totalPrice}
                    order={this.orderHandler}
                />
            </Aux>
        );
    }
}

export default withErrorHandler(BurgerBuilder, axios);
