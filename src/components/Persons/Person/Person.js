import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './Person.css';
import Auxiliary from '../../../hoc/Auxiliary';
import withClass from '../../../hoc/withClass';
import authContext from '../../../context/auth-context';

class Person extends Component {
    constructor(props) {
        super(props);
        this.inputElementRef = React.createRef();
    }

    static contextType = authContext;

    componentDidMount() {
        //this.inputElement.focus();
        this.inputElementRef.current.focus();
        console.log(this.context.authenticated);
    }

    render() {
        console.log('[Person.js] rendering...');
        return (
            <Auxiliary>
                {this.context.authenticated ? <p>Authenticated!</p> : <p>Please log in</p>}
                <p onClick={this.props.click}>{this.props.age} year old person called {this.props.name} here</p>
                <p>{this.props.children}</p>
                <input 
                //ref={(inputEl) => {this.inputElement = inputEl}} 
                ref={this.inputElementRef}
                type="text" 
                onChange={this.props.changed} 
                value={this.props.name}/>
            </Auxiliary>
        );
    }
}

Person.propsTypes = {
    click: PropTypes.func,
    age: PropTypes.number,
    name: PropTypes.string,
    change: PropTypes.func
};

export default withClass(Person, 'Person');                      