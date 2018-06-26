import React from 'react';
import { Button } from '@progress/kendo-react-buttons';

export default () => {
  return (
    <div id="header-top">
      <div id="partner-name">
        <h1>Partner Name</h1>
      </div>
      <div id="logout-button">
        <Button look="outline">log out</Button>
      </div>
      <div id="help-button">
        <i className="fas fa-question-circle fa-lg" />
      </div>
      <div id="service-logo">
        <img src="./img/logo.png" alt="" />
      </div>
    </div>
  );
};
