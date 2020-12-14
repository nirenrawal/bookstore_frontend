import React from 'react';
import {Switch, BrowserRouter as Router, Route,Link} from 'react-router-dom';

import './App.css';

import BookList from "./components/booklist/BookList";
import Header from "./components/header/Header";
import Cart from "./components/cart/Cart";

function App() {
  return (
    <div className="App">
        <Router>
        <Header/>

        <Switch>
            <Route exact path="/" >
                <BookList />
            </Route>
            <Route path="/cart">
                <Cart />
            </Route>
        </Switch>
        </Router>


    </div>
  );
}

export default App;
