'use client';
import { assets, workData } from '@/assets/assets';
import Image from 'next/image';
import React from 'react';

const Work = () => {
  return (
    <div id="work" className="w-full px-[12%] py-20 scroll-mt-20 bg-white text-black">
      {/* Subheading */}
      <h4 className="text-center mb-2 text-lg font-Ovo text-gray-600">My Portfolio</h4>

      {/* Main Heading */}
      <h2 className="text-center text-5xl font-Ovo mb-10">Anubhab's Projects</h2>

      {/* Description */}
      <p className="text-center max-w-2xl mx-auto mb-12 font-Ovo text-gray-700">
        Projects in computer science are crucial as they provide hands-on experience, enhance problem-solving skills, demonstrate technical knowledge, and prepare students for real-world challenges. They also strengthen portfolios and boost employability.
      </p>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {workData.map((project, index) => (
          <div
            key={index}
            className="border border-gray-300 rounded-xl overflow-hidden group cursor-pointer hover:bg-pink-100 hover:translate-y-1 hover:shadow-lg hover:shadow-black transition duration-300"
          >
            {/* Image */}
            <div className="relative aspect-square w-full">
              <Image
                src={project.bgImage}
                alt={project.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>

            {/* Info */}
            <div className="p-4 flex items-center justify-between">
              <div>
                <h3 className="text-md font-semibold text-gray-800">{project.title}</h3>
                <p className="text-sm text-gray-600">{project.description}</p>
              </div>
              <Image src={assets.send_icon} alt="Send icon" className="w-5 h-5" />
            </div>
          </div>
        ))}
      </div>

      {/* Show More Button */}
      <a
  href="#"
  className="w-max flex items-center justify-center gap-2 text-gray-800 border border-gray-300 rounded-xl py-3 px-10 mx-auto my-16 cursor-pointer hover:bg-pink-100 hover:translate-y-1 hover:shadow-lg hover:shadow-black transition duration-300"
>
  Show More
  <Image src={assets.right_arrow_bold} alt="Right arrow" className="w-4" />
</a>
    </div>
  );
};

export default Work;
