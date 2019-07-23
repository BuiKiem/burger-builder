import React, {Component} from "react";

import Modal from "../../components/UI/Modal";
import Aux from "../Aux/Aux";

const withErrorHandler = (WrappedComponent, axios) => {
    return class extends Component {
        state = {
            error: null,
        };

        errorConfirmHandler = () => this.setState({error: null});

        componentDidMount() {
            axios.interceptors.request.use(request => {
                this.setState({error: null});
                return request
            });
            axios.interceptors.response.use(response => response, (error) => {
                this.setState({error: error});
            });
        };

        render() {
            return (
                <Aux>
                    <Modal show={this.state.error} close={this.errorConfirmHandler}>
                        {this.state.error ? this.state.error.message : null}
                    </Modal>
                    <WrappedComponent {...this.props}/>
                </Aux>
            );
        };
    }
};

export default withErrorHandler;
