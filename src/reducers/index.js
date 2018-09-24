import { combineReducers } from 'redux';
import authencationReducer from './authencation.Reducer';
import keywordReducer from './keyword.Reducer';

const appReducers = combineReducers({
    authencationReducer,
    keywordReducer
});

export default appReducers;