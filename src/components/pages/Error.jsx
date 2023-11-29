import React from 'react'
import { Link } from 'react-router-dom'


function Error() {
  return (
    <div className='h-full flex flex-col justify-center items-center gap-10'>
        <h1 className='font-bold text-[3vw]'>Upss... Something went wrong</h1>
        <Link to={'/'}><button className="btn btn-neutral">Go to home page</button></Link>
    </div>
  )
}

export default Error