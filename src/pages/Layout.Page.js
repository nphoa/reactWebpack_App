import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';



import MenuPage from './Partial/Menu.Page';
import FooterPage from './Partial/Footer.Page';
import HeaderPage from './Partial/Header.Page';
import '../public/js/Custom/customLayout';

class LayoutPage extends Component {
  render() {
    const {isLogin} = this.props;
    if(!isLogin){
      return(
        <Redirect to ='/login'/>  
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
            <div className="container-fluid">
              <div className="row">
                {/* Stats */}
                <div className="outer-w3-agile col-xl">
                      
                  




                </div>

              </div>
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
