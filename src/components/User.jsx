import React from "react";
import { Component } from "react";
import { IoCloseCircleSharp, IoHammerSharp } from "react-icons/io5";
import AddUser from "./AddUser";

class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editForm: false,
    };
  }
  user = this.props.user;
  render() {
    return (
      <div className="user">
        <div className="icons">
          <IoCloseCircleSharp
            className="deleete-icon"
            onClick={() => this.props.onDelete(this.user.id)}
          />
          <IoHammerSharp
            className="edit-icon"
            onClick={() =>
              this.setState({
                editForm: !this.state.editForm,
              })
            }
          />
        </div>
        <div className="userInfo">
          <h3>
            {this.user.firstName} {this.user.lastName}
          </h3>
          <p>{this.user.bio}</p>
          <b>{this.user.age}</b>
          <p>{this.user.isMarried ? "Yes" : "No"}</p>
        </div>
        {this.state.editForm && <AddUser user={this.user} onAdd={this.props.onEdit} />}
      </div>
    );
  }
}
export default User;
