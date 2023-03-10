import React from "react";
import { Component } from "react";
class AddUser extends Component {
  userAdd = {};
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      bio: "",
      age: "",
      isMarried: false,
    };
  }
  render() {
    return (
      <div className="formWrapper">
        <h2 className="formTitle">adding new user</h2>
        <form className="form" ref={(el) => (this.myForm = el)}>
          <input
            placeholder="Your Firstname"
            onChange={(e) => this.setState({ firstName: e.target.value })}
          />
          <input
            placeholder="Your  Lastname"
            onChange={(e) => this.setState({ lastName: e.target.value })}
          />
          <textarea
            placeholder="About you"
            onChange={(e) => this.setState({ bio: e.target.value })}
          />
          <input
            placeholder="Your age"
            onChange={(e) => this.setState({ age: e.target.value })}
          />
          <div className="chexkboxWrapper">
            <label htmlFor="isHappy">Are you married? </label>
            <input
              type="checkbox"
              id="isHappy"
              onChange={(e) => this.setState({ isMarried: e.target.checked })}
            />
          </div>
          <button
            type="button"
            onClick={() => {
              this.myForm.reset();
              this.userAdd = {
                firstName: this.state.firstName,
                lastName: this.state.lastName,
                bio: this.state.bio,
                age: this.state.age,
                isMarried: this.state.isMarried,
              };
              if (this.props.user) {
                  this.userAdd.id = this.props.user.id;

              }
              this.props.onAdd(this.userAdd);
            }}
          >
            send
          </button>
        </form>
      </div>
    );
  }
}
export default AddUser;
