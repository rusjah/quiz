import React from 'react'
import { Link } from 'react-router-dom'


function Home({quesionsGenerate}) {
  return (
    <div className='h-full flex flex-col justify-center items-center gap-10 bg-gradient-to-r from-yellow-400 via-lime-100 to-yellow-200'>
        <h1 className='font-bold text-[3vw]'>Are you ready?</h1>
        <Link to={'/quizz'}><button onClick={quesionsGenerate} className="btn  bg-green-950 w-[10rem] h-[10rem] text-[3em] text-yellow-400 rounded-full border-2 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] hover:bg-green-700 ">Start</button></Link>
    </div>
  )
}

export default Home