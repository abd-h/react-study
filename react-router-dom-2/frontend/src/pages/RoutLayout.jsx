import React from 'react';
import { Outlet } from 'react-router-dom';
import MainNavigation from '../components/MainNavigation';

const RoutLayoutPage = () => {
  return (
      <>
          <MainNavigation />
          <main>
          <Outlet />
          </main>
      </>
  )
}

export default RoutLayoutPage;