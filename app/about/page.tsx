import { Metadata } from 'next';
import AboutHeroSection from './components/AboutHeroSection';
import CompanyOverviewSection from './components/CompanyOverviewSection';
import MissionVisionSection from './components/MissionVisionSection';
import ValuesSection from './components/ValuesSection';
import HistorySection from './components/HistorySection';
import TeamSection from '../components/TeamSection';
import CallToActionSection from '../components/CallToActionSection';

export const metadata: Metadata = {
    title: "Engineering Solutions Company in India | About CanOpus",
    description: "Learn about CanOpus, a premier engineering solutions company in India specializing in industrial engineering and innovation.",
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
