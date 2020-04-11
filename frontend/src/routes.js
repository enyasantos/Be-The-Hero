import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import NewIncident from './pages/NewIncident';
import Profile from './pages/Profile';
import Logon from './pages/Logon';
import Register from './pages/Register';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Logon} />
                <Route path="/register" component={Register} />

                <Route path="/profile" component={Profile} />
                <Route path="/incidents/new" component={NewIncident} />
            </Switch>
        </BrowserRouter>
    )
}