import React from 'react';
import './country.css';

const Country = ({country}) => {
    

const handleVisited = () =>{
    console.log("Clicked")
}
    return (
        <div className='Country'>
            <img src={country.flags.flags.png} alt="" />
            <h3>Population:{country.population.population}</h3>
            <h3>Name: {country.name.common}</h3>
            <h3>Area: {country.area.area} 
                {country.area.area > 300000 ? " Big Country" : " Small Country"}
            </h3>
            <button onClick={handleVisited}>Not visted</button>
            
        </div>
    );
};

export default Country;