import React, { Component } from 'react';
import Header from './Header';
import Navigation from './Navigation';
import Content from './Content';

import './reset.css';
import './App.css';
import '@progress/kendo-theme-default/dist/all.css';

class App extends Component {
  render() {
    return (
      <div className="app-root">
        <Header />
        <Navigation />
        <Content />
      </div>
    );
  }
}

export default App;
