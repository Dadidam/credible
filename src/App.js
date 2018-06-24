import React, { Component } from 'react';
import { Button } from '@progress/kendo-react-buttons';

import './reset.css';
import './App.css';
// import '@progress/kendo-theme-bootstrap/dist/all.css';
import '@progress/kendo-theme-default/dist/all.css';

class App extends Component {
  render() {
    return (
      <div className="app-root">
        <header>
          <div id="partner-logo">
            {/* <img src="./img/partner-logo.png" /> */}
            {/* <img src="./img/credible.png" /> */}
            <img src="./img/sample-partner.jpg" alt="" />
          </div>
          <div id="header-content">
            <div id="header-top">
              <div id="partner-name">
                <h1>Partner Name</h1>
              </div>
              <div id="logout-button">
                <Button look="outline">Logout</Button>
              </div>
              <div id="help-button">
                <i class="fas fa-question-circle fa-lg"></i>
              </div>
              <div id="service-logo">
                <img src="./img/logo.png" alt="" />
              </div>
            </div>
            <div id="header-bottom">
              <div id="header-menu">Home | Client | Employee</div>
              <div id="user-info">Logged in as: username 11:25 AM EST</div>
            </div>
          </div>
        </header>
        <nav>
          <ul>
            <li>Overview</li>
            <li>1st Available</li>
            <li>Amendments</li>
            <li>Tx Plus</li>
            <li>Attachments</li>
            <li>Allergy</li>
            <li>Visit List</li>
            <li>Add Visit</li>
            <li>Authorization</li>
          </ul>
        </nav>
        <article>Content</article>
      </div>
    );
  }
}

export default App;
