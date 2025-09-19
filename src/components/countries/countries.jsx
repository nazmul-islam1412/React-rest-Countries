import React, { use } from 'react';
import Country from '../../assets/Country/country';
import './countries.css'

const Countries = ({countriesPromise}) => {
    const countriesData=use(countriesPromise);
    const countries=countriesData.countries;
    return (
        <div>
            <h1>Countries:{countries.length}</h1>
            <div className='countries'>
                {
                countries.map(country=><Country country={country}></Country>)
               
            }
            </div>
        </div>
    );
};

export default Countries;