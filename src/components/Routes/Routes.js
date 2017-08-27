import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';
import NewLog from '../NewLog/NewLog';
import LogList from '../LogList/LogList';
class Routes extends Component {
    render() {
        return (
                <Switch>
                    <Route exact path='/' component={LogList}/>
                    <Route path='/newlog' component={NewLog}/>
                </Switch>
        );
    }
}
export default Routes
