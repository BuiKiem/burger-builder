import React from "react";

import Button from "../../../components/UI/Button";
import Input from "../../../components/UI/Input";
import Spinner from "../../../components/UI/Spinner";

import classes from "./ContactData.module.css";

import axios from "../../../axios-orders";

const createInputObject = (elementType, config, value, validation, valid=false) => ({
    elementType: elementType,
    config: config,
    value: value,
    validation: validation,
    valid: valid,
    touched: false,
});

class ContactData extends React.Component {
    state = {
        orderForm: {
            name: createInputObject('input', {type: 'text', placeholder: 'Your name'}, '', {required: true}),
            street: createInputObject('input', {type: 'text', placeholder: 'Your address street'}, '', {required: true}),
            zipCode: createInputObject('input', {type: 'text', placeholder: 'ZIP code'}, '', {required: true, minLength: 5, maxLength: 5}),
            country: createInputObject('input', {type: 'text', placeholder: 'Country'}, '', {required: true}),
            email: createInputObject('input', {type: 'email', placeholder: 'Your email'}, '', {required: true}),
            deliveryMethod: createInputObject('select', {options: [
                {value: "fastest", display: "Fastest"}, {value: "economy", display: "Economy"}]},
                'fastest', {}, true),
        },
        formIsValid: false,
        loading: false,
    };

    inputChangedHandler = (event, inputIdentifier) => {
        const updatedOrderForm = {...this.state.orderForm};
        const updatedElement = {
            ...updatedOrderForm[inputIdentifier],
            value: event.target.value,
            valid: this.checkValidity(event.target.value, updatedOrderForm[inputIdentifier].validation),
            touched: true,
        };
        updatedOrderForm[inputIdentifier] = updatedElement;

        let formIsValid = true;
        for (let inputIdentifier in updatedOrderForm) formIsValid = updatedOrderForm[inputIdentifier].valid && formIsValid;

        this.setState({orderForm: updatedOrderForm, formIsValid: formIsValid});
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

    checkValidity = (value, rule) => {
        let isValid = true;

        if (rule.required) {
            isValid = value.trim() !== "" && isValid;
        }
        if (rule.minLength) {
            isValid = value.length >= rule.minLength && isValid;
        }
        if (rule.maxLength) {
            isValid = value.length <= rule.maxLength && isValid;
        }

        return isValid;
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
                        invalid={!element.config.valid}
                        shouldValidate={element.config.validation}
                        touched={element.config.touched}
                    />)
                }
                <Button btnType="Success" clicked={this.orderHandler} disabled={!this.state.formIsValid}>ORDER</Button>
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
