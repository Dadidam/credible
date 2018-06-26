import React from 'react';
import PartnerLogo from './PartnerLogo';
import HeaderTop from './HeaderTop';
import HeaderBottom from './HeaderBottom';

export default () => {
  return (
    <header>
      <PartnerLogo />
      <div id="header-content">
        <HeaderTop />
        <HeaderBottom />
      </div>
    </header>
  );
};
