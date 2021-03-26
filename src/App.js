import React from 'react'

// Components
import Mynavbar from "./components/My_Navbar/mynavbar.component"
import './App.css';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const App = () => {
  return (
    <div className="App">
  
      <Router>
          <Mynavbar/>
      <Switch>
        <Route path ='/' />
      </Switch>
      </Router>
      
      My Portfolio
    </div>
  );
}

export default App;
