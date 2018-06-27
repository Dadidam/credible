import React, { Component } from 'react';
import Header from './Header';
import SideBarNav from './SideBarNav';
import HeaderNav from './HeaderNav';
import Content from './Content';
import Footer from './Footer';

import './reset.css';
import './App.css';
import '@progress/kendo-theme-default/dist/all.css';

class App extends Component {
  render() {
    return (
      <div id="app-root">
        <Header />
        <SideBarNav />
        <HeaderNav />
        <Content />
        <Footer />
      </div>
    );
  }
}

export default App;
