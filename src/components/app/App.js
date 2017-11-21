import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import Header from '../Header';
import Footer from '../Footer';
import Home from '../Home';
import About from '../About';
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
