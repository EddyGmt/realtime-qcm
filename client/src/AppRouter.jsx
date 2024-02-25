import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Room from './components/Room';
import App from "./App";

const AppRouter = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={App} />
                <Route path="/salle" component={Room} />
            </Switch>
        </Router>
    );
};

export default AppRouter;
