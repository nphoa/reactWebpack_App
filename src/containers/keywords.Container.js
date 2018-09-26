import React, { Component } from 'react';
import{connect} from 'react-redux';
import KeywordsComponent from '../components/Keyword/keywords.Component';
import * as actions from '../actions/index';


const mapStateToProps = (state) => {
  return{
    keywordTypes:state.keywordReducer.keywordTypes,
    keywords:state.keywordReducer.keywords
    
  }
}
const mapDispatchToProps = (dispatch,props) => {
    return {
      getKeywords:(dataSearch) => {
        dispatch(actions.getKeywords(dataSearch))
      },
      getKeywordTypes:() => {
        dispatch(actions.getKeywordTypes())
      },
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(KeywordsComponent);