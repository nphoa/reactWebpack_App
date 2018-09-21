import React, { Component } from 'react';





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
                  Components
                      <i className="fas fa-angle-down fa-pull-right" />
                </a>
                <ul className="collapse list-unstyled" id="homeSubmenu">
                  <li>
                    <a href="cards.html">Cards</a>
                  </li>
                  <li>
                    <a href="carousels.html">Carousels</a>
                  </li>
                  <li>
                    <a href="forms.html">Forms</a>
                  </li>
                  <li>
                    <a href="modals.html">Modals</a>
                  </li>
                  <li>
                    <a href="tables.html">Tables</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="charts.html">
                  <i className="fas fa-chart-pie" />
                  Charts
                    </a>
              </li>
              <li>
                <a href="grids.html">
                  <i className="fas fa-th" />
                  Grid Layouts
                    </a>
              </li>
              <li>
                <a href="#pageSubmenu1" data-toggle="collapse" aria-expanded="false">
                  <i className="far fa-file" />
                  Pages
                      <i className="fas fa-angle-down fa-pull-right" />
                </a>
                <ul className="collapse list-unstyled" id="pageSubmenu1">
                  <li>
                    <a href="404.html">404</a>
                  </li>
                  <li>
                    <a href="500.html">500</a>
                  </li>
                  <li>
                    <a href="blank.html">Blank</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="mailbox.html">
                  <i className="far fa-envelope" />
                  Mailbox
                      <span className="badge badge-secondary float-md-right bg-danger">5 New</span>
                </a>
              </li>
              <li>
                <a href="widgets.html">
                  <i className="far fa-window-restore" />
                  Widgets
                    </a>
              </li>
              <li>
                <a href="pricing.html">
                  <i className="fas fa-table" />
                  Pricing Tables
                    </a>
              </li>
              <li>
                <a href="#pageSubmenu3" data-toggle="collapse" aria-expanded="false">
                  <i className="fas fa-users" />
                  User
                      <i className="fas fa-angle-down fa-pull-right" />
                </a>
                <ul className="collapse list-unstyled" id="pageSubmenu3">
                  <li>
                    <a href="login.html">Login</a>
                  </li>
                  <li>
                    <a href="register.html">Register</a>
                  </li>
                  <li>
                    <a href="forgot.html">Forgot password</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="maps.html">
                  <i className="far fa-map" />
                  Maps
                    </a>
              </li>
            </ul>
          </nav>     
        );
    }
}

export default MenuPage;
