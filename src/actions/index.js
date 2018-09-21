
import * as actionTypes from '../constants/ActionTypes';

export const login = (login) =>{
    return {
        type:actionTypes.LOGIN,
        login:login
    }
}

export const login_success = (login) =>{
    return {
        type:actionTypes.LOGIN_SUCCESS,
        login:login
    }
}

export const logout = () => {
    return{
        type:actionTypes.LOGOUT
    }
}

export const getKeywords = () => {
    return {
        type:actionTypes.GET_KEYWORDS
    }
}

export const getKeywords_success = (data) => {
    return {
        type:actionTypes.GET_KEYWORDS_SUCCESS,
        keywords:data
    }
}

export const getKeywordTypes = () => {
    return {
        type:actionTypes.GET_KEYWORD_TYPES
    }
}

export const getKeywordTypes_success = (data) => {
    return {
        type:actionTypes.GET_KEYWORD_TYPES_SUCCESS,
        keywordTypes:data
    }
}

export const getKeywordById = (id) => {
    return {
        type:actionTypes.GET_KEYWORD_BY_ID,
        id:id
    }
}

export const freshKeyword = () => {
    return {
        type:actionTypes.FRESH_KEYWORD
      
    }
}