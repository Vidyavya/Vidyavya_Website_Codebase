import Layout from '@/components/layout/Layout';
import SEO from '@/components/SEO';
import HeroSection from '@/components/home/HeroSection';
import LogoStrip from '@/components/home/LogoStrip';
import MetricsSection from '@/components/home/MetricsSection';
import WhyVidyavya from '@/components/home/WhyVidyavya';
import ProgramsPreview from '@/components/home/ProgramsPreview';
import TestimonialCarousel from '@/components/home/TestimonialCarousel';

const Index = () => {
  return (
    <Layout>
      <SEO 
        title="Vidyavya | AI/ML & Data Engineering Programs in Pune"
        description="Vidyavya offers AI/ML and Data Engineering programs in Pune with real-world project experience, mentorship, and internship opportunities."
        url="https://www.vidyavya.com/"
        image="https://www.vidyavya.com/og-image.png"
      />
      <HeroSection />
      <MetricsSection />
      <WhyVidyavya />
      <LogoStrip />
      <ProgramsPreview />
      <TestimonialCarousel />
    </Layout>
  );
};

export default Index;
