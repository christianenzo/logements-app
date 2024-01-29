import React, {useContext} from 'react';

//context
import {AppartContext} from '../context/AppartContext';

// components

import Apparts from '../components/Apparts';

const Appart = () => {
  const {appart} = useContext(AppartContext);
  return ( <section className='py-24'>
      <div className='container mx-auto lg:px-0'>
        {/*grid*/}
        <div className='grid grid-cols-1 max-w-sm mx-auto gap-[30px]
        lg:grid-cols-3 lg:max-w-none lg:mx-0'>
          {appart.map((apparts) => {
            return <Apparts apparts={apparts} key={apparts.id} />;
          })}
        </div>
      </div>
    </section>
  );
};       

export default Appart;