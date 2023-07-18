import React from 'react'
import heroImage from '../assets/heroImage.png';
import { MdKeyboardArrowRight } from 'react-icons/md';
export const Home = () => {
  return (
    <div name="home" className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800">
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl md:text-6xl font-bold text-white">I'm a Full Stack Developer</h2>
          <p className="text-gray-500 py-4 max-w-md">I have 8 years or experience building and designing software.
            Currently, i Love to work on web application using technologies like React, Tailwind, Next JS and MySQL.
          </p>
          <div>
            <button className="text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 group">
              Portfolio
              <span className="group-hover:rotate-90 duration-300"><MdKeyboardArrowRight/></span>
            </button>
          </div>
        </div>
        <div>
          <img src={heroImage} alt="my profile" className="rounded-2xl mx-auto w-2/3 md:w-3/4" />
        </div>
      </div>
    </div>
  )
}
