import React from 'react'
import data from '../../data/data.json'
import Button from '../components/Button'
import Result from '../components/Result'
import Question from '../components/Question'


function Quizz() {
  return (
    <div className='h-full flex justify-center items-center relative'>
        <Result />
        <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body items-center text-center pt-[4vh]">
                <Question ques={data.questions[0].ques} num={1}/>
                <div className="card-actions flex flex-col w-full">
                   {data.questions[0].answ.map((el, ind) => <Button key={ind} answer={el}/>)}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Quizz