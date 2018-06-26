import React from 'react';
import { GridCell } from '@progress/kendo-react-grid';

const linkStyle = {
  color: 'rgb(11, 97, 164)',
  textDecoration: 'underline'
};

class PatientEducation extends GridCell {
  render() {
    const item = this.props.dataItem;
    const field = this.props.field;
    const { LinkID, Show } = item[field];

    if (!Show) {
      return (
        <td>
          <i className="fas fa-graduation-cap error" />
        </td>
      );
    }

    return (
      <td>
        <i className="fas fa-graduation-cap success" />{' '}
        <a href={`/view/${LinkID}`} style={linkStyle}>
          View
        </a>
      </td>
    );
  }
}

export default PatientEducation;
