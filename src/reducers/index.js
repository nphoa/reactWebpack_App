import { combineReducers } from 'redux';
import authencationReducer from './authencation.Reducer';
import keywordReducer from './keyword.Reducer';
import {reducer as formReducer} from 'redux-form';
const appReducers = combineReducers({
    authencationReducer,
    keywordReducer,
    form:formReducer
});

export default appReducers;