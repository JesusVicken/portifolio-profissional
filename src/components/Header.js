import React from 'react';
//imagens
import Logo from '../assets/logo.svg'

const Header = () => {
  return (
    <header className='py-8'>
      <div className='container mx-auto'>
        <div className='flex justify-between items-center'>
          {/* Logo*/}
          <a href='#'>
            <img src={Logo} alt="" />
          </a>
          {/* Botão*/}
          <button className='btn btn-sm'>Contrate-me</button>
        </div>
      </div>
    </header>
  )
};

export default Header;
