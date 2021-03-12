import React from "react";
import LogoutButton from "../Components/LogoutButton";
import Login from "./Login";
import Register from "./Register";

const Home = () => {
  return (
    <div>
      <Login />
      <Register />
      <LogoutButton />
      <h1>Please work</h1>
    </div>
  );
};

export default Home;
