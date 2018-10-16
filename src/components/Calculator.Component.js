import React, { Component } from 'react';
    
class CalculatorComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            a:0,
            b:0,
            expression:''
        }
    }
    addNumber(e){
        let ex = this.state.expression + e.target.defaultValue;
        this.setState({
            expression:ex
        });
    }
    addExpression(e){
        let expressionString = e.target.defaultValue;
        // let expression = '';
        // switch(expressionString){
        //     case '+' :
        //         expression = this.state.expression + expressionString;
        //         break;
        //     case '-' :
        //         alert(2);
        //         break;
        //     case '*' :
        //         break;
        //     default :

        // }
        // console.log(expression);
        this.setState({
            expression:this.state.expression + expressionString
        });
        
    }
    calculator(){
        this.setState({
            expression: eval(this.state.expression)
        });
    }
    clearn(){
        this.setState({
            expression:''
        })
    }
    render() {
        console.log(this.state.expression);
        return (
            <div>
                <div className="container">
                    <div className="row saleh">
                        <div className=" col-xs-12  col-sm-offset-4 col-sm-12  col-md-offset-3 col-md-6  col-lg-offset-3 col-lg-6  ">
                            <form name="form" className="well calcontainer col-xs-12  col-sm-offset-4 col-sm-12  col-md-offset-3 col-md-6  col-lg-offset-3 col-lg-6">
                                {/* panel for the calc */}
                                <input className=" form-control " id="panel" name="panel" placeholder={this.state.expression} disabled /><br />
                                {/* User Input Buttons for the calc */}
                                <input className="form-group btn btn-default bttn" type="button" name="bttn7" defaultValue={7} onClick={this.addNumber.bind(this)} style={styleInput} />
                                <input className="form-group btn btn-default bttn" type="button" name="bttn8" defaultValue={8} onClick={this.addNumber.bind(this)} style={styleInput} />
                                <input className="form-group btn btn-default bttn" type="button" name="bttn9" defaultValue={9} onClick={this.addNumber.bind(this)} style={styleInput} />
                                <input className="form-group btn btn-danger bttn" type="button" name="bttnplus" defaultValue="+" onClick={this.addExpression.bind(this)} style={styleInput} /><br />
                                <input className="form-group btn btn-default bttn" type="button" name="bttn4" defaultValue={4} onClick={this.addNumber.bind(this)} style={styleInput} />
                                <input className="form-group btn btn-default bttn" type="button" name="bttn5" defaultValue={5} onClick={this.addNumber.bind(this)} style={styleInput} />
                                <input className="form-group btn btn-default bttn" type="button" name="bttn6" defaultValue={6} onClick={this.addNumber.bind(this)} style={styleInput} />
                                <input className="form-group btn btn-danger bttn" type="button" name="bttnminus" defaultValue="-" onClick={this.addExpression.bind(this)} style={styleInput} /><br />
                                <input className="form-group btn btn-default bttn" type="button" name="bttn1" defaultValue={1} onClick={this.addNumber.bind(this)} style={styleInput}  />
                                <input className="form-group btn btn-default bttn" type="button" name="bttn2" defaultValue={2} onClick={this.addNumber.bind(this)} style={styleInput} />
                                <input className="form-group btn btn-default bttn" type="button" name="bttn3" defaultValue={3} onClick={this.addNumber.bind(this)} style={styleInput} />
                                <input className="form-group btn btn-danger bttn" type="button" name="bttnmulti" defaultValue="*" onClick={this.addExpression.bind(this)} style={styleInput} /><br />
                                <input className="form-group btn btn-default bttn" type="button" name="bttndot" defaultValue="." onclick="calC(bttndot.value);" style={styleInput} />
                                <input className="form-group btn btn-default bttn" type="button" name="bttn0" defaultValue={0} onClick={this.addNumber.bind(this)} style={styleInput} />
                                <input className="form-group btn btn-danger bttn" type="button" name="bttnmod" defaultValue="%" onClick={this.addExpression.bind(this)} style={styleInput} />
                                <input className="form-group btn btn-danger bttn" type="button" name="bttndiv" defaultValue="/" onClick={this.addExpression.bind(this)} style={styleInput} /><br />
                                {/* calling new reset function */}
                                <input className="form-group btn btn-info bttn bttne" type="button" name="bttnclear" defaultValue="CE" onClick={this.clearn.bind(this)} style={styleInput}/>
                                <input className="form-group btn btn-success bttn bttne" type="button" name="bttnEQL" defaultValue="=" onClick={this.calculator.bind(this)} style={styleInput} />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
const styleInput = {
    margin:'10px'
}
export default CalculatorComponent