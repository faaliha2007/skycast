import React, { useState } from "react";
import { useMemo } from 'react';
import { useNavigate } from "react-router-dom";
import axios from "axios"
function Login()
{   
  
  const [city,setcity] = useState("")
   const navigate = useNavigate()

    const stars  =  useMemo(()=>{
        return Array.from({length:60},(_,i)=>({
          id:i,
          size: Math.random()*3+"px",
          top: Math.random()*100+"vh",
          left: Math.random()*100+"vw",
          delay: Math.random()*2+ "s" 
           }))
      },[])
    
const handleweather = async ()=>{
     if(!city)  
     {
        alert("Please enter a city!!")
        return  
      }
   try {
      const datas = await axios.get(
        "https://api.openweathermap.org/data/2.5/weather",
        {
          params: {
            q: city,
            appid: "ef6057d31cffad6cd59ace9f89872d3f",
            units: "metric"
          }
        }
      )
        const weather = datas.data.weather[0].main.toLowerCase()
        const temp = Math.round(datas.data.main.temp)
        const cityname = datas.data.name
        if(weather.includes("rain")) 
               {navigate("/rainy" ,{
          state:{
            temp: temp,
            city: cityname
          }
        })
      }
            else if(weather.includes("clear")) 
       
            {navigate("/sunny" ,{
          state:{
            temp: temp,
            city: cityname
          }
        })
      }
            else if(weather.includes("cloud")) 
          {navigate("/sunny" ,{
          state:{
            temp: temp,
            city: cityname
          }
        })
      }

        else if(weather.includes("snow")){
           navigate("/snowy" ,{
          state:{
            temp: temp,
            city: cityname
          }
        })
      }
    else  alert("Give correct place!!")


    }
    catch(err)
    {
        alert("Couldnot fetch weather . Try again!!")
    }
   
}

      return (
        <>
    <div 
      className='relative min-h-screen flex items-center justify-center text-white overflow-hidden'
      style={{background:"radial-gradient(circle at top, #0f172a, #020617 70%)"}}
    >
    
    
    <div className='absolute w-[400px] h-[400px] bg-indigo-500 rounded-full blur-[120px] opacity-30 top-[-120px] left-[-120px] animate-pulse'></div>
    
    <div className='absolute w-[400px] h-[400px] bg-cyan-500 rounded-full blur-[120px] opacity-30 bottom-[-150px] right-[-120px] animate-pulse'></div>
    
    <div className="star w-2 h- 2" style={{top:"10vh", left:"20vw", animationDelay:"0s"}}></div>
    
    <div className="star w-1 h-1" style={{top:"30vh", right:"15vw", animationDelay:"1s"}}></div>
    
    <div className="star w-2 h-2" style={{top:"60vh", left:"40vw", animationDelay:"2s"}}></div>
    
    <div className="star w-1.5 h-1.5" style={{top:"25vh", right:"30vw", animationDelay:"1.5s"}}></div>
    
    <div className="star w-1 h-1" style={{bottom:"20vh", left:"25vw", animationDelay:"2.5s"}}></div>
    
    <div className="star w-1 h-1" style={{bottom:"35vh", right:"10vw", animationDelay:"0.8s"}}></div>
    
    <div className="star w-2 h-2" style={{bottom:"60vh", left:"60vw", animationDelay:"1.8s"}}></div>
    
    <div className="star w-2 h-2" style={{bottom:"70vh", left:"40vw", animationDelay:"1.8s"}}></div>
    
    <div className="star w-2 h-2" style={{bottom:"45vh", left:"30vw", animationDelay:"1.8s"}}></div>
        
    <div className="star w-2 h-2" style={{bottom:"80vh", left:"60vw", animationDelay:"1.8s"}}></div>
    
    <div className="star w-2 h-2" style={{bottom:"95vh", left:"50vw", animationDelay:"1.8s"}}></div>
    
    <div className="star w-2 h-2" style={{bottom:"20vh", left:"10vw", animationDelay:"1.8s"}}></div>
    
    <div className="star w-2 h-2" style={{bottom:"10vh", left:"40vw", animationDelay:"1.8s"}}></div>
    
    
    {stars.map((star)=>(
      <div
      key={star.id}
      className='star'
        style={{
        width: star.size,
        height: star.size,
        top: star.top,
        left: star.left,
        animationDelay: star.delay
      }}
      />
    ))}
    
    
    
    
    <div className='absolute w-[3px] h-[80px] bg-gradient-to-b from-white to-transparent rotate-45 opacity-80'
         style={{
           top:"20vh",
           left:"10vw",
           animation:"shoot 4s linear infinite"
         }}
    ></div>
    
    <div className="absolute w-[500px] h-[500px] bg-gradient-to-r from-indigo-500 via-cyan-400 to-purple-500 rounded-full blur-[150px] opacity-30 animate-pulse">
    </div>
    
    
    <div className="relative z-10 backdrop-blur-2xl bg-white/10 border border-white/20 p-12 rounded-3xl shadow-[0_0_40px_rgba(255,255,255,0.1)] text-center w-[420px]">
    
      <h1 className='text-gray-300 text-lg tracking-widest uppercase'>
        Good Day!!
      </h1>
    
      <h1 className="font-bold text-5xl py-4 bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
        SkyCast
      </h1>
    
      <p className='text-gray-400 mb-8'>
        Discover the weather before it discovers you.
      </p>
    
      <input 
        type="text" 
        value= {city}
        onChange={event=>setcity(event.target.value)}
        placeholder='Enter city...' 
        className='w-full p-3 rounded-xl bg-white/20 border border-white/30 placeholder-gray-300 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400 mb-4'
      />
    
      <button onClick={handleweather} className='w-full py-3 rounded-xl bg-gradient-to-r from-indigo-500 to-cyan-500 hover:scale-105 transition duration-300 font-semibold'>
        Check Weather
      </button>
    
      <p className='text-gray-400 mt-6 text-sm'>
        Built with 💗 by Faali
      </p>
    
    </div>
    
    </div>
        </>
      );
}
export default Login 






