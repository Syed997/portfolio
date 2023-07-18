import React from 'react'
import heroImage from '../assets/heroImage.png';
import { MdKeyboardArrowRight } from 'react-icons/md';
import {Link} from "react-scroll";
import ReactTyped from "react-typed";
import { BsFillPersonLinesFill } from 'react-icons/bs';
export const Home = () => {
  return (
    <div name="home" className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 ">
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <p className='text-gray-500 py-4'>Hi, I'm</p>
          <h2 className="text-5xl md:text-6xl font-bold text-white max-w-md">Syed Nur.A.Rabbi Jim</h2>
          <p className="text-gray-500 py-4 max-w-md"><ReactTyped
            strings={["Web Developer", "Frontend Focused", "Software Engineer", "Fast Learner"]}
            typeSpeed={100}
            loop
            backSpeed={20}
            cursorChar=" |"
            showCursor={true}
          />
          </p>
          <div className='flex justify-between'>
            <a href='/resume.pdf' download={true} className="text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 group md:hidden">
              Resume
              <span className="ml-2"><BsFillPersonLinesFill size={18} /></span>
            </a>
            <Link to='projects' smooth duration={500} className="text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 group">
              Projects
              <span className="group-hover:rotate-90 duration-300"><MdKeyboardArrowRight size={25}/></span>
            </Link>
            
          </div>
        </div>
        <div>
          <img src={heroImage} alt="my profile" className="rounded-2xl mx-auto w-2/3 md:w-3/4" />
        </div>
      </div>
    </div>
  )
}
export default Home