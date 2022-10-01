import React from 'react';
import { useState } from 'react';

function Header({result}) {

  return (
    <div>
      <h2>Results for {result.title}</h2>
    </div>
  );
}

export default Header;
