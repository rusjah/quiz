import React from 'react'
import { Link } from 'react-router-dom'

function GameOver({result, setResult}) {
  return (
    <div className='h-full flex flex-col justify-center items-center gap-10'>
        <h1 className='font-bold text-[3vw]'>{
            result ? " msg.win" : "msg.faul"
        }</h1>
        <Link to={'/'}><button onClick={() => {setResult(false)}} className="btn btn-neutral">Go to home page</button></Link>
    </div>
  )
}

export default GameOver