'use client'

import { assets } from '@/assets/assets'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

const Navbar = () => {
  const [isScroll, setIsScroll] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScroll(true)
      } else {
        setIsScroll(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      {/* Background Image */}
      <div className="fixed top-0 right-0 w-full -z-10 translate-y-[-80%]">
        <Image src={assets.header_bg_color} alt="Header BG" className="w-full" />
      </div>

      {/* Main Navbar */}
      <nav
        className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 transition-all duration-300 ${
          isScroll
            ? 'bg-white/30 backdrop-blur-md shadow-md'
            : 'bg-transparent'
        }`}
      >
        {/* Logo */}
        <a href="#">
          <Image src={assets.logo} alt="Logo" className="w-28 cursor-pointer mr-14" />
        </a>

        {/* Desktop Menu */}
        <ul className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 ${isScroll ? "" : "bg-white bg-opacity-50 shadow-sm font-Outfit"}`}>
          <li><a href="#top">Home</a></li>
          <li><a href="#about" className="font-Ovo">About Anubhab</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#work">Anubhab's Projects</a></li>
          <li><a href="#contact">Contact Anubhab</a></li>
        </ul>

        {/* Right Side */}
        <div className="flex items-center">
          <button type="button" className="p-2 rounded-full hover:bg-gray-200 transition">
            <Image src={assets.moon_icon} alt="Toggle Theme" width={24} height={24} />
          </button>

          <a
            href="#contact"
            className="hidden lg:flex items-center gap-2 px-10 py-2.5 border border-gray-500 rounded-full ml-4 font-Outfit"
          >
            Contact
            <Image src={assets.arrow_icon} alt="Arrow" className="w-3" />
          </a>

          {/* Mobile Menu */}
          <button
            type="button"
            onClick={() => setMenuOpen(true)}
            className="block md:hidden ml-3 p-2 rounded-full hover:bg-gray-200 transition"
          >
            <Image src={assets.menu_black} alt="Menu" width={24} height={24} />
          </button>
        </div>
      </nav>

      {/* Mobile Sidebar */}
      <div
        className={`flex md:hidden flex-col gap-4 py-20 px-10 fixed top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition-transform duration-500 ${
          menuOpen ? 'right-0' : 'right-[-16rem]'
        }`}
      >
        <button
          type="button"
          onClick={() => setMenuOpen(false)}
          className="absolute right-6 top-6 p-2 rounded-full hover:bg-gray-200 transition"
        >
          <Image src={assets.close_black} alt="Close" width={20} height={20} />
        </button>

        <a href="#top" onClick={() => setMenuOpen(false)} className="text-lg">Home</a>
        <a href="#about" onClick={() => setMenuOpen(false)} className="text-lg">About Anubhab</a>
        <a href="#services" onClick={() => setMenuOpen(false)} className="text-lg">Services</a>
        <a href="#work" onClick={() => setMenuOpen(false)} className="text-lg">Anubhab's Projects</a>
        <a href="#contact" onClick={() => setMenuOpen(false)} className="text-lg">Contact</a>
      </div>
    </>
  )
}

export default Navbar
