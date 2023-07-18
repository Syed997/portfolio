import React from 'react'

function About() {
  return (
    <div name="about" className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white">
          <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center items-center w-full h-full">
            <div className='pb-8 '>
                <p className="text-4xl font-bold inline border-b-4 border-gray-500">About</p>
            </div>
            <p className="mt-20 text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam dolores facere, distinctio beatae eum ullam! Exercitationem, consectetur? Veritatis similique fuga odit dolore quibusdam. Accusamus ducimus perferendis cumque vitae veritatis nulla mollitia odio et laborum sequi rerum, atque cum nisi qui eum recusandae saepe est voluptates ipsum ullam? In, quibusdam maxime?</p>
            <br />
            <p className="text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo fuga aliquam assumenda quas atque fugiat facilis asperiores pariatur dolorem, nostrum unde cupiditate, ratione quos quasi earum. Voluptates minus qui vel! In impedit, nulla eos consectetur ea quos doloribus provident minima molestiae voluptatem magnam, eius cum iusto sint, atque ut deleniti.</p>
        </div>
    </div>
  )
}

export default About