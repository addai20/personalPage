import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from '../src/components/NavBar';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Container from 'react-bootstrap/Container'
import Home from './components/Home';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';



class App extends Component {
  render(){
    return(
      <Container>
      <NavBar/>
      <Router>
        <div>
          <Route exact path="/" component={Home} />
          <Route path="/portfolio" component={Portfolio} />
        </div>
      </Router>
      </Container>
    );
  }
}

export default App;


// <div className="App">
// <NavBar/>
//
// </div>
