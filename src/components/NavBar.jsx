import React from 'react'
import {FaBars, FaTimes} from "react-icons/fa"
function NavBar() {
    const links = [
        {
            id: 1,
            link: "home"
        },
        {
            id: 2,
            link: "about"
        },
        {
            id: 3,
            link: "portfolio"
        },
        {
            id: 4,
            link: "experience"
        },
        {
            id: 5,
            link: "contact"
        }
    ];
  return (
    <div className="flex justify-between items-center w-full h-20 text-white fixed px-4 bg-black">
        <div>
            <h1 className="text-4xl font-signature ml-2">S. Jim</h1>
        </div>
        <ul className="flex">
            {
                  links.map(({ id, link }) => (<li key={id} className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 transition ease-out">{link}</li>))
            }
        </ul>
    </div>
  )
}

export default NavBar