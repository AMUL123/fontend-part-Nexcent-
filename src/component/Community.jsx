import React from 'react'

const Community = () => {
    const items = [
        {
            id: 1,
            icon: "/public/images/1community.svg", // Replace with actual icon paths
            title: (
                <>
                    Membership <span className="block">Organisations</span>
                </>
            ),
            description:
                "Our membership management software provides full automation of membership renewals and payments.",
        },
        {
            id: 1,
            icon: "/public/images/2community.svg", // Replace with actual icon paths
            title: (
                <>
                    Membership <span className="block">Organisations</span>
                </>
            ),
            description:
                "Our membership management software provides full automation of membership renewals and payments.",
        },
        {
            id: 1,
            icon: "/public/images/3community.svg", // Replace with actual icon paths
            title: (
                <>
                    Membership <span className="block">Organisations</span>
                </>
            ),
            description:
                "Our membership management software provides full automation of membership renewals and payments.",
        },
    ];

    return (
        <section className="text-center p-6 md:p-10">
            <h2 className="text-2xl md:text-3xl font-semibold">
                Manage your entire community in a single system
            </h2>
            <p className="text-gray-500 text-sm md:text-base mt-2">
                Who is Nextcent suitable for?
            </p>

            <div className="flex flex-wrap justify-around gap-6 mt-8">
                {items.map((item) => (
                    <div
                        key={item.id}
                        className="bg-white shadow-lg rounded-lg p-6 max-w-xs text-center transition-transform duration-300 hover:scale-105"
                    >
                        <div className="flex justify-center">
                            <img src={item.icon} alt={item.title} className="w-12 h-12" />
                        </div>
                        <h3 className="text-xl font-semibold mt-4">{item.title}</h3>
                        <p className="text-gray-600 text-sm mt-2">{item.description}</p>
                    </div>
                ))}
            </div>
            <section className="flex flex-col md:flex-row p-10 bg-white justify-center items-center text-center md:text-left w-full max-w-[90%] mx-auto gap-8">
                {/* Image Section */}
                <div className="md:w-1/2 flex justify-center group">
                    <img
                        src="/images/Frame 35.svg" // Fixed the image path
                        alt="Illustration"
                        className="w-[95%] md:w-[60%] max-w-md transition-transform duration-300 ease-in-out group-hover:scale-125"
                    />
                </div>

                {/* Content Section */}
                <div className="md:w-1/2">
                    <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 leading-snug">
                        The unseen of spending three years at Pixelgrade
                    </h2>
                    <p className="text-gray-600 mt-4">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at amet
                        justo ipsum. Sed accumsan quam vitae elit varius fringilla.
                    </p>
                    <button className="mt-6 bg-green-500 text-white px-6 py-3 rounded-md hover:bg-green-600 transition">
                        Learn More
                    </button>
                </div>
            </section>

        </section>
    );
};

export default Community