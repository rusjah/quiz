import React, { useState } from 'react'
// import data from '../../data/data.json'
import Button from '../components/Button'
import Result from '../components/Result'
import Question from '../components/Question'
import { useNavigate } from 'react-router-dom'


function Quizz({setResult, questions}) {
  const [index, setIndex] = useState(0)

  const navigate = useNavigate()

  function clickHandler() {
     
      navigate('/gameOver')
  }
    
  return (
    <div className='h-full flex justify-center items-center relative'>
        {/* <Result /> */}
        <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body items-center text-center pt-[4vh]">
                <Question ques={questions[index].ques} num={1}/>
                <div className="card-actions flex flex-col w-full">
                   {questions[index].answ.map((el, ind) =>{
                    return  <Button key={ind} answer={el} clickHandler={clickHandler}/>
                   })}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Quizz