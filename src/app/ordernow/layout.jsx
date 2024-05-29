import React from 'react';
import Order1 from './Order1';

const Layout = ({ children }) => {
  return (
    <div>
      
      <main>
        
        {children}
        <Order1/>
        </main>
      
    </div>
  );
}

export default Layout;
