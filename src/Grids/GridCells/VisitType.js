import React from 'react';
import { GridCell } from '@progress/kendo-react-grid';

class VisitType extends GridCell {
  render() {
    const item = this.props.dataItem;
    const field = this.props.field;
    const { Approved, ID, Title } = item[field];
    return (
      <td>
        <form className="app-form">
          <div className="k-form-field">
            <input
              id={ID}
              type="checkbox"
              checked={Approved}
              onChange={() => {}}
              className="k-checkbox"
            />
            <label className="k-checkbox-label" htmlFor={ID}>
              {Title}
            </label>
          </div>
        </form>
      </td>
    );
  }
}

export default VisitType;
