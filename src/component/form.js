import React from "react";
import { BrowserRouter, Route, Switch, Link, NavLink } from "react-router-dom";  
import http from "../http/http";
export default class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      error: false
    }
  }
  
  componentWillMount() {
    this.props.author ? this.setState(() => ({ name: this.props.author})) : false;
  }
  
  onSubmit = (e) => {
    e.preventDefault();
    // console.log(e.target.elements.author.value)
    if(!this.state.name) {
      this.setState(() => ({
        error: true
      }))
    }
    else {
      this.setState(() => ({
        error: false
      }))
      if(this.props.add) {
        http.addName(this.state.name);
      }
      else if(this.props.edit) {
        http.editName(this.props.match.params.id, this.state.name);
      }
      this.props.history.push("/");
      

    }
  }

  onNameChange = (e) => {
    const name = e.target.value;
    // console.log(e.value)
    this.setState(() => ({name}));
  }
  render() {
    return (
      <div>
        {this.state.error && <p>Author's name is required.</p>}
        <form onSubmit = {this.onSubmit}>
          <label>Name: </label>
          <input type="text" 
            name = "author"
            placeholder = "Name"
            value = {this.state.name}
            autoFocus
            onChange = {this.onNameChange}
          />
          <button>Submit</button>
        </form>
      </div>
    )
  }
}