import React from "react";
import { BrowserRouter, Route, Switch, Link, NavLink } from "react-router-dom"; 
import Form from "../component/form"; 

export default class Add extends React.Component {
  render() {
    return (
      <div>
        <NavLink to = "/">Home</NavLink>
        <p>Add a new author:</p>
        <Form add = {true} {...this.props}/>
      </div>
    )
  }
}