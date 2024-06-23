import React from 'react'
import MainHeader from './MainHeader'

const Layout = ({children}) => {
  return (
      <section>
      <MainHeader />
      {children}
      </section>
  )
}

export default Layout