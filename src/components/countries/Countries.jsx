import React from 'react';
import { use } from "react";
import Country from './Country';

const Countries = ({something}) => {
    const whatever = use(something);
    const countries = whatever.countries;
    // console.log(whatever.countries);
    return (
        <div>
            <h3>Country roads take me home</h3>
             <div className='countryCon'>
            {
                countries.map(country => <Country country={country}></Country>)
            }
            </div>
        </div>
    );
};

export default Countries;

