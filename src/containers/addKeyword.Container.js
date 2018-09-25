import React, { Component } from 'react';
import{connect} from 'react-redux';
import AddKeywordComponent from '../components/Keyword/addKeyword.Component';
import * as actions from '../actions/index';


const mapStateToProps = (state) => {
  return{
    keywordTypes:state.keywordReducer.keywordTypes,
    valuesForm:state.form.keyword
    
  }
}
const mapDispatchToProps = (dispatch,props) => {
    return {
      getKeywordTypes:() => {
        dispatch(actions.getKeywordTypes())
      },
      getKeywordById:(id) => {
        dispatch(actions.getKeywordById(id))
      },
      freshKeyword:()=>{
        dispatch(actions.freshKeyword())
      }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(AddKeywordComponent);