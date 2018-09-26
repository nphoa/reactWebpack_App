import React, { Component } from 'react';
import './LoadingHoC.Component.css';


const LoaderHOC = (WrappedComponent) => {
    return class LoaderHOC extends Component{
        constructor(props){
            super(props);
        }
        componentDidMount(){
            let objSearch = {
                keyword:'',
                type:'',
                vietnamese:''
            };
            this.props.getKeywords(objSearch);
            this.props.getKeywordTypes();
        }
        render(){
            return(
                this.props.keywords.length === 0 ? <div className="loader"></div> : <WrappedComponent {...this.props}/>
            )       
        }
    }
}


  export default LoaderHOC;