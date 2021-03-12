import React, { Component } from "react";
import { getFromStorage } from "../Utils/storage";

export default class LogoutButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      token: "",
    };
    this.logout = this.logout.bind(this);
  }
  logout() {
    this.setState({
      isLoading: true,
    });
    const obj = getFromStorage("the_main_app");
    if (obj && obj.token) {
      const { token } = obj;
      const query = "/account/logout?token=" + token;
      console.log(query);
      fetch(query)
        .then((res) => res.json())
        .then((json) => {
          if (json.success) {
            this.setState({
              token: "",
              isLoading: false,
            });
          } else {
            this.setState(
              {
                isLoading: false,
              },
              console.log("first else")
            );
          }
        });
    } else {
      console.log("second else");
      this.setState({
        isLoading: false,
      });
    }
  }
  render() {
    return (
      <div>
        <button onClick={this.logout}>Log Out</button>
      </div>
    );
  }
}
