import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

class LoginPage extends Component {
  constructor(props){
    super(props);
    this.state = {
      email:'',
      password:''
    }
  }
  onChangeEvent = (event) =>{
    this.setState({
      [event.target.name]:event.target.value
    })
     
      
  }
  onSubmitForm = (event) => {
    event.preventDefault();
    console.log(this.state);
    //this.props.login(this.state);
  }
  render() {
    const { isLogin } = this.props;
    if (isLogin) {
      return (
        <Redirect to='/' />
      )
    }
    return (
      <div className="bg-page py-5">
        <div className="container">
          {/* main-heading */}
          <h2 className="main-title-w3layouts mb-2 text-center text-white">Login</h2>
          {/*// main-heading */}
          <div className="form-body-w3-agile text-center w-lg-50 w-sm-75 w-100 mx-auto mt-5" style={{ maxWidth: '50%' }}>
            <form onSubmit={this.onSubmitForm}>
              <div className="form-group">
                <label>Email address</label>
                <input type="email" className="form-control" placeholder="Enter email" required name="email" onChange={this.onChangeEvent}/>
              </div>
              <div className="form-group">
                <label>Password</label>
                <input type="password" className="form-control" placeholder="Password" required name="password" onChange={this.onChangeEvent} />
              </div>
              <div className="d-sm-flex justify-content-between">
                <div className="form-check col-md-6 text-sm-left text-center">
                  <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                  <label className="form-check-label" htmlFor="exampleCheck1">Remember me</label>
                </div>
                <div className="forgot col-md-6 text-sm-right text-center">
                  <a href="forgot.html">forgot password?</a>
                </div>
              </div>
              <button type="submit" className="btn btn-primary error-w3l-btn mt-sm-5 mt-3 px-4">Login</button>
            </form>
            <p className="paragraph-agileits-w3layouts mt-4">Don't have an account
                  <a href="register.html">Create an account</a>
            </p>
            <h1 className="paragraph-agileits-w3layouts mt-2">
              <a href="index.html">Back to Home</a>
            </h1>
          </div>
          {/* Copyright */}
          <div className="copyright-w3layouts py-xl-3 py-2 mt-xl-5 mt-4 text-center">
            <p>© 2018 Modernize . All Rights Reserved | Design by
                  <a href="http://w3layouts.com/"> W3layouts </a>
            </p>
          </div>
          {/*// Copyright */}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    isLogin:state.authencationReducer.isLogin
  }
}
const mapDispatchToProps = (dispatch,props) => {
  return {
    login: (data) => {
        dispatch(actions.login(data))
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(LoginPage);
