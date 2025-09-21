import React, { useState } from 'react';
import './country.css';

const Country = ({country}) => {

    const [visited,setvisited]=useState(false);

    

const handleVisited = () =>{
    
    // if(visited){
    //     setvisited(false)
    // }
    // else{
    //     setvisited(true)
    // }
    setvisited(visited ? false : true)
}
    return (
        <div className={`Country ${visited && 'country-visited'}`}>
            <img src={country.flags.flags.png} alt="" />
            <h3>Population:{country.population.population}</h3>
            <h3>Name: {country.name.common}</h3>
            <h3>Area: {country.area.area} 
                {country.area.area > 300000 ? " Big Country" : " Small Country"}
            </h3>
            <button onClick={handleVisited}>{visited ? "Visited" : "Not visited"}</button>
            
        </div>
    );
};

export default Country;