import React from 'react'

const Clients = () => (
  <section className="text-center p-6 md:p-10">
    <h3 className=" md:text-4xl font-semibold text-xl">Our Clients</h3>
    <p className="text-gray-600 text-sm md:text-base">
      We have been working with some Fortune 500+ clients
    </p>
    <div className="flex flex-wrap justify-center md:justify-between gap-6 mt-6">
      {Array.from({ length: 7 }, (_, i) => (
        <div 
          key={i} 
          className="w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center md:hover:scale-150 md:hover:transition-transform md:hover:duration-300"
        >
          <img
            src={`/images/${i + 1}Logo.svg`}
            alt={`Client Logo ${i + 1}`}
            className="max-w-full max-h-full object-contain"
          />
        </div>
      ))}
    </div>
  </section>
);

export default Clients;