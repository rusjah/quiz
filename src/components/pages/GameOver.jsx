import React from 'react'
import { Link } from 'react-router-dom'

function GameOver({result, setResult, setData}) {
  
  return (
    <div className='h-full flex flex-col justify-center items-center gap-10'>
        <h1 className={`font-bold text-[3vw] ${result ? 'text-lime-900' : 'text-amber-900'}`}>{
            result ? " You are amazing! Congratulations!!!" 
            : "Don't worry, be happy. \n Next time you'll get it!"
        }</h1>
        <Link to={'/'}><button onClick={() => {setResult(false)}} className="btn btn-neutral">Go to home page</button></Link>
    </div>
  )
}

export default GameOver