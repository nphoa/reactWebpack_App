import React, { Component } from 'react';




class FormComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: ''
        }
    }
    handleChange(event) {
        this.setState({ name: event.currentTarget.value });
    }
    render() {
        return (
            <div>
                <input type="text" onChange={this.handleChange.bind(this)} />
                <PersonComponent name={this.state.name} />
            </div>
        )
    }
}

class PersonComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    componentWillReceiveProps(nextProps) {
        console.group('componentWillReceiveProps');
            console.log(`Props current is: ${this.props.name}`);
            console.log(`Props new is: ${nextProps.name}`);
        console.groupEnd();
    }
    shouldComponentUpdate(){
        console.group('shouldComponentUpdate');
           
        console.groupEnd();
        return true;
    }
    componentWillUpdate() {
        console.group('componentWillUpdate');
           
        console.groupEnd();
    }
    componentDidUpdate(){
        console.group('componentDidUpdate');
            
        console.groupEnd();
    }
    render() {
        console.log('Render view');
        return (
            <div>
                My name is `${this.props.name}`;
            </div>
        )
    }
}


export default FormComponent  