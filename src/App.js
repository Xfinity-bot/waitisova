
import './App.css';
import {useState,useEffect} from 'react'

function App() {
  
  const [loaded,setStatus]=useState(0)
  const [date,setDate]=useState(false)
  const gettime=(x)=>{
    const total = Date.parse(x) - Date.parse(new Date());
  const seconds = Math.floor( (total/1000) % 60 );
  const minutes = Math.floor( (total/1000/60) % 60 );
  const hours = Math.floor( (total/(1000*60*60)) % 24 );
  const days = Math.floor( total/(1000*60*60*24) );
  return {
    total,
    days,
    hours,
    minutes,
    seconds
  };
  }
  
  

  
  useEffect(()=>{
    const deadline = new Date('October 01, 2021 09:00:00');
    setTimeout(() => {
      const tp=gettime(deadline);
      
      setDate(tp) ;
      setStatus(true);
     
    
    },1000);
  },[date]);
  
  
 return(
   loaded?<div className="container" ><div className="Days" ><span className="suffix">Days</span>{date.days}</div>
   <div className="Days" ><span className="suffix">Hours</span><span>{("0"+date.hours).slice(-2)}</span></div>
   <div className="Days" ><span className="suffix">Mins</span>{("0"+date.minutes).slice(-2)}</div>
   <div className="Days" ><span className="suffix">Secs</span><span>{("0"+date.seconds).slice(-2)}</span></div></div>
   
   :<div></div>   );
}

export default App;
