import React from "react";
import { BrowserRouter, Route, Switch, Link, NavLink } from "react-router-dom";

export default class NameList extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    // console.log(this.props.authorName);
    return(
      <table>
        <tbody>
          <tr>
            <td>{this.props.authorName.name}</td>
            <td>----</td>
            <td>
              <Link to={`/edit/${this.props.authorName._id}/${this.props.authorName.name}`}><button>Edit</button></Link></td>
            <td>
              <button 
              onClick = {() => {
                  this.props.deleteName(this.props.authorName._id)
              }}
              >
              Delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>
      
    )
  }
}