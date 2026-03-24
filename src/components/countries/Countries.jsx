import React, { useState } from 'react';
import { use } from "react";
import Country from './Country';

const Countries = ({something}) => {
    const whatever = use(something);
    const countries = whatever.countries;



    const [vcountries, setVcountries] = useState([]);
    
    const handleVC = (country) =>{
    const nvcountries = [...vcountries, country];

       setVcountries(nvcountries);
    }

    // console.log(whatever.countries);
    return (
        <div>
            <h3>Country roads take me home</h3>
            <h3>Total Countries: {countries.length}</h3>
            <ol>
                {
                    vcountries.map(vcountry => <li>{vcountry.name.common}</li>)
                }
            </ol>
            <h2>visited countries: {vcountries.length}</h2>
             <div className='countryCon'>
            {
                countries.map(country => <Country country={country} handleVC={handleVC}></Country>)
            }
            </div>
        </div>
    );
};

export default Countries;

