import React, { useEffect, useState } from 'react'
// import data from '../../data/data.json'
import Button from '../components/Button'
import Result from '../components/Result'
import { useNavigate } from 'react-router-dom'


function Quizz({setResult, questions}) {
  const [index, setIndex] = useState(0)
  const [score, setScore] = useState(0)
  const [end, setEnd] = useState(false)

  const navigate = useNavigate()

  function clickHandler(el) {
    (el === questions[index].corect) && setScore(i => i+= 1);
    ( index + 1 >= questions.length) ?  setEnd(i => true) : setIndex(i => i += 1)
  }

  function finish() {
      score > questions.length / 2 ? setResult(true) : setResult(false)
      setScore(i => 0)
      navigate('/gameOver')
  }

 
  return (
    <div className='h-full flex justify-center items-center relative'>
        <Result index={index} len={questions.length}/>
        <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body items-center text-center pt-[4vh]">
              {!end && <>
                <div className='flex flex-col justify-center items-center gap-2'>
                  <h2 className="card-title text-amber-950 font-bold text-[1.5em]">Question {index + 1}</h2>
                  <p className='text-yellow-900 font-bold pb-4'>{questions[index].ques}</p>
                </div>
                <div className="card-actions flex flex-col w-full">
                    {questions && questions[index].answ.map((el, ind) =>{
                    return  <Button key={ind} answer={el} clickHandler={clickHandler} className={'answers'}/>
                    })}
                </div>
              </>}
              {end && <>
                <div className='flex flex-col justify-center items-center gap-2'>
                  <h2 className="card-title text-amber-950 font-bold text-[1.5em]">You finished your quiz</h2>
                  <p className='text-yellow-900 font-bold pb-4'>You made greate work</p>
                </div>
                <div className="card-actions flex flex-col w-full">
                    <Button clickHandler={finish} answer={'Finish'}/>
                </div>
              </>}
            </div>
        </div>
    </div>
  )
}

export default Quizz