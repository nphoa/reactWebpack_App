import axios from 'axios';

export default function callApi(endpoint,method='GET',body,token){
	return axios({
		method:method,
		url:`${endpoint}`,
		data:body,
		headers: {
			"Authorization":token,
		   "Content-Type": "application/x-www-form-urlencoded",
		   //'Content-Type':false,
		   'Access-Control-Allow-Origin': '*',
		
		   
        }
	});
}