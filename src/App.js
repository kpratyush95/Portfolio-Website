import React from 'react'
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// Components
import './App.css';
import Mynavbar from "./components/My_Navbar/mynavbar.component"
import MyCarousal from './components/Carousel/my-carousel.component'
import MyTitleMessage from './components/Message/title-message.component'


const App = () => {
  return (
    <div className="App">
  
      <Router>
          <Mynavbar/>
      <Switch>
        <Route path ='/' />
      </Switch>
      </Router>
      <MyCarousal/>
      <MyTitleMessage/>
    </div>
  );
}

export default App;
