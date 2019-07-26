import React from "react";

import Button from "../../../components/UI/Button";
import Input from "../../../components/UI/Input";
import Spinner from "../../../components/UI/Spinner";

import classes from "./ContactData.module.css";

import axios from "../../../axios-orders";

const createInputObject = (elementType, config, value) => ({
    elementType: elementType,
    config: config,
    value: value,
})

class ContactData extends React.Component {
    state = {
        orderForm: {
            name: createInputObject('input', {type: 'text', placeholder: 'Your name'}, ''),
            street: createInputObject('input', {type: 'text', placeholder: 'Your address street'}, ''),
            zipCode: createInputObject('input', {type: 'text', placeholder: 'ZIP code'}, ''),
            country: createInputObject('input', {type: 'text', placeholder: 'Country'}, ''),
            email: createInputObject('input', {type: 'email', placeholder: 'Your email'}, ''),
            deliveryMethod: createInputObject('select', {options: [
                {value: "fastest", display: "Fastest"}, {value: "economy", display: "Economy"}]},
                'fastest'),
        },
        loading: false,
    };

    inputChangedHandler = (event, inputIdentifier) => {
        const updatedOrderForm = {...this.state.orderForm};
        const updatedElement = {
            ...updatedOrderForm[inputIdentifier],
            value: event.target.value,
        };
        updatedOrderForm[inputIdentifier] = updatedElement;

        this.setState({orderForm: updatedOrderForm});
    };

    orderHandler = (event) => {
        event.preventDefault();
        this.setState({loading: true});
        const formData = {};
        for (let elementIdentifier in this.state.orderForm) {
            formData[elementIdentifier] = this.state.orderForm[elementIdentifier];
        }
        const order = {
            ingredients: this.props.ingredients,
            price: this.props.totalPrice,
            order: formData,
        };
        axios.post("/orders.json", order)
            .then((response) => {
                this.setState({loading: false, ordering: false});
                this.props.history.push("/");
            })
            .catch((error) => {
                this.setState({loading: false, ordering: false});
            });
    };
    
    render() {
        const formElements = [];
        for (let key in this.state.orderForm) {
            formElements.push({
                id: key,
                config: this.state.orderForm[key],
            });
        }

        let form = this.state.loading ? <Spinner/> : (
            <form onSubmit={this.orderHandler}>
                {formElements.map((element) =>
                    <Input
                        key={element.id}
                        elementType={element.config.elementType}
                        elementConfig={element.config.config}
                        value={element.config.value}
                        onChange={(event) => this.inputChangedHandler(event, element.id)}
                    />)
                }
                <Button btnType="Success" clicked={this.orderHandler}>ORDER</Button>
            </form>
        );

        return (
            <div className={classes.ContactData}>
                <h4>Enter Your Contact Data</h4>
                {form}
            </div>
        );
    }
}

export default ContactData;
