import React, { Component } from 'react';
import '../Flip.css';

class DemoState extends Component {
    constructor(props) {
        super(props);
        this.state ={
            count:0
        }
       
    }
    incrementCount = () => {
        //this.setState({count: this.state.count + 1});
        this.setState((state) => {
            // Important: read `state` instead of `this.state` when updating.
            return {count: state.count + 1}
        });
    }
    handleSomething = () => {
        // setTimeout(()=>{
        //     this.incrementCount();
        // },1000);
        // setTimeout(()=>{
        //     this.incrementCount();
        // },1000);
        // setTimeout(()=>{
        //     this.incrementCount();
        // },1000);
        this.incrementCount();
        this.incrementCount();
        this.incrementCount();
       
        
    }

    render() {
        return (
            <div>
                <button className='btn btn-danger' onClick={this.handleSomething}>Test</button>
                {this.state.count}
            </div>
            
        )
    }
}


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
       
    }

    onFlip = () => {

         this.props.getValue(this.props.index,this.props.values, this.props.name);
        // if (!result) {
        //     this.setState({
        //         flipped: false
        //     });
        // }
    }

    render() {
        return (
            <div className={"flipper-container " + this.props.orientation} onClick={this.onFlip} style={{ cursor: 'pointer' }}>
                <div className={"flipper" + (this.props.flipped ? " flipped" : "")}>
                    <Front>the front!</Front>
                    <Back {...this.props}>the back!</Back>

                </div>
            </div>
        )
    }
}




class FlipComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            arrayValues: [
                {
                    index : 0,
                    value:1,
                    flip:false
                },
                {
                    index : 1,
                    value:4,
                    flip:false
                },
                {
                    index :2,
                    value:1,
                    flip:false
                },
                {
                    index : 3,
                    value:4,
                    flip:false
                }
            ],
            arrayTemp: []
        }
    }
    backFlip = () => {
        return true;
    }

    checkCorrect = () =>{
        if(this.state.arrayTemp.length >= 2){
            if(this.state.arrayTemp[0].value != this.state.arrayTemp[1].value){
                this.state.arrayTemp[0].flip = false;
                this.state.arrayTemp[1].flip = false;
            }
            this.state.arrayTemp = [];
            this.setState(this.state);
            this.checkWinner();
        }
       
    }
    checkWinner = () => {
        console.log('zo winner');
        let {arrayValues} = this.state;
        let filterResult = arrayValues.filter((item)=>{
            return item.flip == false;
        });
        if(filterResult.length == 0){
           alert('You win');
        }
    }
    checkDisabled = (value) => {
        let {arrayValues} = this.state;
        let checkDisabled = arrayValues.filter((item)=>{
            return item.value == value && item.flip == true
        });
        if(checkDisabled.length == 2){
            return false;
        }
        return true;
    }
    getValue = (index,value, name) => {
        if(this.checkDisabled(value)){
            let check = this.state.arrayTemp.filter((item)=>{
                return item.index == index;
            });
            console.log(check);
            if(check.length == 0){
                this.state.arrayValues[index].flip = true;
                this.state.arrayTemp.push(this.state.arrayValues[index]);
            }else{
                this.state.arrayValues[index].flip = false;
                this.state.arrayTemp = [];
            }
            
            //console.log(this.state.arrayTemp);
            this.setState(this.state);
            
            setTimeout(()=>{
                this.checkCorrect();
            },1000);
        }
        else{
            alert('Can not clip');
        }
        


    }
    render() {
        return (
            <div>
                {/* <Flipper orientation="horizontal" index={this.state.arrayValues[0].index}  flipped={this.state.arrayValues[0].flip} values={this.state.arrayValues[0].value} getValue={this.getValue} />
                <Flipper orientation="horizontal" index={this.state.arrayValues[1].index}  flipped={this.state.arrayValues[1].flip} values={this.state.arrayValues[1].value} getValue={this.getValue} />
                <Flipper orientation="horizontal" index={this.state.arrayValues[2].index}  flipped={this.state.arrayValues[2].flip} values={this.state.arrayValues[2].value} getValue={this.getValue} />
                <Flipper orientation="horizontal" index={this.state.arrayValues[3].index}  flipped={this.state.arrayValues[3].flip} values={this.state.arrayValues[3].value} getValue={this.getValue} /> */}
           <DemoState/>
            </div>
        )
    }
}

export default FlipComponent