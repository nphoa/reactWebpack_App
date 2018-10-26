import React, { Component } from 'react';
import './LoadingHoC.Component.css';
import * as urls from '../../API/urls';

const LoaderHOC = (WrappedComponent) => {
    return class LoaderHOC extends Component{
        constructor(props){
            super(props);
        }
        componentDidMount(){
            console.log(this.props.match.params.page);
            this.props.getKeywords(null,this.props.match.params.page);
            
        }
        render(){
            return(
                this.props.keywords.length === 0 ? <div className="loader"></div> : <WrappedComponent {...this.props}/>
            )       
        }
    }
}


  export default LoaderHOC;