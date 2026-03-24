import React, { useState } from 'react';




const Country = ({country, handleVC}) => {
    const [visited, setVisited] = useState(false);

    const handleVisited = () =>{
    // console.log('clicked');
     setVisited(!visited);
     handleVC(country);
    
}

    // const {name, currency} = country.name.common, country.capital.capital;
    return (
      
        <div className={`countrySty ${visited && 'visited'}`}>
            <h1>Welcome</h1>
            <h3>Name: {country.name.common}</h3>
            <h3>Flag: {}</h3>
            <img src={country.flags.flags.png} alt="" />
            <button className='btn' onClick={handleVisited} >{visited ? 'Visited' : 'Not Visited'}</button>
        </div>
    );
};

export default Country;