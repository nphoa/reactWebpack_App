import React, { Component } from 'react';
import{connect} from 'react-redux';
import KeywordsComponent from '../components/Keyword/keywords.Component';
import * as actions from '../actions/index';


const mapStateToProps = (state) => {
  return{
    keywordTypes:state.keywordReducer.keywordTypes,
    keywords:state.keywordReducer.keywords,
    searchInfo:state.keywordReducer.searchInfo
  }
}
const mapDispatchToProps = (dispatch,props) => {
    return {
      getKeywords:(data=null,page) => {
        dispatch(actions.getKeywords(data,page))
      },
      getKeywordTypes:() => {
        dispatch(actions.getKeywordTypes())
      },
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(KeywordsComponent);