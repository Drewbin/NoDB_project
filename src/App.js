import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import TaggedGames from './components/favorites/TaggedGames'


class App extends Component {
  state = {

  };



  render() {
    return (
      <div className="App">
        <Header />
        <TaggedGames />
        <Footer />
      </div>
    );
  }
}

export default App;







//Key: 35519FF12F19250CB186F3EA7C79B45E

//Domain Name: localhost:3002