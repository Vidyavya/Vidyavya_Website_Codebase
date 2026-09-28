import Layout from '@/components/layout/Layout';
import SEO from '@/components/SEO';
import HeroSection from '@/components/home/HeroSection';
import LogoStrip from '@/components/home/LogoStrip';
import WhyVidyavya from '@/components/home/WhyVidyavya';
import ProgramsPreview from '@/components/home/ProgramsPreview';
import TestimonialCarousel from '@/components/home/TestimonialCarousel';

const Index = () => {
  return (
    <Layout>
      <SEO 
        title="Vidyavya | AI/ML Engineering Career Program"
        description="Vidyavya offers an industry-focused 6-month AI/ML Engineering program combining intensive practical training, 3 months corporate internship, and dedicated career support."
        url="https://www.vidyavya.com/"
        image="https://www.vidyavya.com/logo.png"
      />
      <HeroSection />
      <WhyVidyavya />
      <LogoStrip />
      <ProgramsPreview />
      <TestimonialCarousel />
    </Layout>
  );
};

export default Index;
