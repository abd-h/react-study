import React, { Component } from 'react';
import classes from "../Users.module.css";
class User extends Component {
  constructor() {
    super();
  }

  componentWillUnmount() {
    console.log("component will unmount");
  }
  render() {
    return <li className={classes.user}>{this.props.name}</li>;
  }
};

export default User;