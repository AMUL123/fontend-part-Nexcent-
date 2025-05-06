export default function BlogSection() {
    const blogPosts = [
        {
            id: 1,
            image: "/images/image 18.svg",  // Fixed path
            title: "Creating Streamlined Safeguarding Processes with OneRen",
            link: "#",
        },
        {
            id: 2,
            image: "/images/image 19.svg",
            title: "What are your safeguarding responsibilities and how can you manage them?",
            link: "#",
        },
        {
            id: 3,
            image: "/images/image 20.svg",
            title: "Revamping the Membership Model with Triathlon Australia",
            link: "#",
        },
    ];

    return (
        <section className="max-w-6xl mx-auto text-center py-12 px-4">
            {/* Section Title */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
                Caring is the new marketing
            </h2>
            <p className="text-gray-600 mt-2 text-sm md:text-base max-w-2xl mx-auto">
            The Nextcent blog is the best place to read about the latest membership insights, trends and more. See who's joining the community, read about how our community are increasing their membership income and lot's more.​
            </p>

            {/* Blog Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
                {blogPosts.map((post) => (
                    <div key={post.id} className="bg-white shadow-lg rounded-lg overflow-hidden hover:scale-105 transition-transform">
                        {/* Image */}
                        <img
                            src={post.image}
                            alt={post.title}
                            className="w-full h-52 object-cover"
                        />
                        
                        {/* Content */}
                        <div className="p-4">
                            <h3 className="text-gray-800 text-sm font-semibold">{post.title}</h3>
                            
                            {/* Read More Link */}
                            <a
                                href={post.link}
                                className="text-green-600 font-semibold flex items-center mt-2 hover:underline"
                            >
                                Read more →
                            </a>
                        </div>
                    </div>
                ))}
            </div>

            {/* Bottom Text */}
            <div className="mt-10">
                <h3 className="text-4xl text-gray-700 font-semibold">
                    Pellentesque suscipit fringilla libero eu.
                </h3>
            </div>
        </section>
    );
}
