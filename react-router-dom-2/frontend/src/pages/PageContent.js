import React from 'react';
import classes from './PageContent.module.css'

const PageContent = ({children, title}) => {
  return (
      <>
          <h1>{ title }</h1>
          <section className={classes.content}>{children }</section>
      </>
  )
}

export default PageContent