import React from 'react';
import ReactDom from 'react-dom';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom';

import Home from '../screens/Home'
import Add from '../screens/Add'


const App = () => {
    return (
        <Router className="App__container">
            <Switch>
                <Route exact path="/home">
                    <Home />
                </Route>
            </Switch>
            <Switch>
                <Route path="/home/add">
                    <Add />
                </Route>
            </Switch>
        </Router>
    );
}

ReactDom.render(<App />, document.getElementById('app'));