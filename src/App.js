import React from 'react'
import Header from './components/Header'
import { BrowserRouter as Router,Switch, Route } from "react-router-dom";
import {Container} from 'react-bootstrap';
import OpenAIFetch from './openai/OpenAIFetch';
import './index.css';
import LoginForm from './components/Login';
import Home from './components/Home';
import ground from './assets/images/1c.png';

function App() {
  return (
    <div style={{backgroundImage: `url("${ground}")` }}>
    <Container fixed>
      <Router>
        <Header />
        <Switch>
              <Route exact path="/">
                  <Home/>
              </Route>
              <Route exact path="/generator">
                <OpenAIFetch/>
              </Route>
              <Route exact path="/login">
                <LoginForm/>
              </Route>
         </Switch>
        </Router>
        <Router>
        </Router>
    </Container>
    </div>
  );
}

export default App;