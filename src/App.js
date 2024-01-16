import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import Quiz from './components/Quiz'


function App() {
  return (
    <div className='flex justify-center items-center'>

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/quiz" element={<Quiz/>}/>

      </Routes>

    </div>
  );
}

export default App;
