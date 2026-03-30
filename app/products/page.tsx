import { Metadata } from 'next';
import ProductsHeroSection from './components/ProductsHeroSection';
import ProductsGridSection from './components/ProductsGridSection';
import ProductsCTASection from './components/ProductsCTASection';

export const metadata: Metadata = {
    title: "Industrial Engineering Products | Monitoring & Filtration Systems",
    description: "Discover CanOpus industrial products including filtration systems, monitoring equipment, and instrumentation for efficient plant operations.",
    keywords: 'industrial products, dust collection, power transmission, gas turbine filtration, screw pumps, flow meters, condition monitoring',
};

export default function ProductsPage() {
    return (
        <main className="min-h-screen">
            <ProductsHeroSection />
            <ProductsGridSection />
            <ProductsCTASection />
        </main>
    );
}
