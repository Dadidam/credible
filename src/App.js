import React, { Component } from 'react';
import DiagnosisProblem from './GridCells/DiagnosisProblem';
import PatientEducation from './GridCells/PatientEducation';
import { Button, ButtonGroup } from '@progress/kendo-react-buttons';
import { Grid, GridColumn as Column } from '@progress/kendo-react-grid';

import './reset.css';
import './App.css';
import '@progress/kendo-theme-default/dist/all.css';

import diagnosis from './data/diagnosis.json';

class App extends Component {
  render() {
    return (
      <div className="app-root">
        <header>
          <div id="partner-logo">
            <img src="./img/sample-partner.jpg" alt="" />
          </div>
          <div id="header-content">
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
          </div>
        </header>
        <nav>
          <ul>
            <li>
              <i className="fas fa-eye" />
              <a href="">Overview</a>
            </li>
            <li>
              <i className="fas fa-money-bill-alt" />
              <a href="">1st Available</a>
            </li>
            <li>
              <i className="fas fa-book" />
              <a href="">Amendments</a>
            </li>
            <li>
              <i className="fas fa-plus-square" />
              <a href="">Tx Plus</a>
            </li>
            <li>
              <i className="fas fa-paperclip" />
              <a href="">Attachments</a>
            </li>
            <li>
              <i className="fas fa-pills" />
              <a href="">Allergy</a>
            </li>
            <li>
              <i className="fas fa-clipboard-list" />
              <a href="">Visit List</a>
            </li>
            <li>
              <i className="fas fa-location-arrow" />
              <a href="">Add Visit</a>
            </li>
            <li>
              <i className="fas fa-sign-in-alt" />
              <a href="">Authorization</a>
            </li>
          </ul>
        </nav>
        <article>
          <div>
            <h2>
              CLIENT MEDICAL PROFILE: Taylor Swift (4242424242) DOB: 12/13/1989
              (27 / F)
            </h2>
          </div>
          <div id="content-header">
            <h3>Discharge Summary</h3>
            <Button>Unload all Patient Education</Button>
          </div>
          <div className="grid-container">
            <div className="label-container">
              <span className="label">Diagnosis</span>
            </div>
            <div className="grid">
              <Grid data={diagnosis} scrollable="none">
                <Column
                  field="Problem"
                  title="Problem List"
                  cell={DiagnosisProblem}
                />
                <Column field="OnsetDate" title="Onset Date" />
                <Column field="Notes" title="Notes" />
                <Column field="DiagnosedBy" title="Diagnosed By" />
                <Column
                  field="Education"
                  title="Patient Education"
                  cell={PatientEducation}
                />
              </Grid>
            </div>
          </div>
          <div id="content-action">
            <Button>Cancel</Button>
            <Button>Save Draft</Button>
            <Button>Send to front desk</Button>
            <Button primary={true}>Print</Button>
          </div>
        </article>
      </div>
    );
  }
}

export default App;
