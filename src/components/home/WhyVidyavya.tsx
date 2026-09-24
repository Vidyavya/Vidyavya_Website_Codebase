import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Section from '@/components/ui/Section';
import SectionHeader from '@/components/ui/SectionHeader';
import { Target, Lightbulb, Users, Award, Briefcase, FileCheck, Rocket } from 'lucide-react';

const features = [
  {
    icon: Target,
    title: 'Job-Focused Curriculum',
    description: 'Every module is designed with industry demands in mind.',
  },
  {
    icon: Lightbulb,
    title: 'Industry-Relevant Learning',
    description: 'Go beyond theory with practical applications, tools, and modern AI workflows.',
  },
  {
    icon: Users,
    title: 'Expert Mentorship',
    description: 'Learn directly from founders and senior professionals.',
  },
  {
    icon: Award,
    title: 'Advanced AI Skills',
    description: 'Master modern AI capabilities and build skills aligned with the future of intelligence.',
  },
  {
    icon: Briefcase,
    title: 'Career Support',
    description: 'Portfolio refinement, technical interview prep, and career guidance for AI roles.',
  },
  {
    icon: Rocket,
    title: 'Hands-On Projects',
    description: 'Apply your learning through practical projects based on real-world AI use cases.',
  },
  {
    icon: Briefcase,
    title: 'Corporate Internship',
    description: 'Step into a real corporate environment, work on industry projects, and gain experience that goes beyond the classroom',
  },
];

const WhyVidyavya = () => {
  return (
    <Section className="pt-6 md:pt-10 pb-12 md:pb-16">
      <SectionHeader
        label="Why Choose Vidyavya?"
        title="Built for the Future of AI"
        subtitle="Vidyavya brings together founder-led AI/ML training, modern technology, and real corporate internship experience to prepare future AI professionals beyond the classroom"
      />

      <div className="relative overflow-hidden mb-12 py-4">
        <div className="flex testimonial-scroll w-max">
          {/* First Set */}
          <div className="flex gap-6 px-3">
            {features.map((feature, index) => (
              <div
                key={`feature-1-${index}`}
                className="w-[300px] bg-card p-6 rounded-xl shadow-card hover:shadow-hover transition-shadow flex-shrink-0 border border-border"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 text-primary">
                  <feature.icon className="w-6 h-6" />
                </div>
                <h3 className="font-heading font-bold text-lg text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
          {/* Duplicate Set for Infinite Scroll */}
          <div className="flex gap-6 px-3">
            {features.map((feature, index) => (
              <div
                key={`feature-2-${index}`}
                className="w-[300px] bg-card p-6 rounded-xl shadow-card hover:shadow-hover transition-shadow flex-shrink-0 border border-border"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 text-primary">
                  <feature.icon className="w-6 h-6" />
                </div>
                <h3 className="font-heading font-bold text-lg text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="text-center">
        <Button variant="cta" size="lg" asChild>
          <Link to="/about">Learn More About Us</Link>
        </Button>
      </div>
    </Section>
  );
};

export default WhyVidyavya;
