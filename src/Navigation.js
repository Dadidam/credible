import React from 'react';

export default () => {
  return (
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
  );
};
