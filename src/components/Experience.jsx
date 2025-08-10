import React from 'react';

function Experience() {
  // Group experiences by company
  const companies = [
    {
      company: "RedDot Digital Limited",
      location: "Dhaka, Bangladesh",
      roles: [
        {
          id: 1,
          title: "Assistant Software Engineer",
          period: "December 2024 – Present",
          description: [
            "Developed and customized SigNoz (APM) dashboards, integrated infrastructure and application opentelemetry, and implemented DevOps scaling strategies for high availability and optimal performance.",
            "Enhanced ProcessMaker 4 (Laravel) workflow automation platform through core-level customizations, including SMS integration, custom email integration, and automated process design."
          ]
        },
        {
          id: 2,
          title: "Software Engineer Trainee",
          period: "April 2024 – November 2024",
          description: [
            "Contributed in the development of Robi Shareholder Management System(RSMS).",
            "Key role in the development dockerize version of Robi Shareholder Management System.",
            "Contributed in the development of IFRS website for Robi.",
            "Delivered sprint-wise client requirements with a focus on exceeding expectations."
          ]
        },
        {
          id: 3,
          title: "Software Engineer Intern",
          period: "October 2023 – March 2024",
          description: [
            "Worked on the eCommerce and ERP team as a Full-Stack Web Developer"
          ]
        }
      ]
    }
  ];

  return (
    <div name="experience" className="w-full text-white py-16">
      <div className="max-w-screen-lg mx-auto px-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold flex justify-center text-red-400">Experience</p>
          <p className="py-6 justify-start">{"// My professional journey"}</p>
        </div>
        
        <div className="space-y-12">
          {companies.map((company, companyIndex) => (
            <div key={companyIndex} className="flex">
              {/* Company section - vertically centered */}
              <div className="w-1/3 flex flex-col justify-center items-end pr-8">
                <div className="text-right">
                  <h3 className="text-2xl font-bold">{company.company}</h3>
                  <p className="text-gray-400">{company.location}</p>
                </div>
              </div>
              
              {/* Vertical separator line */}
              <div className="border-r border-gray-600 h-full mx-4"></div>
              
              {/* Roles section */}
              <div className="w-2/3 pl-8">
                {company.roles.map((role) => (
                  <div key={role.id} className="mb-8">
                    <h3 className="text-xl font-semibold text-red-400">{role.title}</h3>
                    <p className="text-gray-400 mb-2">{role.period}</p>
                    <ul className="space-y-1">
                      {role.description.map((item, i) => (
                        <li key={i} className="text-gray-300">• {item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Experience;
