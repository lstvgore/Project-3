import React, { Component } from "react";
import { getFromStorage, setInStorage } from "../Utils/storage";
import Register from "./Register";


export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      token: "",
      signInError: "",
      signInEmail: "",
      signInPassword: "",
    };
    this.onTextboxChangeSignInEmail = this.onTextboxChangeSignInEmail.bind(
      this
    );
    this.onTextboxChangeSignInPassword = this.onTextboxChangeSignInPassword.bind(
      this
    );
    this.onSignIn = this.onSignIn.bind(this);
    this.logout = this.logout.bind(this);
  }

  componentDidMount() {
    const obj = getFromStorage("the_main_app");
    if (obj && obj.token) {
      const { token } = obj;
      fetch("/account/verify?token=" + token)
        .then((res) => res.json())
        .then((json) => {
          if (json.success) {
            this.setState({
              token,
              isLoading: false,
            });
          } else {
            this.setState({
              isLoading: false,
            });
          }
        });
    } else {
      this.setState({
        isLoading: false,
      });
    }
  }

  onTextboxChangeSignInEmail(event) {
    this.setState({
      signInEmail: event.target.value,
    });
  }
  onTextboxChangeSignInPassword(event) {
    this.setState({
      signInPassword: event.target.value,
    });
  }

  onSignIn() {
    const { signInEmail, signInPassword } = this.state;
    this.setState({
      isLoading: true,
    });

    fetch("/account/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: signInEmail,
        password: signInPassword,
      }),
    })
      .then((res) => res.json())
      .then((json) => {
        if (json.success) {
          setInStorage("the_main_app", { token: json.token });
          this.setState({
            signInError: json.message,
            isLoading: false,
            signInPassword: "",
            signInEmail: "",
            token: json.token,
          });
        } else {
          console.log("hello");
          this.setState({
            signInError: json.message,
            isLoading: false,
          });
        }
      });
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
    const {
      isLoading,
      token,
      signInError,
      signInEmail,
      signInPassword,
    } = this.state;
    if (isLoading) {
      return (
        <div>
          <p>ON the way</p>
        </div>
      );
    }
    if (!token) {
      return (
        <div>
          <div>
            {signInError ? <h1>{signInError}</h1> : null}
            <h1>Sign In</h1>
            <input
              type="email"
              placeholder="Enter your email"
              value={signInEmail}
              onChange={this.onTextboxChangeSignInEmail}
            />
            <br />
            <input
              type="password"
              placeholder="Enter your password"
              value={signInPassword}
              onChange={this.onTextboxChangeSignInPassword}
            />
            <br />
            
            <button onClick={this.onSignIn}>Sign In</button>
            
          </div>
        </div>
      );
    }

    return (
      <div>
        <h1>You are Logged In</h1>
        <button onClick={this.logout}>Log Out</button>
        
        
      </div>
    );
  }
}
