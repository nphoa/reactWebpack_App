import React, { Component } from 'react';
import { Link,Redirect} from 'react-router-dom';
import * as urls from '../../API/urls';
import callApiAxios from '../../API/callApi';
import LoaderHOC from '../HoCs/LoadingHoC.Component.js';
import Pagination from '../Pagination.Component';
import { delay } from 'redux-saga';
class KeywordsComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      keyword:'',
      type:'',
      vietnamese:'',
    }
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
      if(this.props.match.url != prevProps.match.url){
        console.log('hop le và thực hiện side effect');
        this.props.getKeywords(null,this.props.match.params.page);
      }
    console.groupEnd();
    
  }

  componentDidMount(){
    console.log('componentDidMount');
    this.props.getKeywordTypes();   
    this.props.getKeywords(null,this.props.match.params.page); 
    
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
        this.props.getKeywords();
      }
    });
  }
  showContentKeyword = (keywords) => {
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
  onChangeEventForm = (e) => {
      this.setState({
        [e.target.name] : e.target.value
      });
  }
  onSubmitSearchForm = (event) => {
    event.preventDefault();
    this.props.getKeywords(this.state);

  }
  getUrlSearch = () => {
    let {keyword,vietnamese,type} = this.state;
    let querySearch = '';
    if(keyword != ''){
      querySearch  = querySearch + `?keyword=${keyword}`;
    }
    if(type != ''){
      querySearch  = querySearch + `?type=${type}`;
    }
    if(vietnamese != ''){
      querySearch  = querySearch + `?vietnamese=${vietnamese}`;
    }
    return querySearch;
  }
  mapPager(pages){
    let result = null;
    if(pages!= undefined || pages!= null){
        result = pages.map((item) =>{
          return (
            <div key={item}>{item}</div>

          )
        })
    }
    return result;
  }
  onChangePage(pageOfItems) {
    // update state with new page of items
    this.setState({ pageOfItems: pageOfItems });
}
  render() {
    console.group('render view');
      console.log('render view');
      console.log(this.props.list);
    console.groupEnd('End');
    return (
    
      <div className="row">



        <div className="outer-w3-agile col-xl-5" style={{marginBottom:'15px'}}>
          <h4 className="tittle-w3-agileits mb-4">Search</h4>
          <form onSubmit={this.onSubmitSearchForm}>
            <div className="form-group row">
              <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Keyowrd</label>
              <div className="col-sm-8">
                <input type="text" className="form-control" name="keyword" onChange={this.onChangeEventForm} />
              </div>
            </div>
            <div className="form-group row">
              <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Type</label>
              <div className="col-sm-8">
                <select className="form-control" name="type" onChange={this.onChangeEventForm}>
                   {
                     this.props.keywordTypes.map((item,index)=>{
                       return(
                         <option key={index} value={item.id}>{item.type}</option>
                       )
                     })
                   }
                </select>
              </div>
            </div>
            <div className="form-group row">
              <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Vietnamese</label>
              <div className="col-sm-8">
                <textarea type="text" className="form-control"  name="vietnamese"onChange={this.onChangeEventForm}/>
              </div>
            </div>

            <button type="submit" className="btn btn-primary" style={{ marginRight: '15px' }}>Search</button>
    
          </form>
        </div>



        <div className="outer-w3-agile col-xl-8">

          <h4 className="tittle-w3-agileits mb-4">Keyword for english</h4>
          <Link to='/addKeyword' className="btn btn-primary" style={{ marginBottom: '10px' }}>Add new</Link>

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
                  {this.showContentKeyword(this.props.list)}
                </tbody>
              </table>
                   
              

                 <div className="container">
                <div className="text-center">
                    <h1>React - Pagination Example with logic like Google</h1>

                    <Pagination items={this.props.list} pager = {this.props.pager} onChangePage={this.onChangePage} />
                </div>
            </div> 
            </div>
          </div>





        </div>


      </div>





    )
  }
}

export default KeywordsComponent