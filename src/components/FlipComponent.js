import React, { Component } from 'react';
import '../Flip.css';

var Front = function (props) {
    return (
        <div className="front tile">{props.children}</div>
    )
}

var Back = function (props) {
    return (
        <div className="back tile">{props.values}</div>
    )
}

class Flipper extends Component {
    constructor(props) {
        super(props);
        this.state = {
            flipped: this.props.flipped
        }
    }
    
    onFlip = () => {
        // this.setState({
        //     flipped: !this.props.flipped
        // });
        this.props.getValue(this.props.values,this.props.name);
        
    }

    render() {
        return (
            <div className={"flipper-container " + this.props.orientation} onClick={this.onFlip} style={{cursor:'pointer'}}>
                <div className={"flipper" + (this.props.flipped ? " flipped" : "")}>
                    <Front>the front!</Front>
                    <Back {...this.props}>the back!</Back>
                    
                </div>
                {this.props.flipped ? 'con ra' : 'con khong ra'}
            </div>
        )
    }
}




class FlipComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            arrayValues: [1, 4, 1, 4],
            arrayTemp:[],
            flipped1 : false,
            flipped2 : false,
            flipped3 : false,
            flipped4 : false
        }
    }
    backFlip = () => {
        return true;
    }
    getValue = (value,name) => {
        let {arrayValues,arrayTemp} = this.state;
        this.setState({
            [name]:!this.state[name]
        });
        console.log(value);
        
        let findItem = arrayValues.findIndex((item)=>{
            return item == value
        });
        if(findItem != -1 && arrayTemp.length == 0){
            //this.state.flipped1 = true;
            arrayTemp.push(value);
            //console.log(arrayTemp);
            //arrayValues.splice(findItem,1);
        }
        else{
            let result = arrayTemp.filter((item1)=>{
                return item1 == value
            });
            console.log(result);
            if(result.length==0){
               
               
            
            }
        }
       
    }
    render() {
        return (
            <div>
                <Flipper  orientation="horizontal" name ='flipped1' flipped={this.state.flipped1} values={this.state.arrayValues[0]} getValue={this.getValue} backFlip = {this.backFlip} />
                <Flipper  orientation="horizontal" name ='flipped2' flipped={this.state.flipped2} values={this.state.arrayValues[3]} getValue={this.getValue} backFlip = {this.backFlip} />
                <Flipper  orientation="horizontal" flipped={this.state.flipped3} values={this.state.arrayValues[2]} getValue={this.getValue} />
                <Flipper  orientation="horizontal" flipped={this.state.flipped4} values={this.state.arrayValues[1]} getValue={this.getValue} />
                <div className="button-container">
                    <button onClick={this.flip}>Flip!</button>
                    <span>{this.state.flipped ? 'ra' : 'khong ra'}</span>
                </div>
            </div>
        )
    }
}

export default FlipComponent