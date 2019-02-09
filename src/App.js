import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

import Header from './components/header/Header';
import Footer from './components/footer/Footer';



class App extends Component {
  state = {

  };



  render() {
    return (
      <div className="App">
        <Header />
        <Footer />
      </div>
    );
  }
}

export default App;







// API key : a9c2279ff21a4950efa962c92ff71cd093feb005