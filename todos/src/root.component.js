import React from "react";
import { BrowserRouter, Switch, Route, Redirect, Link } from "react-router-dom"
import Home from "./home"
import About from "./about"

export default function Root (props) {
  console.log(props)
  return (
    <div>
      <BrowserRouter basename="/todos">
        <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
            <Redirect to="/home"></Redirect>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}
