import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import { BrowserRouter as Router,Switch, Route } from "react-router-dom";
import {Container} from 'react-bootstrap';
import ImageGenerator from './openai/ImageGenerator';
import './index.css';
import LoginForm from './pages/Login';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import ground from './assets/images/_n.jpeg';
import Gallery from './pages/Gallery'
import Register from './pages/Register'
import Profile from './pages/Profile'
function App() {
  return (
    <div style={{backgroundImage: `url("${ground}")`, justifyContent:'center' }}>
    <Container fixed>
      <Router>
        <Header />
        <Switch>
              <Route exact path="/">
                  <Home/>
              </Route>
              <Route exact path="/generator">
                <ImageGenerator/>
              </Route>
              <Route exact path="/login">
                <LoginForm/>
              </Route>
              <Route exact path="/register">
                <Register/>
              </Route>
              <Route exact path="/gallery">
                <Gallery/>
              </Route>
              <Route exact path="/profile">
                <Profile/>
              </Route>
              <Route exact path="/about-us">
                <AboutUs/>
              </Route>        

         </Switch>
        </Router>
        <Footer/>
    </Container>
    </div>
  );
}

export default App;