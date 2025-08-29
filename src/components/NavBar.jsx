import React, { useState } from 'react';
import {FaBars, FaTimes} from "react-icons/fa";
import {Link} from "react-scroll";
function NavBar() {
    const [nav, setNav] = useState(false);
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
            link: "projects"
        },
        {
            id: 4,
            link: "skills"
        },
        {
            id: 5,
            link: "contact"
        }
    ];
  return (
    <div className="flex justify-between items-center w-full h-16 text-white fixed top-0 left-0 right-0 px-4 bg-white/10 backdrop-blur-md border-b border-white/5 z-50">
        <div>
            {/* <h1 className="text-3xl font-signature ml-2">S. Jim</h1> */}
            <h1 className="text-3xl ml-2">{"<s.zim/>"}</h1>
        </div>
        <ul className="hidden md:flex">
            {
                  links.map(({ id, link }) => (<li key={id} className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 transition ease-out"><Link to={link} smooth duration={500}>{link}</Link></li>))
            }
        </ul>
        <div onClick={()=> setNav(!nav)} className="md:hidden cursor-pointer pr-4 z-10 text-gray-500">
            {
                  nav ? <FaTimes size={30} /> : <FaBars size={30} />
            }
        </div>
        <div className={`fixed inset-0 z-40 transition-opacity duration-300 ease-in-out ${nav ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
            <div className="absolute inset-0 bg-black/20 backdrop-blur-sm" onClick={() => setNav(false)}></div>
        </div>
        <ul className={`flex flex-col absolute top-16 right-1 w-35 bg-black/60 backdrop-blur-2xl rounded-lg border border-white/10 shadow-lg transform transition-all duration-300 ease-in-out z-50 ${nav ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}`}>
            {
                links.map(({ id, link }) => (
                    <li key={id} className="px-4 cursor-pointer capitalize py-3 text-base text-white hover:bg-white/10 transition-colors">
                        <Link onClick={()=>setNav(!nav)} to={link} smooth duration={500}>{link}</Link>
                    </li>
                ))
            }
        </ul>
    </div>
  )
}

export default NavBar
