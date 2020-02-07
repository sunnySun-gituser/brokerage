import React, {Component} from 'react';

//HOC: higher-order-component, meaning a component that returns a component
// loading components asynchronously with it (apply for it in App.js) 
const asyncComponent = (importComponent) => {
    return class extends Component{
        state = {
            component: null
        }

        componentDidMount(){
            importComponent()
            .then(cmp => {
                this.setState({component: cmp.default});
            });
        }
        render(){
            const C = this.state.component;

            return C ? <C {...this.props} /> : null;
        }
    }
}

export default asyncComponent;