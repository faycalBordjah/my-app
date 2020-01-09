import React from 'react';
import './App.css';
import loadMovies from './api'
import Chat from "./components/Chat/Chat";

/*
First exercise
 */
loadMovies();

//

function App() {
    return (
            <div className="App">
                <Chat/>
            </div>

    );
}

export default App;
