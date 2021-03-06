import * as types from '../constants/ActionTypes';
import { delay } from 'redux-saga';
import { put, takeEvery, takeLatest } from 'redux-saga/effects';
import * as urls from '../API/urls';
import callApiNew from '../API/callApi';
import * as actions from '../actions/index';
import swal from 'sweetalert';

function* callApi(url, token, method, dataSearch=undefined) {
    let data = null;
    yield fetch(url, {
        method: method,
        headers: {
            'Content-Type': 'application/json',
            'Authorization': token
        },
        body: JSON.stringify(dataSearch),
    }).then((res) => {
        return res.json();
    }).then(response => {
        data = response;
    })
        .catch((error) => {
            console.log(error);
        });
    return data;
}

function* getKeywords(action) {
    let token = 'Bearer ' + sessionStorage.getItem('token');
    let result = null;
    if(action.dataSearch != null){
        let fd = new FormData();
        fd.set('dataSearch',JSON.stringify(action.dataSearch));
        result = yield callApiNew(urls.url_post_searchKeyword,'POST',fd,token);
    }else{
        result = yield callApiNew(`${urls.url_get_keywords}?page=${action.page}`,'GET',null,token);
    }
    //let fd = new FormData();
    //fd.set('dataSearch',JSON.stringify(action.dataSearch));
    // let result = yield callApiNew(urls.url_get_keywords,'GET',null,token);
    // //console.log(result);
    if (result.status == 200) {
        yield put(actions.getKeywords_success(result.data.data));
    }

}


export function* watchGetKeywords() {
    yield takeEvery(types.GET_KEYWORDS, getKeywords);
}

function* getKeywordTypes(action) { 
    let token = 'Bearer '+sessionStorage.getItem('token');
    let result = yield callApi(urls.url_get_keyword_types,token,'GET');
    if(result.status==200){

        yield put(actions.getKeywordTypes_success(result.data));
    }
}

export function* watchGetKeywordTypes() {
    yield takeEvery(types.GET_KEYWORD_TYPES, getKeywordTypes)
}