import React from 'react'

import Header from './components/Header'
import Quiz from './components/Quiz';
import { AppCss } from './Styles'

const App = () => {
  return (
    <AppCss>
      <Header />
      <Quiz />
    </AppCss>
  );
}

export default App