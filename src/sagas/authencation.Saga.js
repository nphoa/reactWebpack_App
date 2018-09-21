import * as types from '../constants/ActionTypes';
import {delay} from 'redux-saga';
import {put,takeEvery,takeLatest } from 'redux-saga/effects';
import * as urls from '../API/urls';
import callApi from '../API/callApi';
import * as actions from '../actions/index';
import swal from 'sweetalert';

function* login(action){
     
      let data = null;
      const {email,password} = action.login;
      let loginApi = new FormData();
      loginApi.set('email',email);
      loginApi.set('password',password);
     
     yield callApi(`${urls.url_login}`,'POST',loginApi).then((res)=>{
         if(res.status === 200){
            data = res.data;
         }
     }).catch((error)=>{
        if (error.response) {
            if(error.response.status === 401){
                swal("Login error", "Email or password not correct", "error");
            }
          
          } else if (error.request) {
            // The request was made but no response was received
            // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
            // http.ClientRequest in node.js
            console.log(error.request);
          } else {
            // Something happened in setting up the request that triggered an Error
            console.log('Error', error.message);
          }
     });
    if(data!= null || data!= undefined){
        yield put(actions.login_success(data));
    } 
 }
 
 
 export function* watchLogin(){
     yield takeEvery(types.LOGIN,login);
 }