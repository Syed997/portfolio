import React from 'react'

function About() {
  return (
    <div name="about" className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white">
          <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center items-center w-full h-full">
            <div className='pb-8 '>
              <p className="text-4xl font-bold flex justify-center">About</p>
            </div>
        <div className="w-full grid sm:grid-cols-2 gap-8 px-4">
              <div className="sm:text-right text-4xl font-semibold">
                <p>Hi, this is Jim, nice to meet you! Please take a look around.</p>
              </div>
              <div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat deleniti tenetur reiciendis magni praesentium eligendi, maiores debitis saepe consequuntur quam inventore atque aspernatur alias, iste dolorum quas consectetur nihil nisi voluptatibus hic! Placeat iure voluptate quam deleniti molestiae, atque magni ullam aspernatur dicta neque suscipit praesentium aliquid velit esse consequuntur.</p>
              </div>
            </div>
            <br />
        </div>
    </div>
  )
}

export default About