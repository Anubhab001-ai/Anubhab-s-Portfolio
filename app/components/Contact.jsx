'use client';
import React, { useState } from 'react';

const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "e4a6182f-2660-4596-997e-086627a32063");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };    


  return (
    <div
      id="contact"
      className='w-full px-[12%] py-20 scroll-mt-20 bg-[url("/footer-bg-color.png")] bg-no-repeat bg-center bg-[length:90%_auto] bg-white text-black'
    >
      {/* Headings */}
      <h4 className="text-center mb-2 text-lg font-Ovo text-gray-600">Contact With Me</h4>
      <h2 className="text-center text-5xl font-Ovo mb-10">Get In Touch</h2>

      {/* Description */}
      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo text-gray-700">
        Feel free to get in touch for collaborations, project inquiries, or opportunities. I’m always open to discussing new ideas and bringing creative solutions to life through code.
      </p>

      {/* Contact Form */}
      <form onSubmit={onSubmit} className="max-w-2xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10 mb-8">
          <input
            type="text"
            placeholder="Enter your name"
            required
            className="p-3 outline-none border border-gray-300 rounded-xl bg-white hover:bg-pink-100 hover:translate-y-1 hover:shadow-lg hover:shadow-black transition duration-300"
          name='name'/>
          <input
            type="email"
            placeholder="Enter your email"
            required
            className="p-3 outline-none border border-gray-300 rounded-xl bg-white hover:bg-pink-100 hover:translate-y-1 hover:shadow-lg hover:shadow-black transition duration-300"
          name='email'/>
        </div>
        <textarea
          rows="6"
          placeholder="Enter your message"
          required
          className="w-full p-4 outline-none border border-gray-300 rounded-xl bg-white hover:bg-pink-100 hover:translate-y-1 hover:shadow-lg hover:shadow-black transition duration-300 mb-6"name='message'
        ></textarea>

        {/* Submit Button Styled Like Boxes */}
        <button
          type="submit"
          className="block mx-auto px-10 py-3 border border-gray-300 rounded-xl bg-white text-gray-700 hover:bg-pink-100 hover:translate-y-1 hover:shadow-lg hover:shadow-black transition duration-300"
        >
          Submit Now
        </button>
        <p className='mt-4'>{result}</p>
      </form>
    </div>
  );
};

export default Contact;
