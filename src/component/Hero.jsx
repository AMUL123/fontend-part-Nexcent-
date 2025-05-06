import React from 'react'

const Hero = () => (
    <section className="flex flex-col md:flex-row p-10 bg-gray-100 justify-center items-center text-center md:text-left w-full max-w-[90%] mx-auto">
    <div className="md:w-1/2">
      <h2 className="text-5xl font-semibold text-gray-800 w-full md:w-[70%]">
        Lessons and insights <span className="text-green-600">from 8 years</span>
      </h2>
      <p className="text-gray-600 mt-2">
        Where to grow your business as a photographer: site or social media?
      </p>
      <button className="mt-4 bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600">
        Register
      </button>
    </div>
    <div className="md:w-1/2 flex justify-center mt-6 md:mt-0">
      <img src="/images/Illustration.svg" alt="Illustration" className="w-[90%] md:w-[50%] max-w-sm" />
    </div>
  </section>
  );

export default Hero