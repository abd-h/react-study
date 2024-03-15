import React from 'react';

import logoImage from '../assets/logo.jpg';
const headerImgCss = 'w-20 h-20 object-contain rounded-full  border-#758a8a border-2 drop-shadow-[0_0_4px_rgba(31,42,42,0.5)]';

const Header = () => {
  return (
      <header className='my-8 mx-0  text-center flex flex-col items-center'>
          <img src={ logoImage } alt='logo image'
          className={headerImgCss} />
          <h1 className='font-["Quicksand",sans-serif] font-[700] text-5xl m-4 tracking-wide text-[#2f4444]'>React forms</h1>
      </header>
  )
}

export default Header