import React, { Component } from 'react';
import routers from './../../routes';
import { Switch, Route, BrowserRouter, HashRouter } from 'react-router-dom';


import '../../public/css/bar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../public/css/style.css';
import '../../public/css/style4.css';
import '../../public/css/fontawesome-all.css';
import '../../public/js/script';
import 'bootstrap/dist/js/bootstrap.min.js';
import WOW from 'wow.js';
import 'animate.css';



class App extends Component {
    componentWillMount() {
        new WOW().init();
    }
    showContentRoute = (routes) => {

        var result = null;
        if (routes.length > 0) {
            result = routes.map((route, index) => {
                return (
                    <Route
                        key={index}
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
        return (
            // <FlipComponent/>
            <BrowserRouter>
                    <Switch>
                        {this.showContentRoute(routers)}
                    </Switch>
            </BrowserRouter>
        )
    }

}


export default App;

