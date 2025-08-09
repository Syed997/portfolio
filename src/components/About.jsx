import React from 'react'

function About() {
  return (
    <div name="about" className="w-full h-full md:h-screen text-white">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center items-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold hidden md:flex justify-center text-red-400">
            About Syed
          </p>
        </div>
        <div className="w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-semibold">
            <p>Hey, I'm Jim! Welcome to my corner of the web. Take a tour.</p>
          </div>
          <div>
            <p>
              I am a Software Engineer at RedDot Digital Limited, contributing
              to diverse, high-impact projects including the Robi Shareholder
              Management System (RSMS), the IFRS website for Robi, a customized
              ProcessMaker 4 (Laravel) workflow automation platform, and a
              SigNoz-based observability platform. My work spans full-stack
              development, core-level system customizations, and DevOps
              practices such as Dockerization and scalable deployments. I have
              implemented SMS and custom email integrations, developed automated
              business processes, and built real-time monitoring dashboards with
              integrated infrastructure and application telemetry. Proficient in
              PHP, Python, JavaScript, TypeScript, Laravel, Django, Odoo,
              Node.js, React, Next.js, Docker, and related technologies, I excel
              in delivering efficient, scalable, and maintainable solutions. I
              am committed to exceeding client expectations through clean code,
              effective collaboration, and meticulous documentation.
            </p>
          </div>
        </div>
        <br />
      </div>
    </div>
  );
}

export default About

// bg-gradient-to-b from-gray-800 to-black
