import React, { useEffect, useState } from 'react'
import { RxCrossCircled } from "react-icons/rx";
import { TiTick } from "react-icons/ti";
import { Link } from 'react-router-dom'
import { FaCrown } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

const Question = ({ item, setIndex, index, score, setScore }) => {
  const options = item.options;
  const [time, setTime] = useState(15);
  const [show, setShow] = useState(false);
  const [ans, setAns] = useState(false);
  const [ScoreModal, setScoreModal] = useState(false);
  const [Next, setNext] = useState(false);

  const navigate=useNavigate();

  const handleIcons = (id) => {
    if (item.answer === options[id] && !ans) {
      setAns(true);
      setScore(score + 1);
    }

    else if(item.answer !== options[id] && !ans){
      setShow(true);
      setAns(true);
    }
    clearInterval(myInterval);
    if(index<5) setNext(true);
    else if (index === 5) setScoreModal(true);
    
  }

  const myInterval = setInterval(() => {
    if (time > 0 && !ans) {
      setTime(time - 1);
    } else {
      // Timer has expired, user didn't select an option
      if(!ans)setAns(true);
      if(index<5)setNext(true);
      else if(index === 5) setScoreModal(true);
      setNext(true);
      clearInterval(myInterval);
    }
  }, 1000);

  useEffect(() => {
    setNext(false);
    setTime(15);
    setAns(false);

  }, [index]);

  useEffect(() => {
    
    return () => {
      clearInterval(myInterval);
    };
  },);


  return (
    <div className='flex justify-center items-center'>

      {
        item.numb === index &&
        <div>

          {/* timer */}

          <div className='flex justify-end items-center'>

            <div className='py-2 px-5  text-[20px] bg-blue-500  text-white text-bold rounded-lg mb-2'>Time left :<span>{time}</span></div>

          </div>

          <p className='text-[25px] mb-8 font-serif font-bold'>Q{index}  {item.question}</p>

          {/* options */}
          {
            options.map((ele,ind)=>(
              ele===item.answer?
              <div onClick={() => handleIcons(ind)}
                className={`px-3 py-2 border-blue-300 border bg-blue-100/[0.2] rounded-lg my-4 md:w-[500px] ${!ans?"cursor-pointer":""} flex items-center justify-between`}>
                {ele}
                {
                  ans &&
                  <span>
                    <TiTick size={30} className='text-green-400' />
                  </span>
                }
              </div>
              :
              <div onClick={() => handleIcons(ind)}
                className={`px-3 py-2 border-blue-300 border bg-blue-100/[0.2] rounded-lg my-4 md:w-[500px] ${!ans?"cursor-pointer":""} flex items-center justify-between`}>
                {ele}
                {
                  show &&
                  <span>
                    <RxCrossCircled size={25} className='text-red-600' />
                  </span>
                }
              </div>
            ))
          }

          {/* pageInfo */}
          <div className='flex items-center justify-between mt-10'>
            <p className='border p-3 rounded-lg'>{index} of 5 Question</p>
            {Next &&
              <button onClick={() => setIndex(index + 1)}
                className='cursor-pointer py-2 px-5 bg-blue-500 rounded-lg text-white'>Next</button>
            }


          </div>

          {/* display score */}
          {
            ScoreModal &&
            <div className='flex flex-col items-center justify-center bg-white w-[600px] h-[520px] absolute  top-[40px]  '>

            <FaCrown size={200} className='text-yellow-600 '/>
            <p>You have completed the Quiz!</p>
            <p className='font-serif font-bold text-[25px]'>Score : {score}/5</p>
            <div className='flex items-center justify-center  mt-10'>
              <Link to='/'> <button className='cursor-pointer py-2 px-5 bg-blue-500 rounded-lg text-white'>Back </button></Link>

            </div>

          </div>
          }


        </div>
      }

    </div>
  )
}

export default Question
