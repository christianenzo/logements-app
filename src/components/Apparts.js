



import React from 'react';

// link 

import {Link}  from 'react-router-dom';

// icons

import {BsArrowsFullscreen, BsPeople } from 'react-icons/bs';


const Apparts = ({apparts}) => {
  //destructure apparts 
  const { id, name, image, size, maxPerson, description, price }= apparts;
  return <div className='bg-white shadow-2xl min-h-[500px] min-w-[300] group rounded-lg'> 
    {/*img*/}
    <div className='overflow-hidden rounded-lg' >
    <img className='group-hover:scale-110 transition-all duration-300 w-full rounded-lg'
    src={image} alt="" />
    </div>
    {/*details*/}
    <div className='bg-white shadow-lg max-w-[340px] mx-auto h-[140px ]
    -translate-y-1/2 flex justify-center items-center uppercase
    font-tertiary tracking-[1px] font-semibold text-base '>
      <div className='flex justify-between w-[80%]'>
        {/*size*/}
        <div className='flex items-center gap-x-2'>
          <div className='text-accent'> 
            <BsArrowsFullscreen className='text-[15px]' />
          </div>
          <div className='flex gap-x-1'>
            <div>taille</div>
            <div>{size}m²</div>
          </div>
        </div>
        {/*people*/}
        <div><div className='flex items-center gap-x-2'>
          <div className='text-accent'> 
            <BsPeople className='text-[18px]' />
          </div>
          <div className='flex gap-x-1'>
            <div>Maxpeople</div>
            <div>{maxPerson}</div>
          </div>
        </div>
        </div>
        {/*detail*/}
      </div>
    </div>
    {/*name*/}
    <div className='text-center'>
    <Link to={'/apparts/${id}'} className='btn btn-secondary btn-sm max-w-[240px]'>
        <h3 className='h3'>{name}</h3>
    </Link>
    <p className='max-w-[300px] mx-auto mb-3 lg:mb-6'>{description.slice(0, 56)}</p>
    </div>
    {/*btn*/}
    <Link to={'/apparts/${id}'} className='btn btn-secondary btn-sm max-w-[240px] mx-auto'>
      Reservez à ${price}
    </Link>
  </div>
  
};

export default Apparts; 