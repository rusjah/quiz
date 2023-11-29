import React from 'react'

function Question({ques, num}) {
  return (
    <div className='flex flex-col justify-center items-center gap-2'>
      <h2 className="card-title text-amber-950 font-bold text-[1.5em]">Question {num}</h2>
      <p className='text-yellow-900 font-bold pb-4'>{ques}</p>
    </div>
  )
}

export default Question