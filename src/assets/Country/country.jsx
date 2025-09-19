import React from 'react';

const Country = ({country}) => {
    console.log()
    return (
        <div>
            <img src={country.flags.flags.png} alt="" />
            <h3>Population:{country.population.population}</h3>
            <h3>Name: {country.name.common}</h3>
            <h3>Currency: {country.area.area}</h3>
            
        </div>
    );
};

export default Country;