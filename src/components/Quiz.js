import React ,{useState} from 'react'

import { FaSmile } from "react-icons/fa";
import { CgSmileSad } from "react-icons/cg";

import Question from './Question'

const data = [
  {
  numb: 1,
  question: "What does HTML stand for?",
  answer: "Hyper Text Markup Language",
  options: [
    "Hyper Text Preprocessor",
    "Hyper Text Markup Language",
    "Hyper Text Multiple Language",
    "Hyper Tool Multi Language"
  ]
},
  {
  numb: 2,
  question: "What does CSS stand for?",
  answer: "Cascading Style Sheet",
  options: [
    "Common Style Sheet",
    "Colorful Style Sheet",
    "Computer Style Sheet",
    "Cascading Style Sheet"
  ]
},
  {
  numb: 3,
  question: "What does PHP stand for?",
  answer: "Hypertext Preprocessor",
  options: [
    "Hypertext Preprocessor",
    "Hypertext Programming",
    "Hypertext Preprogramming",
    "Hometext Preprocessor"
  ]
},
  {
  numb: 4,
  question: "What does SQL stand for?",
  answer: "Structured Query Language",
  options: [
    "Stylish Question Language",
    "Stylesheet Query Language",
    "Statement Question Language",
    "Structured Query Language"
  ]
},
  {
  numb: 5,
  question: "What does XML stand for?",
  answer: "eXtensible Markup Language",
  options: [
    "eXtensible Markup Language",
    "eXecutable Multiple Language",
    "eXTra Multi-Program Language",
    "eXamine Multiple Language"
  ]
},
]


const Quiz = () => {
   
  const [index,setIndex]=useState(1);
  const [score,setScore]=useState(0);
  return (
    <div className='flex flex-col justify-center items-center'>
      <div className='flex items-center justify-center text-[18px] flex-col p-10 border mt-10 shadow-2xl rounded-2xl'>
        
        {
          data.map((item,ind)=>(
            <Question index={index} setIndex={setIndex}  item={item} key={ind} score={score} setScore={setScore}/>
          ))

        }

      </div>
      
    </div>
  )
}

export default Quiz;

