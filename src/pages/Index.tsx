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
        title="Vidyavya | AI/ML & Advanced AI Career Programs"
        description="Vidyavya offers specialized AI/ML Engineering and Advanced AI programs focused on hands-on projects, modern AI capabilities, and career readiness."
        url="https://www.vidyavya.com/"
        image="https://www.vidyavya.com/og-image.png"
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
