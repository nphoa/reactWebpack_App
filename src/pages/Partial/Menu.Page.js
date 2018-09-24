import React, { Component } from 'react';
import {Link} from 'react-router-dom';




class MenuPage extends Component {
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
                  <li>
                    <Link to='/keywords'>Keywords</Link>
                  </li>
                </ul>
              </li>
             
            </ul>
          </nav>     
        );
    }
}

export default MenuPage;
