import React from 'react';
import './App.css';
import {
    HashRouter,
    Route,
} from 'react-router-dom';

import Home from "./components/home";
import Task01 from "./components/task01";

function App() {
    return (
        <HashRouter>
            <Route exact path='/' component={Home}/>
            {/*<Route path='/' component={Task01}/>*/}
        </HashRouter>
    );
}

export default App;