import React from "react";
import '../App.css'
import {useLocation,Navigate} from "react-router-dom"
import { useNavigationType } from "react-router-dom";

function Snowy()
{  
    const location = useLocation()
   const navigationType = useNavigationType();

  console.log("Nav Type:", navigationType);
  console.log("State:", location.state);


  if (navigationType === "POP") {
    return <Navigate to="/" replace />;
  }
    const temp = location.state?.temp
    const city = location.state?.city
  
  return(
    <div className='relative min-h-screen flex items-center justify-center overflow-hidden  bg-gradient-to-b from-slate-900 via-blue-900 to-slate-800'>

<div className='moon'></div>
<div className='ground'></div>

<div className='snowman'>
  <div className='ball bot'></div>
  <div className='ball mid'>
    <div className='button b1'></div>
    <div className='button b2'></div>
    <div className='button b3'></div>
  </div>
  <div className='ball head'>
    <div className='eye right'></div>
    <div className='eye left'></div>
    <div className='nose'></div>
  </div>
</div>


<div className='snow 'style={{left:'10px',animationDuration:'0.7s'}}></div>
<div className='snow'style={{left:'50px',animationDuration:'0.8s'}}></div>
<div className='snow'style={{left:'100px',animationDuration:'0.9s'}}></div>
<div className='snow'style={{left:'250px',animationDuration:'1s'}}></div>
<div className='snow'style={{left:'300px',animationDuration:'1.1s'}}></div>
<div className='snow'style={{left:'450px',animationDuration:'1.3s'}}></div>
<div className='snow'style={{left:'500px',animationDuration:'1.4s'}}></div>
<div className='snow'style={{left:'650px',animationDuration:'0.7s'}}></div>
<div className='snow'style={{left:'700px',animationDuration:'0.8s'}}></div>
<div className='snow'style={{left:'800px',animationDuration:'0.9s'}}></div>
<div className='snow'style={{right:'100px',animationDuration:'1.0s'}}></div>
<div className='snow'style={{right:'200px',animationDuration:'1.2s'}}></div>
<div className='snow'style={{right:'300px',animationDuration:'1.1s'}}></div>
<div className='snow'style={{right:'400px',animationDuration:'1.4s'}}></div>


 <div className="float backdrop-blur-xl bg-white/10 p-12 border rounded-xl border-white/20 text-white text-center shadow-2xl">
  <h1 className="font-bold text-4xl p-3">Snowfall</h1>
  <p className='text-md text-gray-300'>{city}</p>
  <h1 className='text-8xl font-bold p-5'>{temp}°c</h1>
  <p className='text-xl text-blue-200'>Heavy Snow & Cold Wind</p>
 </div>

</div>
)
}
export default Snowy