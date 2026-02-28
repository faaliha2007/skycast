import React from "react";
import '../App.css'
import {useLocation,Navigate} from "react-router-dom"
import { useNavigationType } from "react-router-dom";

function Sunny()
{   const location = useLocation()
   
 const navigationType = useNavigationType();

  console.log("Nav Type:", navigationType);
  console.log("State:", location.state);


  if (navigationType === "POP") {
    return <Navigate to="/" replace />;
  }

 
 

    const {temp , city} = location.state 
    return(
<div className='sky relative min-h-screen flex items-center justify-center overflow-hidden'>
{/*cloud */}

<div className='scloud suncloud1'></div>
<div className='scloud suncloud2'></div>
<div className='scloud suncloud3'></div>

<div className="sun"></div>

 {/*card*/}
  <div className="float bg-white/10 backdrop-blur-xl p-12 border rounded-xl border-white/20 text-white text-center shadow-2xl absolute">
  <h1 className="font-bold text-4xl p-3">Sunny Day</h1>
  <p className='text-md text-gray-100'>{city}</p>
  <h1 className='text-8xl font-bold p-5'>{temp}°c</h1>
  <p className='text-xl text-yellow-400'>Clear Sky</p>
 </div>
 </div>
    )
}
export default Sunny