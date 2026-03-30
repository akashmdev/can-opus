import { Metadata } from 'next';
import AboutHeroSection from './components/AboutHeroSection';
import CompanyOverviewSection from './components/CompanyOverviewSection';
import MissionVisionSection from './components/MissionVisionSection';
import ValuesSection from './components/ValuesSection';
import HistorySection from './components/HistorySection';
import TeamSection from '../components/TeamSection';
import CallToActionSection from '../components/CallToActionSection';

export const metadata: Metadata = {
    title: "About CanOpus | Engineering Solutions & Industrial Innovation",
    description: "Learn about CanOpus, a trusted engineering solutions provider delivering innovative industrial services focused on efficiency, reliability, and environmental sustainability.",
};

export default function AboutPage() {
    return (
        <main className="min-h-screen">
            <AboutHeroSection />
            <CompanyOverviewSection />
            <MissionVisionSection />
            <ValuesSection />
            <HistorySection />
            {/* <TeamSection /> */}
            <CallToActionSection />
        </main>
    );
}
