'use client'

import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Header = () => {
  return (
    <div className="pt-32 px-4 pb-16 bg-lightHover text-darkTheme text-center">
      
      {/* Profile Image */}
      <div className="flex justify-center mb-6">
        <Image
          src={assets.profile_img}
          alt="Profile"
          className="rounded-full w-32 h-32 object-cover border-4 border-darkHover"
        />
      </div>

      {/* Greeting */}
      <h3 className="flex justify-center items-center gap-2 text-xl md:text-2xl mb-3 font-Ovo">
        Hi! I'm Anubhab Hira <span className="text-2xl">👋</span>
      </h3>

      {/* Title */}
      <h1 className="text-3xl sm:text-5xl lg:text-[66px] font-Ovo leading-tight text-darkHover">
        Full-Stack Web Developer in India.
      </h1>

      {/* Paragraph */}
      <p className="max-w-2xl mx-auto mt-4 text-gray-800 font-Ovo">
        As a passionate and motivated Computer Science graduate with a strong foundation in programming, web development, and AI/ML concepts, I am eager to apply my academic knowledge and project experience in a professional environment, continuously learn, and contribute meaningfully to innovative solutions.
      </p>

      {/* Buttons */}
      <div className="mt-6 flex flex-col sm:flex-row justify-center items-center gap-4 z-10 relative">
  <a
  href="#contact"
  className="px-10 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2"
>
  Contact me
  <Image src={assets.right_arrow_white} alt="Arrow" className="w-4" />
</a>


  <a
    href="/sample-resume.pdf"
    download
    className="px-10 py-3 border border-gray-500 rounded-full flex items-center gap-2 hover:bg-gray-100"
  >
    My Resume
    <Image src={assets.download_icon} alt="Download Icon" className="w-4" />
  </a>
</div>

    </div>
  )
}

export default Header
