'use client';
import React, { createContext, useState, useEffect } from 'react';

const SideBarContext = createContext();

const SidebarProvider = ({ children }) => {
  const [val, setVal] = useState(() => {
    if (typeof window !== 'undefined') {
      const savedVal = localStorage.getItem('get item');
      return savedVal !== null ? parseInt(savedVal, 10) : 0;
    }
    return 0;
  });

  const [cartItems, setCartItems] = useState(() => {
    if (typeof window !== 'undefined') {
      const savedCartItems = localStorage.getItem('cart items');
      return savedCartItems !== null ? JSON.parse(savedCartItems) : [];
    }
    return [];
  });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('get item', val);
    }
  }, [val]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('cart items', JSON.stringify(cartItems));
    }
  }, [cartItems]);

  return (
    <SideBarContext.Provider value={{ val, setVal, cartItems, setCartItems }}>
      {children}
    </SideBarContext.Provider>
  );
};

export { SideBarContext, SidebarProvider };
