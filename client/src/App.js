import { React } from 'react';
import "./App.css";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './Components/NavBar';

function App() {
  return (
    <Router>
      <Navbar/>
      <Login />
      <Register />
        <Switch>
          <Route path='/' exact/>
        </Switch>
    </Router>
  );
}

export default App;
