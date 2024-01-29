import React, {createContext, useEffect, useState} from 'react'; // eslint-disable-line 

//data
import {appartData} from '../data';

//createcontext
export const  AppartContext = createContext();

const AppartProvider = ({children}) => {
    const[appart, setAppart] = useState(appartData); // eslint-disable-line
  return (
    <AppartContext.Provider value ={{appart}}>
        {children}
    </AppartContext.Provider>
  );
};

export default AppartProvider;