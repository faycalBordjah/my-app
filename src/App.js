import React from 'react';
import './App.css';
import loadMovies from './api'
import Chat from "./components/Chat/Chat";
import Login from "./components/Login/login";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
/*
First exercise
 */
loadMovies();

//

const Home = () => {
    return (
        <div>
            <Link to="/">Home</Link>
        </div>
    );
};

const NavBar = (props) => {
    return (
        <nav>
            <ul className="navbar">
                <li>
                    <Link to="/chat">Chat</Link>
                </li>
                <li>
                    <Link to="/login">Login</Link>
                </li>
            </ul>
        </nav>
    );
}

function App() {
    return (
        <div>
            <NavBar />
            <hr />
            <Switch>
                <Route exact path="/chat" component={Chat} />
                <Route path="/login" component={Login} />
                <Route component={Home} />
            </Switch>
        </div>
    );
}

export default App;

