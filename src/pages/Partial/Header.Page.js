import React, { Component } from 'react';

class HeaderPage extends Component {
    render(){
        return(
            <nav className="navbar navbar-default mb-xl-5 mb-4">
            <div className="container-fluid">
              <div className="navbar-header">
                <button type="button" id="sidebarCollapse" className="btn btn-info navbar-btn">
                  <i className="fas fa-bars" />
                </button>
              </div>
              {/* Search-from */}
              <form action="#" method="post" className="form-inline mx-auto search-form">
                <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" required />
                <button className="btn btn-style my-2 my-sm-0" type="submit">Search</button>
              </form>
              {/*// Search-from */}
              <ul className="top-icons-agileits-w3layouts float-right">
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <i className="far fa-bell" />
                    <span className="badge">4</span>
                  </a>
                  <div className="dropdown-menu top-grid-scroll drop-1">
                    <h3 className="sub-title-w3-agileits">User notifications</h3>
                    <a href="#" className="dropdown-item mt-3">
                      <div className="notif-img-agileinfo">
                        <img src="images/clone.jpg" className="img-fluid" alt="Responsive image" />
                      </div>
                      <div className="notif-content-wthree">
                        <p className="paragraph-agileits-w3layouts py-2">
                          <span className="text-diff">John Doe</span> Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.</p>
                        <h6>4 mins ago</h6>
                      </div>
                    </a>
                    <a href="#" className="dropdown-item mt-3">
                      <div className="notif-img-agileinfo">
                        <img src="images/clone.jpg" className="img-fluid" alt="Responsive image" />
                      </div>
                      <div className="notif-content-wthree">
                        <p className="paragraph-agileits-w3layouts py-2">
                          <span className="text-diff">Diana</span> Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.</p>
                        <h6>6 mins ago</h6>
                      </div>
                    </a>
                    <a href="#" className="dropdown-item mt-3">
                      <div className="notif-img-agileinfo">
                        <img src="images/clone.jpg" className="img-fluid" alt="Responsive image" />
                      </div>
                      <div className="notif-content-wthree">
                        <p className="paragraph-agileits-w3layouts py-2">
                          <span className="text-diff">Steffie</span> Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.</p>
                        <h6>12 mins ago</h6>
                      </div>
                    </a>
                    <a href="#" className="dropdown-item mt-3">
                      <div className="notif-img-agileinfo">
                        <img src="images/clone.jpg" className="img-fluid" alt="Responsive image" />
                      </div>
                      <div className="notif-content-wthree">
                        <p className="paragraph-agileits-w3layouts py-2">
                          <span className="text-diff">Jack</span> Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.</p>
                        <h6>1 days ago</h6>
                      </div>
                    </a>
                    <div className="dropdown-divider" />
                    <a className="dropdown-item" href="#">view all notifications</a>
                  </div>
                </li>
                <li className="nav-item dropdown mx-3">
                  <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown1" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <i className="fas fa-spinner" />
                  </a>
                  <div className="dropdown-menu top-grid-scroll drop-2">
                    <h3 className="sub-title-w3-agileits">Shortcuts</h3>
                    <a href="#" className="dropdown-item mt-3">
                      <h4>
                        <i className="fas fa-chart-pie mr-3" />Sed feugiat</h4>
                    </a>
                    <a href="#" className="dropdown-item mt-3">
                      <h4>
                        <i className="fab fa-connectdevelop mr-3" />Aliquam sed</h4>
                    </a>
                    <a href="#" className="dropdown-item mt-3">
                      <h4>
                        <i className="fas fa-tasks mr-3" />Lorem ipsum</h4>
                    </a>
                    <a href="#" className="dropdown-item mt-3">
                      <h4>
                        <i className="fab fa-superpowers mr-3" />Cras rutrum</h4>
                    </a>
                  </div>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown2" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <i className="far fa-user" />
                  </a>
                  <div className="dropdown-menu drop-3">
                    <div className="profile d-flex mr-o">
                      <div className="profile-l align-self-center">
                        <img src="images/profile.jpg" className="img-fluid mb-3" alt="Responsive image" />
                      </div>
                      <div className="profile-r align-self-center">
                        <h3 className="sub-title-w3-agileits">Will Smith</h3>
                        <a href="mailto:info@example.com">info@example.com</a>
                      </div>
                    </div>
                    <a href="#" className="dropdown-item mt-3">
                      <h4>
                        <i className="far fa-user mr-3" />My Profile</h4>
                    </a>
                    <a href="#" className="dropdown-item mt-3">
                      <h4>
                        <i className="fas fa-link mr-3" />Activity</h4>
                    </a>
                    <a href="#" className="dropdown-item mt-3">
                      <h4>
                        <i className="far fa-envelope mr-3" />Messages</h4>
                    </a>
                    <a href="#" className="dropdown-item mt-3">
                      <h4>
                        <i className="far fa-question-circle mr-3" />Faq</h4>
                    </a>
                    <a href="#" className="dropdown-item mt-3">
                      <h4>
                        <i className="far fa-thumbs-up mr-3" />Support</h4>
                    </a>
                    <div className="dropdown-divider" />
                    <a className="dropdown-item" href="login.html">Logout</a>
                  </div>
                </li>
              </ul>
            </div>
          </nav>
        )
    }
}

export default HeaderPage