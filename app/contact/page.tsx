import { Metadata } from 'next';
import ContactHeroSection from './components/ContactHeroSection';

import CallToActionSection from '../components/CallToActionSection';
// import ContactInfoSection from './components/ContactInfoSection';
import ContactFormSection from './components/ContactFormSection';
import LocationSection from './components/LocationSection';

export const metadata: Metadata = {
  title: "Contact Engineering Company India | CanOpus",
  description: "Get in touch with CanOpus, a leading engineering company in India, for industrial solutions and consultation.",
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
