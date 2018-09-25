import React , {Component} from 'react';
import {Link} from 'react-router-dom';
import * as urls from '../../API/urls';
import callApiAxios from '../../API/callApi';
import LoaderHOC from '../HoCs/LoadingHoC.Component.js';

class KeywordsComponent extends Component{
    constructor(props){
      super(props);
      this.state = {
        keywords:[]
      }
    }
    callApi(url,token){
        fetch(url,{
            method:'GET',
            headers:{
              'Content-Type': 'application/json',
              'Authorization':token
            }
        }).then((res)=>{
           return res.json();
        }).then(response=>{
            console.log(response);
        })
        .catch((error)=>{
          console.log(error);
        });
    }
    componentDidMount(){
      //let token = 'Bearer '+sessionStorage.getItem('token');
      //this.callApi(urls.url_get_keywords,token);
     // alert(123);
      //this.props.getKeywords();
      
    }
    onDeleteHandle = (id,event) => {
      event.preventDefault();
      let token = 'Bearer '+sessionStorage.getItem('token');
      let url = urls.url_get_deleteKeyword+`?id=${id}`;
      callApiAxios(url,'GET','',token).then((res)=>{
        if(res.data.status == 200){
          this.props.getKeywords();
      }
      });
    }
    showContentKeyword = (keywords) => {
        let result = null;
       if(keywords != null && keywords.length > 0){
            result = keywords.map((item,index)=>{
                return (
                    <tr key={index} >
                    <td>{item.keyword}</td>
                    <td>{item.type}</td>
                    <td>{item.vietnamese}</td>
                    <td>
                        <Link to ={`/addKeyword/${item.id}`} className='btn btn-warning' style={{marginRight:'5px'}}>Edit</Link>
                        <a href='' onClick={(e) =>this.onDeleteHandle(item.id,e)} className='btn btn-danger'>Delete</a>
                    </td>
                  </tr>
                )
            })
       }
       return result;
    }
    render(){
        return(
          
               
          <div className="outer-w3-agile col-xl">
      
        <h4 className="tittle-w3-agileits mb-4">Keyword for english</h4>
        <Link to='/addKeyword' class="btn btn-primary" style={{marginBottom:'10px'}}>Add new</Link>
          {/* Search-from */}
          <form action="#" method="post" className="form-inline mx-auto search-form">
                <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" required />
                <button className="btn btn-style my-2 my-sm-0" type="submit">Search</button>
              </form>
        <div className="container-fluid">
          <div className="row">
            <table className="table col-xl mr-xl-3">
              <thead>
                <tr>
                  <th scope="col">Keyword</th>
                  <th scope="col">keywordType</th>
                  <th scope="col">Viernames</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                  {this.showContentKeyword(this.props.keywords)}
                {/* <tr className="table-active">
                  <th scope="row">Active</th>
                  <td>Cell</td>
                  <td>Cell</td>
                  <td>Cell</td>
                </tr>
                <tr>
                  <th scope="row">Default</th>
                  <td>Cell</td>
                  <td>Cell</td>
                  <td>Cell</td>
                </tr>
                <tr className="table-primary">
                  <th scope="row">Primary</th>
                  <td>Cell</td>
                  <td>Cell</td>
                  <td>Cell</td>
                </tr>
                <tr className="table-warning">
                  <th scope="row">Secondary</th>
                  <td>Cell</td>
                  <td>Cell</td>
                  <td>Cell</td>
                </tr> */}
                
              </tbody>
            </table>
         
          </div>
        </div>
        
        </div> 
          
        )
    }
}

export default LoaderHOC(KeywordsComponent)