import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Redirect,Route} from 'react-router-dom';



import MenuPage from './Partial/Menu.Page';
import FooterPage from './Partial/Footer.Page';
import HeaderPage from './Partial/Header.Page';


 
class LayoutPage extends Component {
  constructor(props){
    super(props);
  }
 
  showContentRoute = (routes) =>{
    
    var result = null;
    if(routes.length >0){
        result = routes.map((route,index)=>{
            return (
                <Route
                    key = {index} 
                    path={route.path}
                   
                    render={props => (
                      // pass the sub-routes down to keep nesting
                      <route.component {...props} routes={route.routes} />
                    )}  
                />
            );
        });
    }
    return result;
  }
  render() {
   
    const {isLogin} = this.props;
      console.log(isLogin);
    if(!isLogin){
      return(
        <Redirect push to ='/login'/>  
      )
    }
    return (
     
      <div>
       
        <div className="wrapper">
          {/* Sidebar Holder */}
          <MenuPage/>
          {/* Page Content Holder */}
          <div id="content">
            {/* top-bar */}
            <HeaderPage/>
            {/*// top-bar */}
            <div className="container-fluid" style={{marginBottom:'50vh'}}>
             
               
               
                      
                {this.showContentRoute(this.props.routes)}




               

              
            </div>



            {/* Copyright */}
            <FooterPage/>
            {/*// Copyright */}
          </div>
        </div>
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    isLogin:state.authencationReducer.isLogin
  }
}

export default connect(mapStateToProps)(LayoutPage);
