'use client'
import React, { createContext, useState, useEffect } from 'react';

const SideBarContext = createContext();

const SidebarProvider = ({ children }) => {
  const [val, setVal] = useState(() => {
    const savedVal = localStorage.getItem('get item');
    return savedVal !== null ? parseInt(savedVal, 10) : 0;
  });

  const [cartItems, setCartItems] = useState(() => {
    const savedCartItems = localStorage.getItem('cart items');
    return savedCartItems !== null ? JSON.parse(savedCartItems) : [];
  });

  useEffect(() => {
    localStorage.setItem('get item', val);
  }, [val]);

  useEffect(() => {
    localStorage.setItem('cart items', JSON.stringify(cartItems));
  }, [cartItems]);

  return (
    <SideBarContext.Provider value={{ val, setVal, cartItems, setCartItems }}>
      {children}
    </SideBarContext.Provider>
  );
};

export { SideBarContext, SidebarProvider };
