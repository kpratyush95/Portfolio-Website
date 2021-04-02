import React from 'react'
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Fade from "react-reveal/Fade";
import { Parallax } from "react-parallax";
import Container from "react-bootstrap/Container"
// Components
import './App.css';
import Mynavbar from "./components/My_Navbar/mynavbar.component"
import MyCarousal from './components/Carousel/my-carousel.component'
import MyTitleMessage from './components/Message/title-message.component'
import About from './pages/About/about.components'
import Projects from './pages/Projects/projects.components'


const App = () => {
  return (
    <div className="App" style={{position:"relative"}}>
      <Router>
          <Mynavbar/>
      <Switch>
        <Route path ='/' />
      </Switch>
      </Router>
      <MyCarousal/>
      <MyTitleMessage/>
      <div>
        <Parallax blur={{ min: -30, max: 30 }} bgImage={require("./assets/img/parallex/background.webp")} bgImageAlt="" strength={-200}>
            <div>

                <Container className="container-box rounded">
                    <Fade duration={500}>
                        <About/>
                    </Fade>
                </Container>
            </div>
        </Parallax>
      </div>
      <Projects/>
    </div>
  );
}

export default App;
