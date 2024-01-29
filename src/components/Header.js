/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */

import React, {useState, useEffect} from 'react';
//logo

import LogoWhite from '../assets/img/logo-white.svg';

import LogoDark from '../assets/img/logo-dark.svg';

const Header = () => {
  const [header, setHeader]=useState(false);
  useEffect(()=> {
    window.addEventListener('scroll', ()=> {
      window.scrollY >50 ? setHeader(true) :setHeader(false);
    })
  })
  return (
    <header 
    className={`${
      header ? 'bg-white py-6 shadow-lg' : 'bg-transparent py-8'}
    fixed z-50 w-full transition-all duration-500`}
    >
    <div className='container mx-auto flex flex-col items-center gap-y-6 lg:flex-row 
    lg:justify-between lg:gap-y-0'>
      {/*logo*/}
      <a href="/">
        {header ? <img className='w-[160]' src={LogoDark} /> : <img className='w-[160]' src={LogoWhite}/>}
      </a>
      {/*nav*/}
      <nav className={`${header ? 'text-primary' : 'text-white' } 
      flex gap-x-4 font-tertiary tracking-[3px] text-[15px] items-center uppercase lg:gap-x-8`}>
        <a href="" className='hover:text-accent transition'>
          Accueil
        </a>
        <a href="" className='hover:text-accent transition'>
          Nos Logements
        </a>
        <a href="" className='hover:text-accent transition'>
          Procédure Complète
        </a>
        <a href="" className='hover:text-accent transition'>
          Notre Equipe
        </a>
        <a href="" className='hover:text-accent transition'>
          Nous contacter
        </a>
      </nav>      
    </div>
    </header>
  );
};

export default Header;