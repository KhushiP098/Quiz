import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='flex flex-col items-center justify-center '>
        <p className='md:text-[80px] text-[40px] md:leading-[72px] my-10 font-[Lemon] '>Quiz Game</p>
        <div className='flex items-center justify-center text-[18px] flex-col p-5 border md:mt-10 shadow-2xl rounded-2xl'>
            <p className='text-[30px]  leading-[72px] my-5 font-[Lemon] '>Rules</p>
            <ul className='list-disc px-8 '>
                <li>You will have only 15 seconds per each question.</li>
                <li>Once you select your answer, it can't be undone.</li>
                <li>You can't select any option once time goes off.</li>
                <li>You can't exit from the Quiz while you're playing.</li>
                <li>You'll get points on the basis of your correct answers.</li>
            </ul>
            <div className='flex flex-end'>
              <Link to='/quiz'>
                <button className='text-white font-bold bg-blue-500 rounded-lg  my-8 p-2 w-[200px]'>Play</button>
              </Link>  
            </div>    
        </div>
    </div>
  )
}

export default Home
