'use client'
import { assets, serviceData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Services = () => {
  return (
    <div
      id="services"
      className="w-full px-[12%] py-20 scroll-mt-28 bg-white text-black"
    >
      {/* Subheading */}
      <h4 className="text-center mb-2 text-lg font-Ovo text-gray-600">
        What I Offer
      </h4>

      {/* Main Heading */}
      <h2 className="text-center text-5xl font-Ovo mb-10">My Services</h2>

      {/* Description */}
      <p className="text-center max-w-2xl mx-auto mb-12 font-Ovo text-gray-700">
        As a Computer Science student, I offer full-stack web development services with a focus on responsive design and user-centric functionality. I specialize in React, Next.js, and Tailwind CSS, delivering clean, efficient, and modern solutions. My projects reflect a strong foundation in coding, creativity, and problem-solving, making me capable of building impactful digital experiences across platforms.
      </p>

      {/* Service Cards - EXACT same style as About.jsx Info Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {serviceData.map(({ icon, title, description, link }, index) => (
          <div
            key={index}
            className="border border-gray-300 rounded-xl p-6 cursor-pointer hover:bg-pink-100 hover:translate-y-1 hover:shadow-lg hover:shadow-black transition duration-300"
          >
            <Image src={icon} alt={`${title} icon`} className="w-7 mt-3" />
            <h3 className="my-4 font-semibold text-gray-700">{title}</h3>
            <p className="text-gray-600 text-sm mb-3">{description}</p>
            {link && (
              <a
                href={link}
                className="text-blue-600 text-sm flex items-center gap-1 hover:underline"
              >
                Read more
                <Image src={assets.right_arrow} alt="arrow" className="w-4" />
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Services
