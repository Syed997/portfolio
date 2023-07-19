import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import {HiOutlineMail} from 'react-icons/hi';
import {BsFillPersonLinesFill} from 'react-icons/bs';
function SocialLinks() {
    const links=[
        {
            id: 1,
            child: (
                <>
                    LinkedIn <FaLinkedin className='ml-4' size={30} />
                </> 
            ),
            href: 'https://www.linkedin.com/in/syed-nur-a-rabbi-jim-ab3670190/',
            style: 'rounded-tr-md bg-blue-600'
        },
        {
            id: 2,
            child: (
                <>
                    GitHub <FaGithub className='ml-6' size={30} />
                </> 
            ),
            href: 'https://github.com/Syed997',
            style: 'bg-[#333333]'
            
        },
        {
            id: 3,
            child: (
                <>
                    Mail <HiOutlineMail className='ml-10' size={30} />
                </> 
            ),
            href: 'mailto:syednur.jim@gmail.com',
            style: 'bg-[#6fc2b0]'
            
        },
        {
            id: 4,
            child: (
                <>
                    Resume <BsFillPersonLinesFill className='ml-4' size={30} />
                </> 
            ),
            href: '/resume.pdf',
            style: 'rounded-br-md',
            download: true,
        }
    ]
  return (
    <div className="hidden  lg:flex flex-col top-[35%] left-0 fixed">
        <ul>
            {
                links.map(({id, child, href, style, download})=>(
                    <li key={id} className={`flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500 ${style}`}>
                        <a
                        href={href}
                        className="flex justify-center items-center w-full text-white ml-4"
                        download={download}
                        target="_blank"
                        rel="noreferrer">
                        
                            {
                                child
                            }
                        </a>
                    </li>
                ))
            }
            
        </ul>
    </div>
  )
}

export default SocialLinks