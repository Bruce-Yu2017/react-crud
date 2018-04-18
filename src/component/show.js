import React from "react";
import { BrowserRouter, Route, Switch, Link, NavLink } from "react-router-dom";
import http from "../http/http";
import NameList from "../component/nameList";


export default class Show extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: []
    }
  }
  componentWillMount = () => {
    http.getAllName().then((res) => {
      // console.log('res: ', res);
      this.setState({ name: res });
    });
  }

  deleteName = (id) => {
    
    http.delete(id).then((res) => {
      this.componentWillMount();
    })
  }
  render() {

    return (
      <div>
        <NavLink to="/add">Add an author</NavLink>
        {this.state.name.length !== 0 && <div>
          <p>We have quotes by: </p>
          <table>
            <tbody>
              <tr>
                <th>Author</th>
                <th>Actions available</th>
              </tr>
            </tbody>
          </table>
          {this.state.name.map((n, index) => (
            <NameList
              key={index}
              authorName={n}
              deleteName = {this.deleteName}
            />
          ))}
        </div>}
      </div>
    )
  }
}