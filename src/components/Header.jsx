import React from 'react';
import './Header.css';
import TextArea from './TextArea';

function Header() {
    return (
      <>
        <div className="header">
          <h2> Word Analysis App </h2>
        </div>
        <TextArea />
      </>
    );
}

export default Header;
