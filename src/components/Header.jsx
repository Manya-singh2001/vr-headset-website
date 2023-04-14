import React from 'react'
import Nav from './Nav'
import Logo from '../assets/logo.svg'
import {HiMenu} from 'react-icons/hi'


const Header = ({ setNavMobile }) => {
  return (
    <header
    className='py-6'
    data-aos='fade-down'
    data-aos-duration='2000'
    data-aos-delay='900'
  >
    <div className='container mx-auto'>
      <div className='flex items-center justify-between'>
        {/* logo */}
        <a href='/'>
          <img className='h-[30px]' src={Logo} alt='/' />
        </a>
        {/* nav */}
        <Nav />
        {/* nav mobile btn */}
        <HiMenu
          onClick={() => setNavMobile(true)}
          className='lg:hidden text-3xl text-white cursor-pointer'
        />
      </div>
    </div>
  </header>
);
};

export default Header
