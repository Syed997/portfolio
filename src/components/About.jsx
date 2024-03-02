import React from 'react'

function About() {
  return (
    <div name="about" className="w-full h-full md:h-screen bg-zinc-900	 text-white">
          <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center items-center w-full h-full">
            <div className='pb-8'>
          <p className="text-4xl font-bold hidden md:flex justify-center text-red-400">About Syed</p>
            </div>
        <div className="w-full grid sm:grid-cols-2 gap-8 px-4">
              <div className="sm:text-right text-4xl font-semibold">
                <p>Hey, I'm Jim! Welcome to my corner of the web. Take a tour.</p>
              </div>
              <div>
                <p>I'm a Software Engineer Intern at REDDOT Digital Limited, actively contributing to projects like the Robi Shareholder Management System (RSMS) and the IFRS website for Robi. My role involves ensuring data accuracy, troubleshooting, and developing Dockerized versions of systems. With expertise in PHP, Python, Docker, JavaScript, Laravel, Django, Odoo, and more, I thrive in both backend and frontend development. I'm passionate about delivering seamless solutions that exceed client expectations and am adept at teamwork, documentation, and communication.</p>
              </div>
            </div>
            <br />
        </div>
    </div>
  )
}

export default About

// bg-gradient-to-b from-gray-800 to-black