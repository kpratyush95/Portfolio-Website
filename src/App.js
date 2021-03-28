import React from 'react'
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// Components
import './App.css';
import Mynavbar from "./components/My_Navbar/mynavbar.component"
import MyCarousal from './components/Carousel/my-carousel.component'
import MyTitleMessage from './components/Message/title-message.component'
import About from './pages/About/about.components'

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
      <About/>
    </div>
  );
}

export default App;
