export default function ProductsHeroSection() {
    return (
        <section
            className="relative pt-20 pb-16 lg:pt-28 lg:pb-24 bg-cover bg-right bg-no-repeat overflow-hidden"
            style={{ backgroundImage: "url('/images/products/dust_BG.png')" }}
        >
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-xl">
                    {/* Badge */}
                    <div className="inline-flex px-4 py-2 rounded-full text-sm font-medium bg-primary text-white mb-8">
                        Our Products
                    </div>

                    {/* Main Heading */}
                    <h1 className="flex flex-col text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight mb-6">
                        <span>Engineering Solutions</span>
                        <span className="text-secondary">for Every Industry</span>
                    </h1>

                    {/* Description */}
                    <p className="text-base lg:text-lg text-gray-700 leading-relaxed">
                        Discover our comprehensive range of industrial equipment and solutions.
                        From dust collection systems to power transmission technology, we provide cutting-edge
                        technology that drives efficiency and excellence across industries.
                    </p>
                </div>
            </div>
        </section>
    );
}

