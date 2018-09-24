import React, { Component } from 'react';
import{connect} from 'react-redux';
import KeywordsComponent from '../components/Keyword/keywords.Component';
import * as actions from '../actions/index';


const mapStateToProps = (state) => {
  return{
    keywords:state.keywordReducer.keywords
    
  }
}
const mapDispatchToProps = (dispatch,props) => {
    return {
      getKeywords:() => {
        dispatch(actions.getKeywords())
      }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(KeywordsComponent);