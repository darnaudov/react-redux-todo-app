import React from 'react';
import { Route } from 'react-router-dom';
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
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
