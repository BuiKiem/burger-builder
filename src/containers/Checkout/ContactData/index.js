import React from "react";

import Button from "../../../components/UI/Button";

import classes from "./ContactData.module.css";

class ContactData extends React.Component {
    state = {
        name: '',
        email: '',
        address: {
            street: '',
            postalCode: '',
        },
    };
    
    render() {
        return (
            <div className={classes.ContactData}>
                <h4>Enter Your Contact Data</h4>
                <form action=".">
                    <input type="text" name="name" placeholder="Your name" className={classes.Input} />
                    <input type="email" name="email" placeholder="Your email" className={classes.Input} />
                    <input type="text" name="street" placeholder="Your address street" className={classes.Input} />
                    <input type="text" name="postal" placeholder="Your postal code" className={classes.Input} />
                    <Button btnType="Success">ORDER</Button>
                </form>
            </div>
        );
    }
}

export default ContactData;
