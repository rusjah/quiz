import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/layout/Footer';
import Header from './components/layout/Header';
import Home from './components/pages/Home';
import Quizz from './components/pages/Quizz';
import GameOver from './components/pages/GameOver';
import Error from './components/pages/Error';
import data from './data/data.json'


function App() {
  return (
    <div className="App">
      <Header />
      <div className='h-[88vh]'>
          <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/quizz' element={<Quizz />} />
              <Route path='/gameOver' element={<GameOver />} />
              <Route path='/*' element={<Error />} />
          </Routes>
      </div>
      <Footer />
    
    </div>
  );
}

export default App;
