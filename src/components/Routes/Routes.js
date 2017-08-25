import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom'
import About from '../About/About';
import Home from '../Home/Home';
class Routes extends Component {
    render() {
        return (
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route path='/about' component={About}/>
                </Switch>
        );
    }
}
export default Routes
