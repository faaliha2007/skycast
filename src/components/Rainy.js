import React from 'react'
import {useLocation,Navigate,useNavigationType} from "react-router-dom"
import '../App.css'

function Rainy()
{   const location = useLocation()
  const navigationType = useNavigationType();
  
    console.log("Nav Type:", navigationType);
    console.log("State:", location.state);
  
  
    if (navigationType === "POP") {
      return <Navigate to="/" replace />;
    }
    const temp = location.state?.temp
    const city = location.state?.city
return(
    
<div className='relative min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-black flex justify-center items-center overflow-hidden'>
<div className='rain 'style={{left:'10px',animationDuration:'0.7s'}}></div>
<div className='rain'style={{left:'50px',animationDuration:'0.8s'}}></div>
<div className='rain'style={{left:'100px',animationDuration:'0.9s'}}></div>
<div className='rain'style={{left:'250px',animationDuration:'1s'}}></div>
<div className='rain'style={{left:'300px',animationDuration:'1.1s'}}></div>
<div className='rain'style={{left:'450px',animationDuration:'1.3s'}}></div>
<div className='rain'style={{left:'500px',animationDuration:'1.4s'}}></div>
<div className='rain'style={{left:'650px',animationDuration:'0.7s'}}></div>
<div className='rain'style={{left:'700px',animationDuration:'0.8s'}}></div>
<div className='rain'style={{left:'800px',animationDuration:'0.9s'}}></div>
<div className='rain'style={{right:'100px',animationDuration:'1.0s'}}></div>
<div className='rain'style={{right:'200px',animationDuration:'1.2s'}}></div>
<div className='rain'style={{right:'300px',animationDuration:'1.1s'}}></div>
<div className='rain'style={{right:'400px',animationDuration:'1.4s'}}></div>

{/*lightening*/}
<div className='light'>⚡</div>

{/*cloud*/}
<div className='cgroup'>
<div className='cloud cloud1'>
     <svg width="500" height="200" viewBox="0 0 500 200">
      <path d="M120 150 
               Q100 110 140 100 
               Q150 60 200 80 
               Q240 50 280 90 
               Q330 80 360 120 
               Q400 120 410 150 
               Z"
            fill="#6b7280"/>
    </svg> 
</div>
<div className='cloud cloud2'>
 <svg width="500" height="200" viewBox="0 0 500 200">
      <path d="M120 150 
               Q100 110 140 100 
               Q150 60 200 80 
               Q240 50 280 90 
               Q330 80 360 120 
               Q400 120 410 150 
               Z"
            fill="#4b5563"/>
    </svg>


</div>


</div>
  



 <div className="float bg-white/10 backdrop-blur-xl p-12 border rounded-xl border-white/20 text-white text-center shadow-2xl">
  <h1 className="font-bold text-4xl p-3">Severe Thunderstrom</h1>
  <p className='text-md text-gray-300'>{city}</p>
  <h1 className='text-8xl font-bold p-5'>{temp}°c</h1>
  <p className='text-xl text-blue-400'>Heavy Rain & Lightning</p>
 </div>
 
</div>

)
}
export default Rainy