import React from 'react'


function Button({answer, clickHandler, className}) {
  return (
    <button onClick={() => clickHandler(answer)} className={`btn bg-amber-400 w-[100%] font-bold text-[1em] hover:bg-amber-200`}>{answer}</button>
  )
}

export default Button