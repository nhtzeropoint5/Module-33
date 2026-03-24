import React from 'react';

const Country = ({country}) => {

    // const {name, currency} = country.name.common, country.capital.capital;
    return (
      
        <div className='countrySty'>
            <h1>Welcome</h1>
            <h3>Name: {country.name.common}</h3>
            <h3>Flag: {}</h3>
            <img src={country.flags.flags.png} alt="" />
        </div>
    );
};

export default Country;