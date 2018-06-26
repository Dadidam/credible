import React from 'react';
import PageTitle from './PageTitle';
import PageHeader from './PageHeader';
import PageActions from './PageActions';
import Diagnosis from './Grids/Diagnosis';
import { Button } from '@progress/kendo-react-buttons';

export default () => {
  return (
    <article>
      <PageTitle />
      <PageHeader />
      <Diagnosis />
      <PageActions />
    </article>
  );
};
