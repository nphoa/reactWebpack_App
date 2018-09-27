import React, { Component } from 'react';
import './LoadingHoC.Component.css';
import * as urls from '../../API/urls';

const LoaderHOC = (WrappedComponent) => {
    return class LoaderHOC extends Component{
        constructor(props){
            super(props);
        }
        componentDidMount(){
            console.log('zo loading');
            this.props.getKeywords(urls.url_get_keywords);
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