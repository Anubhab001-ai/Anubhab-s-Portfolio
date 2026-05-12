'use client'
import { assets, infoList, toolsData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const AboutPage = () => {
  return (
    <div
      id="about"
      className="relative min-h-screen w-full px-[12%] py-20 bg-white text-black scroll-mt-28 overflow-hidden"
    >
      {/* Background Image Blur */}
      <div className="absolute top-0 right-0 w-full h-full -z-10 opacity-30">
        <Image
          src={assets.header_bg_color}
          alt="Background effect"
          fill
          className="object-cover"
        />
      </div>

      {/* Headings */}
      <h4 className="text-center mb-2 text-lg font-sans text-gray-600">Introduction</h4>
      <h2 className="text-center text-5xl font-Ovo">About Anubhab</h2>

      {/* Main Content Row */}
      <div className="flex w-full flex-col lg:flex-row items-center gap-20 my-20">
        {/* Left Side Image */}
        <div className="w-64 sm:w-80 rounded-3xl shadow-xl overflow-hidden">
          <Image
            src={assets.user_image}
            alt="Anubhab"
            className="w-full h-full object-cover rounded-3xl"
          />
        </div>

        {/* Right Side Text & Info Cards */}
        <div className="flex-1 text-gray-800 font-sans text-lg leading-7">
          <p className="mb-8">
            As a Computer Science graduate, I am a passionate and dedicated full-stack web developer
            skilled in building responsive and user-focused websites. I have hands-on experience in
            React, Next.js, Tailwind CSS, and modern frontend tools. I enjoy solving real-world
            problems through code and continuously aim to improve my skills through projects and
            team collaboration. I am open to new opportunities and challenges in the tech industry.
          </p>

          {/* Info Cards */}
          <ul className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl">
            {infoList.map(({ icon, title, description }, index) => (
              <li
                 key={index}
                  className="border border-gray-300 rounded-xl p-6 cursor-pointer hover:bg-pink-100 hover:translate-y-1 hover:shadow-lg hover:shadow-black transition duration-300"
              >

                <Image src={icon} alt={title} className="w-7 mt-3" />
                <h3 className="my-4 font-semibold text-gray-700">{title}</h3>
                <p className="text-gray-600 text-sm">{description}</p>
              </li>
            ))}
          </ul>
          <h4 className='my-6 text-gray-700 font-Ovo'>Tools I use</h4>

          <ul className="flex items-center gap-3 sm:gap-5 flex-wrap">
              {toolsData.map((tool, index) => (
            <li
                 key={index}
                   className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 hover:shadow-lg hover:shadow-pink-500 transition duration-300"
            >
            <Image src={tool} alt="Tool" className="w-5 sm:w-7" />
             </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default AboutPage
