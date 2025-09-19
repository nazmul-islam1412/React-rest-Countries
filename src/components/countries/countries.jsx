import React, { use } from 'react';
import Country from '../../assets/Country/country';

const Countries = ({countriesPromise}) => {
    const countriesData=use(countriesPromise);
    const countries=countriesData.countries;
    return (
        <div>
            <h1>Countries:{countries.length}</h1>
            {
                countries.map(country=><Country country={country}></Country>)
            }
        </div>
    );
};

export default Countries;