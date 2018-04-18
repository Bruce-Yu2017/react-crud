import React from "react";
import { BrowserRouter, Route, Switch, Link, NavLink } from "react-router-dom";
import http from "../http/http";
import Form from "./form";

export default class Edit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ""
    }
  }
  componentWillMount() {
    this.setState(() => ({
      name: this.props.match.params.name
    }))
  }
  render() {
    return (
      <div>
        <NavLink to="/">Home</NavLink>
        <p>Edit this author:</p>
        <Form author = {this.state.name} edit = {true} {...this.props}/>
      </div>
    )
  }
}