import React from 'react';
import { GridCell } from '@progress/kendo-react-grid';

class DiagnosisProblem extends GridCell {
  render() {
    const item = this.props.dataItem;
    const field = this.props.field;
    const { Code, Disabled, Selected, Title } = item[field];
    return (
      <td>
        <form className="app-form">
          <div className="k-form-field">
            <input
              type="checkbox"
              id={item.ItemID}
              className="k-checkbox"
              checked={Selected}
              disabled={Disabled}
            />
            <label className="k-checkbox-label" for="ch1">
              ({Code} {Title})
            </label>
          </div>
        </form>
      </td>
    );
  }
}

export default DiagnosisProblem;
