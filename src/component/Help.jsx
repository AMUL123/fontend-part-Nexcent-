import React from 'react'

const Help = () => {
  return (
    <section className="bg-gray-100 p-10 md:p-16 w-full max-w-[90%] mx-auto flex flex-col md:flex-row md:items-start gap-10 justify-between">
  {/* Left Content */}
  <div className="md:w-1/2 text-center md:text-left">
    <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 leading-snug">
      Helping a local <span className="text-green-600">business reinvent itself</span>
    </h2>
    <p className="text-gray-600 mt-2">
      We reached here with our hard work and dedication
    </p>
  </div>

  {/* Right Stats Section */}
  <div className="md:w-1/2 grid grid-cols-2 gap-6">
    {/* Stat Item 1 */}
    <div className="flex items-center gap-3">
      <img src="/images/help.svg" alt="Members" className="w-9 h-8" />
      <div>
        <p className="text-xl font-bold text-gray-800">2,245,341</p>
        <p className="text-gray-600 text-sm">Members</p>
      </div>
    </div>

    {/* Stat Item 2 */}
    <div className="flex items-center gap-3">
      <img src="/images/1help.svg" alt="Clubs" className="w-9 h-8" />
      <div>
        <p className="text-xl font-bold text-gray-800">46,328</p>
        <p className="text-gray-600 text-sm">Clubs</p>
      </div>
    </div>

    {/* Stat Item 3 */}
    <div className="flex items-center gap-3">
      <img src="/images/2help.svg" alt="Event Bookings" className="w-9 h-8" />
      <div>
        <p className="text-xl font-bold text-gray-800">828,867</p>
        <p className="text-gray-600 text-sm">Event Bookings</p>
      </div>
    </div>

    {/* Stat Item 4 */}
    <div className="flex items-center gap-3">
      <img src="/images/3help.svg" alt="Payments" className="w-9 h-8" />
      <div>
        <p className="text-xl font-bold text-gray-800">1,926,436</p>
        <p className="text-gray-600 text-sm">Payments</p>
      </div>
    </div>
  </div>
</section>
  )
}

export default Help