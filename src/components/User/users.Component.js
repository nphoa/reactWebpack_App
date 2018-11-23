import React, { Component } from 'react';
import { Link,Redirect} from 'react-router-dom';
import * as urls from '../../API/urls';
import callApiAxios from '../../API/callApi';
import LoaderHOC from '../HoCs/LoadingHoC.Component.js';
import Pagination from '../Pagination.Component';
import { delay } from 'redux-saga';
class UsersComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
     
    }
  }
  componentWillMount() {
    console.log();
  }
  componentWillReceiveProps = (prevProps,prevState)=> {
    if(this.props != prevProps ){
      console.group('componentWillReceiveProps');
      console.log('Hàm này thực hiện liên tục mỗi khi props thay đổi');
      console.groupEnd();
    }
    
  }
  componentWillUpdate(){
    console.group('componentWillUpdate');
      console.log('hàm này sẽ chạy khi có dấu hiệu update xảy ra và xảy ra trước khi render view');
    console.groupEnd();
  }
  componentDidUpdate =(prevProps, prevState)=>{
    console.group('componentDidUpdate')
      console.log('hàm này sẽ chạy khi có dấu hiệu update xảy ra và xảy ra sau khi view đã render');
      console.log(this.props.match.url);
      console.log(prevProps.match.url);
      if(this.props.location.search != prevProps.location.search){
        console.log('hop le và thực hiện side effect');
        //let idPage = this.props.location.search.substr(6,1);   
        //this.props.getKeywords(null,idPage);
      }
    console.groupEnd();
    
  }

  componentDidMount(){
   // console.log('componentDidMount');
   // this.props.getKeywordTypes();
   // let idPage = this.props.location.search.substr(6,1);   
    //this.props.getKeywords(null,idPage); 
    
  }
  callApi(url, token) {
    fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': token
      }
    }).then((res) => {
      return res.json();
    }).then(response => {
      console.log(response);
    })
      .catch((error) => {
        console.log(error);
      });
  }

  onDeleteHandle = (id, event) => {
    event.preventDefault();
    let token = 'Bearer ' + sessionStorage.getItem('token');
    let url = urls.url_get_deleteKeyword + `?id=${id}`;
    callApiAxios(url, 'GET', '', token).then((res) => {
      if (res.data.status == 200) {
        let idPage = this.props.location.search.substr(6,1);   
        this.props.getKeywords(null,idPage); 
      }
    });
  }
  showContentUsers = (users) => {
    let result = null;
    if (keywords != null && keywords.length > 0) {
      result = keywords.map((item, index) => {
        return (
          <tr key={index} >
            <td>{item.keyword}</td>
            <td>{item.type}</td>
            <td>{item.vietnamese}</td>
            <td>
              <Link to={`/addKeyword/${item.id}`} className='btn btn-warning' style={{ marginRight: '5px' }}>Edit</Link>
              <a href='' onClick={(e) => this.onDeleteHandle(item.id, e)} className='btn btn-danger'>Delete</a>
            </td>
          </tr>
        )
      })
    }
    return result;
  }
  
 

  render() {
    console.group('render view');
      console.log('render view');
      console.log(this.state);
    console.groupEnd('End');
    return (
    
      <div className="row">



      


        <div className="outer-w3-agile col-xl-8">

          <h4 className="tittle-w3-agileits mb-4">Users</h4>
          <Link to='/addKeyword' className="btn btn-primary" style={{ marginBottom: '10px' }}>Add new</Link>

          <div className="container-fluid">
            <div className="row">

              <table className="table col-xl mr-xl-3">
                <thead>
                  <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                
                </tbody>
              </table>
                   
              

                 <div className="container">
                <div className="text-center">
                    <h1>React - Pagination Example with logic like Google</h1>

               
                </div>
            </div> 
            </div>
          </div>





        </div>


      </div>





    )
  }
}

export default UsersComponent