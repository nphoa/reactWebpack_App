import React, { Component } from 'react';
import './LoadingHoC.Component.css';
import * as urls from '../../API/urls';
import { delay } from 'redux-saga';

const LoaderHOC = (WrappedComponent) => {
    return class LoaderHOC extends Component{
        constructor(props){
            super(props);
            this.state = {
                keywords:null
            };
          
        }
        componentDidMount(){
            this.props.getKeywords(null,this.props.match.params.page); 
            this.setState({
                keywords:this.props.keyword.list
            })
        }
        render(){
            console.log('hoc');
            console.log(this.props.keyword.list.length);
            //const { keywords } = this.state;

            if(this.state.keywords == null) {
              return <div className='loader'>Loading...</div>;
            }
            return(
                 <WrappedComponent {...this.props}/>
            )       
        }
    }
}


  export default LoaderHOC;