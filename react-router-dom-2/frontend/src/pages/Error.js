import React from 'react'
import PageContent from './PageContent'
import { useRouteError } from 'react-router-dom'
import MainNavigation from '../components/MainNavigation';

const ErrorPage = () => {
  const error = useRouteError();

  let title = 'An error has occured!';
  let message = 'Could not fetch data!';

  if (error.status === 500) {
    message = error.data.message;
  } 
  if (error.status === 404) {
    title = 'Could not found!';
    message = 'Could not find resource or page!'
  }
  
  return (
    <>
      <MainNavigation />
      <PageContent title={title} > { message }</PageContent>
      </>
  )
}

export default ErrorPage