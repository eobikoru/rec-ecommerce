import React from 'react'
import Nav from '../header/nav/Nav'
import Foot from '../footer'

const Wrapper = ({children}) => {
  return (
    <div>
        <Nav />
        {children}
        <Foot />
      
    </div>
  )
}

export default Wrapper
