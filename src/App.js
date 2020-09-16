import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Start from './components/Start/Start'
import ChatsRoom from './components/Chats-room/ChatsRoom'
import Room from './components/Room/Room'
import NotFound from './components/NotFound/NotFound'
import './App.scss'
const App = () => (
    <Router>
        <Switch>
            <Route path="/" exact component={Start} />
            <Route path="/chats-room" component={ChatsRoom} />
            <Route path="/room/:name" component={Room} />
            <Route component={NotFound} />
        </Switch>
    </Router>
);

export default App;