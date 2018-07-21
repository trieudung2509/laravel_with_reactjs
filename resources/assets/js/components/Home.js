import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import routes from './../routes';
class Home extends Component {
    render() {
        return (
            <Router>
                <div>
                    {/* Header */}
                    <Header />
                    {/* <HomePage /> */}
                    <Switch>
                        { this.showContentMenus(routes) }
                    </Switch>
                    {/* Footer */}
                    <Footer />


                </div>
            </Router>
        );
    }
    showContentMenus (routes) {
        var result = null;
        if (routes.length > 0) {
            result = routes.map((route, index) => {
                return (
                    <Route
                        key={index}
                        path={route.path}
                        exact={route.exact}
                        component={route.main}
                    />
                )
            });
        }
        return result;
    }
}


export default Home;