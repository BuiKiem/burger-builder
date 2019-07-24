import React, {Component} from "react";

import Modal from "../../components/UI/Modal";
import Aux from "../Aux/Aux";

const withErrorHandler = (WrappedComponent, axios) => {
    return class extends Component {

        constructor(props) {
            super(props);
            this.state = {
                error: null,
            };

            this.requestInterceptor = axios.interceptors.request.use(request => {
                this.setState({error: null});
                return request
            });

            this.responseInterceptor = axios.interceptors.response.use(response => response, (error) => {
                this.setState({error: error});
            });
        };

        componentWillUnmount() {
            axios.interceptors.request.eject(this.requestInterceptor);
            axios.interceptors.response.eject(this.responseInterceptor);
        }

        errorConfirmHandler = () => this.setState({error: null});

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
    };
};

export default withErrorHandler;
