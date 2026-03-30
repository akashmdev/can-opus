import { Metadata } from 'next';
import ProductsHeroSection from './components/ProductsHeroSection';
import ProductsGridSection from './components/ProductsGridSection';
import ProductsCTASection from './components/ProductsCTASection';

export const metadata: Metadata = {
    title: "Industrial Engineering Products | CanOpus",
    description: "Explore our range of industrial engineering products including monitoring systems, filtration solutions, and industrial equipment.",
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
