
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import ValueProposition from '@/components/ValueProposition';
import ServicesOverview from '@/components/ServicesOverview';
import SuccessStory from '@/components/SuccessStory';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <ValueProposition />
      <ServicesOverview />
      <SuccessStory />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
