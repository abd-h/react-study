import React from 'react'
import { HeaderStyles } from './Styled-css';

import  logoImg  from '../assets/quiz-logo.png';

const Header = () => {
  return (
    <HeaderStyles>
    <img src={logoImg} alt="Quiz logo" />
    <h1>ReactQuiz</h1>
    </HeaderStyles>
  )
}

export default Header