import React from 'react';
import ReactDom from 'react-dom';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom';
import Home from './components/Home'
import Add from './components/Add'
import Edit from './components/Edit'


const App = () => {
    return (
        <Router className="App__container">
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
            </Switch>
            <Switch>
                <Route path="/add">
                    <Add />
                </Route>
            </Switch>
            <Switch>
                <Route path="/edit/:id" children={<Edit />} />
            </Switch>
        </Router>
    );
}

ReactDom.render(<App />, document.getElementById('app'));