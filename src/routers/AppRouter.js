import React from "react";
import { BrowserRouter, Route, Switch, Link, NavLink } from "react-router-dom";
import Header from "../component/header";
import Show from "../component/show";
import Add from "../component/add";
import Edit from "../component/edit";

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={Show} exact = {true} />
        <Route path="/add" component={Add} />
        <Route path = "/edit/:id/:name" component = {Edit} />
      </Switch>
    </div>
  </BrowserRouter>
)

export default AppRouter; 
