import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../components/Home";
import Books from "../components/Books";
import Book from "../components/Book";
import NewBook from "../components/NewBook";
import Articles from "../components/Articles";
import Article from "../components/Article";
import SignUp from "../components/SignUp";
import Login from "../components/Login";
import Header from "../components/Header";
import Navbar from "../components/NavBar"
// import Button from "../components/Button"
// import Header from "../components/Header";
export default (
    <>
        <Navbar />
        <Router>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/books" exact component={Books} />
                <Route path="/book/:id" exact component={Book} />
                <Route path="/book" exact component={NewBook} />
                <Route path="/articles" exact component={Articles} />
                <Route path="/article/:id" exact component={Article} />
                <Route path="/Login" exact component={Login} />
                <Route path="/SignUp" exact component={SignUp} />
                {/* <Route path="/Header" exact component={Header} /> */}
                {/* <Route path="/Button" exact component={Button} /> */}
                {/* <Route path="/Header" exact component={Header} /> */}


            </Switch>
        </Router>
    </>
);