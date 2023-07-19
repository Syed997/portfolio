import React from 'react'

function About() {
  return (
    <div name="about" className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white">
          <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center items-center w-full h-full">
            <div className='pb-8'>
          <p className="text-4xl font-bold flex justify-center text-red-400">About Syed</p>
            </div>
        <div className="w-full grid sm:grid-cols-2 gap-8 px-4">
              <div className="sm:text-right text-4xl font-semibold">
                <p>Hi, this is Jim, nice to meet you! Please take a look around.</p>
              </div>
              <div>
            <p>As a highly skilled and passionate frontend-focused web developer, I have successfully completed numerous projects utilizing JavaScript, React, and Tailwind, showcasing my dedication to crafting visually appealing and functional user interfaces. Additionally, my proficiency in Java, Python, and PostgreSQL enables me to handle diverse challenges. In my free time, I enjoy honing my problem-solving skills on LeetCode and sharing moments of camaraderie through friendly FIFA matches with friends.</p>
              </div>
            </div>
            <br />
        </div>
    </div>
  )
}

export default About