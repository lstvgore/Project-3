import { React } from 'react';
import "./App.css";
// import Register from "./Pages/Register";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './Components/NavBar';

function App() {
  return (
    <Router>
      <Navbar/> 
        <Switch>
          <Route path='/' exact/>
        </Switch>
    </Router>
  );
}

export default App;
