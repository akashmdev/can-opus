import { Metadata } from 'next';
import ContactHeroSection from './components/ContactHeroSection';

import CallToActionSection from '../components/CallToActionSection';
// import ContactInfoSection from './components/ContactInfoSection';
import ContactFormSection from './components/ContactFormSection';
import LocationSection from './components/LocationSection';

export const metadata: Metadata = {
  title: "Contact CanOpus | Get Industrial Engineering Solutions Today",
  description: "Contact CanOpus for expert engineering solutions, industrial services, and customized systems to improve your operational efficiency.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <ContactHeroSection />
      {/* <ContactInfoSection /> */}
      <ContactFormSection />
      <LocationSection />
      <CallToActionSection />
    </main>
  );
}
