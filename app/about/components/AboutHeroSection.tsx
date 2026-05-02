import Image from "next/image";

// ─── IMAGE VIEWPORT ──────────────────────────────────────────────
// Adjust the position below to reframe which part of the image shows.
// objectPosition format: "X% Y%"
//   X → horizontal: 0% = far left, 50% = center, 100% = far right
//   Y → vertical:   0% = top,      50% = center, 100% = bottom
const IMAGE_POSITION = "50% 40%"; // ← change this value to reframe the image
// ─────────────────────────────────────────────────────────────────

export default function AboutHeroSection() {
    return (
        <section className="pt-20 pb-16 lg:pt-28 lg:pb-24 relative overflow-hidden">
            {/* Background image — zoom-stable via Next.js Image fill */}
            <Image
                src="/images/products/product_hero.jpg"
                alt=""
                fill
                priority
                style={{ objectFit: "cover", objectPosition: IMAGE_POSITION }}
                aria-hidden="true"
            />

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-4xl mx-auto">
                    {/* About Us Badge */}
                    <div className="flex justify-center mb-8">
                        <span className="inline-flex px-4 py-2 rounded-full text-sm font-medium bg-primary text-white">
                            About Canopus
                        </span>
                    </div>

                    {/* Main Heading */}
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-black leading-tight mb-6">
                        <span className="block">Engineering Excellence</span>
                        <span className="block text-secondary">for a Sustainable Future</span>
                    </h1>

                    {/* Subtitle */}
                    <p className="text-lg lg:text-xl text-black leading-relaxed max-w-3xl mx-auto" style={{ textShadow: "0 0 12px rgba(255,255,255,0.95), 0 2px 6px rgba(255,255,255,0.8)" }}>
                        For over 10 years, Canopus has been a trusted partner in delivering innovative engineering solutions that improve operational efficiency while reducing environmental impact.
                    </p>
                </div>
            </div>
        </section>
    );
}

