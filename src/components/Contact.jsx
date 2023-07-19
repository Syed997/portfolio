import React from 'react'

function Contact() {
  return (
    <div name="contact" className="w-full h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white">
        <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
            <div className="pb-8">
                  <p className="text-4xl font-bold flex justify-center ">Contact</p>
                <p className='py-6'>{"// Submit the form below to give feedback and get in touch with me"}</p>
            </div>
            <div className="flex justify-center items-center">
                  <form action="https://getform.io/f/a282e6ca-b440-4609-8759-25efd2524457" method="POST" className="flex flex-col w-full md:w-2/3">
                    <input 
                    type="text"
                    name='name'
                    placeholder='Enter your name'
                    className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
                    />
                    <input 
                    type="text"
                    name='email'
                    placeholder='Enter your email'
                    className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none my-4"
                    />
                    <textarea name="message" placeholder='Enter your message' rows="10" className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"></textarea>
                    <button className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">Submit</button>  
                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact