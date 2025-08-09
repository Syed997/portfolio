import React from 'react'
import { FaLinkedin } from 'react-icons/fa'
import { BsGithub } from 'react-icons/bs'
import { FaFacebook } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'
import { MdCopyright } from 'react-icons/md'
import { BsEmojiSmile } from 'react-icons/bs'
function Footer() {
    const socialMedia = [
        {
            id: 1,
            child:(
                <FaLinkedin/>
            ),
            href: "https://www.linkedin.com/in/syed-nur-a-rabbi-jim-ab3670190/"
        },
        {
            id: 2,
            child: (
                <BsGithub/>
            ),
            href: "https://github.com/Syed997"
        },
        {
            id: 3,
            child:(
                <FaFacebook/>
            ),
            href: "https://www.facebook.com/haunted.zim/"
        },
        {
            id: 4,
            child:(
                <FaInstagram/>
            ),
            href: "https://www.instagram.com/_s.zim_/"
        },
    ]
  return (
      <div className="w-full h-auto text-white pt-20">
        <div className="flex flex-col justify-center items-center">
            <div className="text-3xl pb-3">{"<s.zim/>"}</div>
            <div className="flex flex-row my-6">
                {
                    socialMedia.map(({id, child, href})=>(
                        <div key={id} className="mx-4 hover:scale-125 duration-300">
                            <a href={href}>{child}</a>
                        </div>
                    ))
                }
            </div>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-2">
                  <div className="flex justify-center items-center gap-2">
                      <MdCopyright size={15} />
                      <p >Syed Nur.A.Rabbi Jim</p>
                </div>
                  <div className="flex justify-center items-center gap-2">
                      <BsEmojiSmile size={12} />
                      <p>All Rights Reserved</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer

// bg-gradient-to-b from-gray-800 to-black
