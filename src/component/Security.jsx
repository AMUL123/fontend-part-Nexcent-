import React from 'react'

const Security = () => {
  return (
    <section className="flex flex-col md:flex-row p-10 bg-white justify-center items-center text-center md:text-left w-full max-w-[90%] mx-auto gap-8">
    {/* Image Section */}
    <div className="md:w-1/2 flex justify-center group">
        <img
            src="\public\images\pana.svg" // Fixed the image path
            alt="Illustration"
            className="w-[95%] md:w-[60%] max-w-md transition-transform duration-300 ease-in-out group-hover:scale-125"
        />
    </div>

    {/* Content Section */}
    <div className="md:w-1/2">
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 leading-snug">
        How to design your site footer like we did
        </h2>
        <p className="text-gray-600 mt-4">
        Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque elit erat a magna. Donec quis erat at libero ultrices mollis. In hac habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur quis massa. Praesent felis est, finibus et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus ipsum id gravida.
        </p>
        <button className="mt-6 bg-green-500 text-white px-6 py-3 rounded-md hover:bg-green-600 transition">
            Learn More
        </button>
    </div>
</section>
  )
}

export default Security