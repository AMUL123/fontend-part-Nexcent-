import React from 'react'

const CustomerReview = () => {
    return (
        <section className="flex flex-col md:flex-row items-center p-8 rounded-lg max-w-[90%] mx-auto bg-white shadow-md">
        {/* Image Section */}
        <div className="md:w-1/2 flex justify-center items-center min-h-full">
            <img
                src="/images/image 9.svg"
                alt="Tesla Logo"
                className="w-40 md:w-60 rounded-lg shadow-lg object-contain"
            />
        </div>
    
        {/* Text Section */}
        <div className="md:w-1/2 flex flex-col justify-center text-gray-700 text-center md:text-left min-h-full">
            <p className="text-sm leading-relaxed">
                Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum risus tincidunt ullamcorper. 
                Proin eu enim metus. Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut molestie arcu, at hendrerit elit. 
                Morbi laoreet elit at ligula molestie, nec molestie mi blandit. Suspendisse cursus tellus sed augue ultrices, quis tristique 
                nulla sodales. Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim sapien, vitae 
                placerat ante feugiat eget. Quisque vulputate odio neque, eget efficitur libero condimentum id. Curabitur id nibh id sem dignissim 
                finibus ac sit amet magna.
            </p>
    
            {/* Name & Role */}
            <div className="mt-4">
                <h3 className="text-green-600 font-semibold text-lg">Tim Smith</h3>
                <p className="text-gray-500 text-sm">British Dragon Boat Racing Association</p>
            </div>
    
            {/* Logos Row */}
            <div className="flex flex-wrap justify-around md:justify-start gap-12 mt-6 items-center">
                <img src="/images/comm1.svg" alt="icon1" className="w-8" />
                <img src="/images/2Logo.svg" alt="icon2" className="w-8" />
                <img src="/images/3Logo.svg" alt="icon3" className="w-8" />
                <img src="/images/comm2.svg" alt="icon4" className="w-8" />
                <img src="/images/5Logo.svg" alt="icon5" className="w-8" />
                <a href="#" className="text-green-600 font-semibold flex items-center hover:underline">
                    Meet all customers
                    <span className="ml-2">→</span>
                </a>
            </div>
        </div>
    </section>
    

    )
}

export default CustomerReview