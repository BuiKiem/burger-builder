import React from "react";

import Button from "../../../components/UI/Button";
import Spinner from "../../../components/UI/Spinner";

import classes from "./ContactData.module.css";

import axios from "../../../axios-orders";

class ContactData extends React.Component {
    state = {
        name: '',
        email: '',
        address: {
            street: '',
            postalCode: '',
        },
        loading: false,
    };

    orderHandler = (event) => {
        event.preventDefault();
        this.setState({loading: true});
        const order = {
            ingredients: this.props.ingredients,
            price: this.props.totalPrice,
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
            .then((response) => {
                this.setState({loading: false, ordering: false});
                this.props.history.push("/");
            })
            .catch((error) => {
                this.setState({loading: false, ordering: false});
            });
    };
    
    render() {

        let form = this.state.loading ? <Spinner/> : (
            <form action=".">
                <input type="text" name="name" placeholder="Your name" className={classes.Input}/>
                <input type="email" name="email" placeholder="Your email" className={classes.Input}/>
                <input type="text" name="street" placeholder="Your address street" className={classes.Input}/>
                <input type="text" name="postal" placeholder="Your postal code" className={classes.Input}/>
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