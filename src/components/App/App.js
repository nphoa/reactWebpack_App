import React, { Component } from 'react';
import routers from './../../routes';
import { Switch, Route, BrowserRouter as Router, HashRouter } from 'react-router-dom';


import '../../public/css/bar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../public/css/style.css';
import '../../public/css/style4.css';
import '../../public/css/fontawesome-all.css';
import '../../public/js/script';
import 'bootstrap/dist/js/bootstrap.min.js';


class App extends Component {
    showContentRoute = (routes) => {

        var result = null;
        if (routes.length > 0) {
            result = routes.map((route, index) => {
                return (
                    <Route
                        key={index}
                        path={route.path}
                        exact={route.exact}
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
        return (
            <HashRouter>
                <div>
                    {this.showContentRoute(routers)}
                </div>

            </HashRouter>
        )
    }

}

export default App;
