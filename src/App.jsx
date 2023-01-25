import './App.css'
import React, { useState } from 'react';
import axios from 'axios';

export default function App() {

  const [data, setData] = useState({});
  const [location, setLocation] = useState('');

  
  
  const url =`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=d6e7f494c97bd049c41a3013f4ae34c9`;

  const searchFunction = (event)=>{
    if(event.key === 'Enter'){
      axios.get(url).then((response)=>{
        setData(response.data);
        console.log(response.data);
      })
       setLocation('');
    }
   
  }
    
  return (
    <main>
      <div className='app'>

        <div className='search' >
         <input type="text"
           value={location}
           onChange={(event)=>setLocation(event.target.value)}
           onKeyPress={searchFunction}
           placeholder="Enter Location"/>
        </div>
       

        <div className='container'>
        
        <div className='top'>
          <div className='location'>
             <h4>{data.name}</h4>
          </div>
          <div className='temp'>
            {data.main ? <h1>{data.main.temp}°F</h1> : null}  
          </div>
          <div className='description'>
            {data.weather ? <p>{data.weather[0].main}</p> :null }
          </div>
        </div>

         <div className='bottom'>
           
         <div className='feels bold'>
           
           {data.main ? <div >{data.main.feels_like}F</div> : null}
           <div>feels</div>
         </div>
           
           <div className='humidity bold'>
             
            {data.main ?<div>{data.main.humidity}%</div> : null}
             
            <div>humidity</div>
          </div>
              
          <div className='winds bold'>
            {data.wind ?<div>{data.wind.speed}MPM</div> : null} 
             <div> winds </div>
           
         </div> 
             
       
      </div>
      </div> 
      </div>
    </main>
  )
}
