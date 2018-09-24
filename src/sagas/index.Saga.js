import {delay} from 'redux-saga';
import{all} from 'redux-saga/effects';
import {watchLogin} from './authencation.Saga';
import {watchGetKeywords} from './keyword.Saga';

export default function* rootSaga(){
    yield all([
        watchLogin(),
        watchGetKeywords()

    ]);
}