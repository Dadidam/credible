import React from 'react';
import { Button } from '@progress/kendo-react-buttons';

export default () => {
  return (
    <div id="content-action">
      <Button>Cancel</Button>
      <Button>Save Draft</Button>
      <Button>Send to front desk</Button>
      <Button primary={true}>Print</Button>
    </div>
  );
};
