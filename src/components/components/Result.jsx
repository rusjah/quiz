import React from 'react'

function Result({index, len}) {
  return (
    <div className="card bg-lime-100 shadow-xl absolute right-4 top-2 rounded-bl-[0]">
        <div className="card-body">
            <p className='font-bold text-[2em]'>{index+1}/{len}</p>
        </div>
    </div>
  )
}

export default Result