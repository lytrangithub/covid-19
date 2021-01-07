import React, { Component } from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Home from '../components/home/Home';
import ItemDetail from '../components/ItemDetail';


export default class RouterLink extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Switch>
                        <Route exact path="/">
                            <Home />
                        </Route>
                        <Route path="/chi-tiet/:slug-:id.html" component={ItemDetail}/> 
                    </Switch>
                </div>
            </Router>
        )
    }
}
