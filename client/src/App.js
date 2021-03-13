import { React } from 'react';
import "./App.css";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Home from "./Pages/Home"
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './Components/NavBar';

function App() {
  return (
    <Router>
      <Navbar/>
        <Switch>
          <Route path='/Login' component={Login}/>
          <Route path='/Register' component={Register}/>
          <Route exact path='/' component={Home}/>
        </Switch>
    </Router>
  );
}

export default App;
