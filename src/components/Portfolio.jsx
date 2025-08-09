import React from 'react'
import weather from "../assets/portfolio/weather.png";
import calculator from "../assets/portfolio/calculator.png";
import quiz from "../assets/portfolio/quizApp.png";

function Portfolio() {
    const projects = [
        {
            id: 4,
            name: "APM (Signoz)",
            details: "SigNoz-based observability platform, enabling real-time monitoring and performance analytics across infrastructure and applications. Developed and customized dashboards for actionable insights, and integrated telemetry at both infra and application levels. Contributed to DevOps efforts for scaling and high availability, ensuring optimal system performance. Implemented custom metrics and alerting mechanisms to improve incident response. Collaborated with cross-functional teams to enhance observability workflows and optimize resource utilization.",
            live: "",
            code: ""
        },
        {
            id: 5,
            name: "Workflow (processmaker 4)",
            details: "ProcessMaker 4 workflow automation platform built on Laravel, enhanced through core-level customizations to address complex business requirements. Implemented SMS integration for real-time notifications and developed custom email integration to support advanced communication workflows. Designed and deployed multiple automated processes to streamline operations and improve efficiency. Collaborated closely with stakeholders to ensure process designs aligned with organizational goals and compliance standards. Extended the platform’s capabilities through robust, maintainable Laravel-based feature development.",
            live: "",
            code: ""
        },
        {
            id: 1,
            name: "RSMS",
            details: "Robi Shareholder Management System(RSMS), a full-stack website built by Python and Odoo framework, enabling efficient management of shareholder information, taxes and finances. Collaborated on both backend and frontend development, ensuring seamless usability and regulatory compliance. Played a key role in deploying the system using Docker and Docker Compose.",
            live: "",
            code: ""
        },
        {
            id: 3,
            name: "IFRS",
            details: "IFRS, a full-stack website built on the Laravel framework, specializing in lease calculation and records management. Orchestrated seamless integration for users to upload lease details via Excel files, with the system storing data securely in the database. Implemented robust processing algorithms to accurately calculate leases and generate comprehensive Excel reports, ensuring compliance and efficiency in financial operations.",
            live: "",
            code: ""
        },
        {
            id: 2,
            name: "Weather",
            details: "Weather forecast website utilizing JavaScript, React.js and TailwindCSS, boasting full responsiveness for optimal user experience across devices. Delivered comprehensive hourly and daily forecasts, including humidity, wind speed, sunrise and sunset information. Implemented GPS search functionality alongside city search capabilities, leveraging data fetched from the OpenWeatherMap API. Ensured accurate time updates using the Luxon library and enhanced user notifications with React Toastify.",
            live: "https://delicate-sable-00d4b2.netlify.app/",
            code: "https://github.com/Syed997/forecast.git"
        }
        
    ]
    // const projects = [
    //     {
    //         id: 1,
    //         src: weather,
    //         hrefDemo: "https://delicate-sable-00d4b2.netlify.app/",
    //         hrefCode: "https://github.com/Syed997/forecast.git"
    //     },
    //     {
    //         id: 3,
    //         src: quiz,
    //         hrefDemo: "https://peppy-moxie-e37353.netlify.app",
    //         hrefCode: "https://github.com/Syed997/quiz_web.git"
    //     },
    //     {
    //         id: 2,
    //         src: calculator,
    //         hrefDemo: "https://syed997.github.io/calculator/",
    //         hrefCode: "https://github.com/Syed997/calculator.git"
    //     }
        
    // ]
  return (
      <div name="projects" className="w-full text-white py-16 relative">
        {/* Subtle grid pattern for glass effect background */}
        <div className="absolute inset-0 bg-[radial-gradient(#444_1px,transparent_1px)] [background-size:16px_16px] opacity-10"></div>
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
            <div className="pb-8">
                  <p className="text-4xl font-bold flex justify-center text-red-400">Projects</p>
                <p className="py-6 justify-start">{"// Check out some of my recent projects"}</p>
            </div>
            <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 px-12 md:px-0">
                {
                    projects.map(({id, src, name, details, hrefDemo, hrefCode, live, code})=>(
                        <div key={id} className="shadow-md shadow-gray-600 rounded-lg bg-white/10 backdrop-blur-lg border border-white/10 duration-200 hover:scale-105 h-96 overflow-y-auto overflow-x-hidden">
                            {/* <img src={src} alt="" className="rounded-md duration-200 hover:scale-105 w-80 h-60" />
                            
                            <div className="flex items-center justify-center">
                                
                                
                                <a href={hrefDemo} className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">Demo</a>
                                <a href={hrefCode} className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">Code</a>
                                
                            </div> */}
                            <div>
                                <h1 className="w-full px-1 py-1 m-4 text-2xl font-semibold flex items-center justify-center">{name}</h1>
                            </div>
                            <p className="w-80% px-1 py-1 m-4 ">{details}</p>
                            {live && code && (
                                <div className="flex items-center justify-center">
                                    <a href={live} className="w-1/2 px-6 py-3 m-4 ">Demo</a>
                                    <a href={code} className="w-1/2 px-6 py-3 m-4 ">Code</a>
                                </div>
                            )}
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default Portfolio
