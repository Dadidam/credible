import React, { Component } from 'react';
import DiagnosisProblem from './GridCells/DiagnosisProblem';
import PatientEducation from './GridCells/PatientEducation';
import { Grid, GridColumn as Column } from '@progress/kendo-react-grid';

import diagnosis from '../data/diagnosis.json';

class Diagnosis extends Component {
  render() {
    return (
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
    );
  }
}

export default Diagnosis;
