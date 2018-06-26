import React from 'react';
import { Button, ButtonGroup } from '@progress/kendo-react-buttons';

export default () => {
  return (
    <div id="header-bottom">
      <div id="header-menu">
        <ButtonGroup>
          <Button primary={true} className="active" aria-checked={true}>
            Home
          </Button>
          <Button look="outline">Client</Button>
          <Button look="outline">Employee</Button>
          <Button look="outline">Schedule</Button>
          <Button look="outline">Visit</Button>
          <Button look="outline">Admin</Button>
          <Button look="outline">Billing</Button>
          <Button look="outline">Reports</Button>
          <Button look="outline">Forms</Button>
          <Button look="outline">Inpatient</Button>
        </ButtonGroup>
      </div>
      <div id="user-info">
        <p>
          Logged in as: <a href="">username</a> 11:25 AM EST
        </p>
      </div>
    </div>
  );
};
