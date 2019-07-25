import React, {Component} from "react";

import Order from "../../components/Order";
import axios from "../../axios-orders";
import withErrorHandler from "../../hoc/withErrorHandler";

class Orders extends Component {
    state = {
        orders: [],
        loading: true,
    };

    componentDidMount() {
        axios.get("/orders.json")
            .then((response) => {
                const fetchedData = [];
                for (let key in response.data) {
                    fetchedData.push({
                        ...response.data[key],
                        id: key});
                }

                this.setState({loading: false, orders: fetchedData});
            })
            .catch((error) => {
                this.setState({loading: false});
            })
    }

    render() {
        return (
            <div>
                <Order />
                <Order />
            </div>
        );
    };
}

export default withErrorHandler(Orders, axios);
