import React from 'react'
import weather from "../assets/portfolio/weather.png";
import calculator from "../assets/portfolio/calculator.png";
import bank from "../assets/portfolio/bank.png";
function Portfolio() {
    const projects = [
        {
            id: 1,
            src: weather,
            hrefDemo: "https://delicate-sable-00d4b2.netlify.app/",
            hrefCode: "https://github.com/Syed997/forecast.git"
        },
        {
            id: 2,
            src: calculator,
            hrefDemo: "https://syed997.github.io/calculator/",
            hrefCode: "https://github.com/Syed997/calculator.git"
        },
        {
            id: 3,
            src: bank,
            hrefDemo: "https://syed997.github.io/Banking-System/",
            hrefCode: "https://github.com/Syed997/Banking-System.git"
        }
    ]
  return (
    <div name="projects" className="bg-gradient-to-b from-black to-gray-800 w-full text-white h-full">
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
            <div className="pb-8">
                <p className="text-4xl font-bold flex justify-center">Projects</p>
                <p className="py-6 justify-start">\\ Check out some of my recent projects</p>
            </div>
            <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-8 px-12 md:px-0">
                {
                    projects.map(({id, src, hrefDemo, hrefCode})=>(
                        <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
                            <img src={src} alt="" className="rounded-md duration-200 hover:scale-105 w-80 h-60" />
                            
                            <div className="flex items-center justify-center">
                                
                                <a href={hrefDemo}><button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">Demo</button></a>
                                <a href={hrefCode}><button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">Code</button></a>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default Portfolio