'use client'
import React from 'react'
import { createContext } from 'react'
import { useState } from 'react'


const SideBarContext = createContext()
const SidebarProvider = ({children}) => {
    const [val, setVal] = useState(0)
    const [cartItems, setCartItems] = useState([])
  return (
    <div>
        <SideBarContext.Provider value={{val, setVal, cartItems, setCartItems}}>
            {children}
        </SideBarContext.Provider>
    </div>
  )
}

export  {SideBarContext, SidebarProvider}