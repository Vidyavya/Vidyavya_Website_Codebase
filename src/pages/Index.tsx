import Layout from '@/components/layout/Layout';
import SEO from '@/components/SEO';
import HeroSection from '@/components/home/HeroSection';
import WhyVidyavya from '@/components/home/WhyVidyavya';
import ProgramsPreview from '@/components/home/ProgramsPreview';
import TestimonialCarousel from '@/components/home/TestimonialCarousel';

const Index = () => {
  return (
    <Layout>
      <SEO 
        title="Vidyavya | AI/ML Career Program"
        description="Vidyavya offers a specialized AI/ML Engineering program combining intensive training with real corporate internship experience."
        url="https://www.vidyavya.com/"
        image="https://www.vidyavya.com/og-image.png"
      />
      <HeroSection />
      <WhyVidyavya />
      <ProgramsPreview />
      <TestimonialCarousel />
    </Layout>
  );
};

export default Index;
