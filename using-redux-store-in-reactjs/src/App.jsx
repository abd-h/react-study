import React from 'react';
import Auth from './tesst-components/Auth';
import Counter from './tesst-components/Counter';
import Header from './tesst-components/Header';
import UserProfile from './tesst-components/UserProfiile';

// import Auth from './components/Auth'
// import Counter from './components/Counter'
// import CounterClass from './components/CounterClass'
// import Header from './components/Header'
// import UserProfile from './components/UserProfile';

 

const App = () => {
  
  return (
    <div>
      <Header />
      <Auth />
      <UserProfile />
      <Counter />
      
      {/**
 <Header />
          { <Auth /> }
          { <UserProfile />}
      <Counter />
      <CounterClass />
       */}
    </div>
  );
}

export default App