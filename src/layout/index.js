import React from 'react'
import Navbar from './navbar'
import Footer from './footer'

const LayoutWrapper = ({children}) => {
  return (
    <>
      <Navbar/>
        {children}
       <Footer/>
    </>
  
  )
}

export default LayoutWrapper