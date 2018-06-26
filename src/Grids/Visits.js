import React, { Component } from 'react';
import VisitType from './GridCells/VisitType';
import { Grid, GridColumn as Column } from '@progress/kendo-react-grid';

import visits from '../data/visits.json';

class Visits extends Component {
  render() {
    return (
      <div className="grid-container">
        <div className="label-container">
          <span className="label">Visits</span>
        </div>
        <div className="grid">
          <Grid data={visits} scrollable="none">
            <Column
              field="Visit"
              title="Visit"
              cell={VisitType}
            />
            <Column field="VisitDate" title="Date" />
            <Column field="VisitTime" title="Time" />
            <Column field="Employee" title="Employee" />
          </Grid>
        </div>
      </div>
    );
  }
}

export default Visits;
