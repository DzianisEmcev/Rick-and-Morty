import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

import {BrowserRouter, Route} from "react-router-dom";
import {HomePage} from "./components/restrictedComponents/homeComponents/home";
import {CardsPage} from "./components/restrictedComponents/cardsComponents/cards";

function Navigation() {
    return (
        <div className="App">
            <BrowserRouter>
                <Route exact path="/c" component={CardsPage}/>
                <Route exact path="/" component={HomePage}/>
            </BrowserRouter>
        </div>
    );
}

export default Navigation;
