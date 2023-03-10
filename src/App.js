import React, { Component } from "react";
import Users from "./components/Users";
import AddUser from "./components/AddUser";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [
        {
          id: 1,
          firstName: "Rita",
          lastName: "Yeghiazaryan",
          bio: "lorem ipssum ghdjksj fhdj skfjb gfdkslfksdhge rhiufbgxfc fghgbvfcd",
          age: 25,
          isMarried: false,
        },
        {
          id: 2,
          firstName: "Anna",
          lastName: "Aghababyan",
          bio: "lorem ipssum",
          age: 10,
          isMarried: false,
        },
      ],
    };
    this.addUser = this.addUser.bind(this);
    this.deleteUser = this.deleteUser.bind(this);
    this.editUser = this.editUser.bind(this);
  }
  render() {
    return (
      <div className="appWrapper">
        <main>
          <Users
            users={this.state.users}
            onDelete={this.deleteUser}
            onEdit={this.editUser}
          />
        </main>

        <aside>
          <AddUser onAdd={this.addUser} />
        </aside>
      </div>
    );
  }
  deleteUser(id) {
    this.setState({
      users: this.state.users.filter((el) => el.id !== id),
    });
  }
  editUser(user) {
    let allUsers = this.state.users;
    allUsers[user.id - 1] = user;
    this.setState({users:[]},()=>{
      this.setState({users:[...allUsers]})
    })
  }
  addUser(user) {
    const id = this.state.users.length + 1;
    this.setState({ users: [...this.state.users, { id, ...user }] });
  }
}

export default App;
