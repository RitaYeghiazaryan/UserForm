import React from "react";
import { Component } from "react";
import User from "./User";

class Users extends Component {

  render() {
    if (this.props.users.length > 0)
      return (
        <div>
          {this.props.users.map((el) => (
            <User onDelete={this.props.onDelete} onEdit={this.props.onEdit} key={el.id} user={el} />
          ))}
        </div>
      );
    else
      return (
        <div className="user">
          <h3>User list is empty</h3>
        </div>
      );
  }
}

export default Users;
