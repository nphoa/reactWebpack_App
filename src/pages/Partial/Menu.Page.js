import React, { Component } from 'react';
import {Link, NavLink} from 'react-router-dom';
import * as urls from '../../API/urls';
import axios from '../../API/callApi';



class MenuPage extends Component {
    constructor(props){
      super(props);
      this.state={
        sidebar:[]
      }
    }
 
    componentDidMount(){
      this.getSidebar();
    }
   
    getSidebar = () => {
      let token = 'Bearer '+sessionStorage.getItem('token');
      axios(urls.url_get_sidebar,'GET',null,token).then((res)=>{
        if(res.data.status == 200){
          this.setState({
            sidebar:res.data.data
          });
        }
      });
    }
    generateSidebar = (sidebars) => {
      let result = null;
      result = sidebars.map((item,index)=>{
          return (
            <li key={index}>
            {/* <Link to={item.url}>{item.name}</Link> */}
            <Link to={item.url}>{item.name}</Link>
            </li>
          )
      });
      return result;
    }
    render() {
        return (
            <nav id="sidebar">
            <div className="sidebar-header">
              <h1>
                <a href="index.html">React UI</a>
              </h1>
              <span>M</span>
            </div>
            <div className="profile-bg" />
            <ul className="list-unstyled components">
              <li className="active">
                <a href="index.html">
                  <i className="fas fa-th-large" />
                  Dashboard
                    </a>
              </li>
              <li>
                <a href="#homeSubmenu" data-toggle="collapse" aria-expanded="false">
                  <i className="fas fa-laptop" />
                  English
                      <i className="fas fa-angle-down fa-pull-right" />
                </a>
                <ul className="collapse list-unstyled" id="homeSubmenu">
                 
                   
                    {
                      this.generateSidebar(this.state.sidebar)
                    }
                  
                </ul>
              </li>
             
            </ul>
          </nav>     
        );
    }
}

export default MenuPage;
