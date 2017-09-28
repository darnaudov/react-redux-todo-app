import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import Home from '../home/Home';
import About from '../about/About';
import './App.css';

const App = () => {
  return (
    <div className="app">
      <Header />
      <div className="content">
        <Switch>
          <Route path="/about" component={About} />
          <Route path="/home/:filter?" exact component={Home} />
          <Redirect from="/" to="/home" />
        </Switch>
      </div>
      <Footer />
    </div>
  );
}

export default App;
