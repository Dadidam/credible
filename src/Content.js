import React from 'react';
import PageTitle from './PageTitle';
import PageHeader from './PageHeader';
import PageActions from './PageActions';
import Diagnosis from './Grids/Diagnosis';
import Visits from './Grids/Visits';

export default () => {
  return (
    <article>
      <PageTitle />
      <PageHeader />
      <Diagnosis />
      <Visits />
      <PageActions />
    </article>
  );
};
