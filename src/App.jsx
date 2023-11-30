import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/layout/Footer';
import Header from './components/layout/Header';
import Home from './components/pages/Home';
import Quizz from './components/pages/Quizz';
import GameOver from './components/pages/GameOver';
import Error from './components/pages/Error';
import quizzData from './data/data.json'
// import data from './data/data.json'

import { useEffect, useState } from 'react';


function App() {
  const [result, setResult] = useState(false);
  const [data, setData] = useState([]);

  const numberOfQuestions = 5;


  function quesionsGenerate() {
    const index = [];
    for (let i = 0; i < numberOfQuestions; i++){
      const ind = Math.floor(Math.random() * quizzData.length);
      index.includes(ind) ? i -- : index.push(ind)
    }
    index.forEach(el =>  setData(prdata => [...prdata,  quizzData[el]]))
  }

  return (
    <div className="App">
      <Header />
      <div className='h-[88vh] bg-gradient-to-r from-yellow-400 via-lime-100 to-yellow-200'>
          <Routes>
              <Route path='/' element={<Home quesionsGenerate={quesionsGenerate}/>} />
              <Route path='/quizz' element={<Quizz setResult={setResult} questions={data} />} />
              <Route path='/gameOver' element={<GameOver result={result} setResult={setResult}/>} />
              <Route path='/*' element={<Error />} />
          </Routes>
      </div>
      <Footer />
    
    </div>
  );
}

export default App;
