import { Link } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import SEO from '@/components/SEO';
import Section from '@/components/ui/Section';
import SectionHeader from '@/components/ui/SectionHeader';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import {
  Building2,
  GraduationCap,
  Users,
  Target,
  CheckCircle,
  ArrowRight,
} from 'lucide-react';

const companyBenefits = [
  'Students trained on real-world tools and workflows',
  'Reduced onboarding and training time',
  'Engage learners on live projects and practical assignments',
  'Early identification of high-potential talent',
];

const companyProcess = [
  {
    step: '01',
    title: 'Share Your Requirements',
    description: 'Companies share relevant roles, skill requirements, or AI use cases.',
  },
  {
    step: '02',
    title: 'Talent Alignment',
    description: 'Vidyavya identifies learners whose skills and interests match the requirement.',
  },
  {
    step: '03',
    title: 'Skill Evaluation',
    description: 'Learners are evaluated based on their technical knowledge, projects, and overall readiness.',
  },
  {
    step: '04',
    title: 'Connect & Hire',
    description: 'Companies interact with shortlisted candidates and make hiring decisions based on their requirements.',
  },
];

const collegeBenefits = [
  'Industry-aligned training across AI/ML Engineering and Advanced AI',
  'Hands-on, project-based learning beyond traditional classrooms',
  'Improved placement performance and employer confidence',
  'Strong industry connect for students and institutions',
];

const collegeProcess = [
  {
    step: '01',
    title: 'Strategic Integration',
    description: 'Vidyavya programs integrate alongside existing academic structures.',
  },
  {
    step: '02',
    title: 'Hands-on Training',
    description: 'Students receive hands-on training through guided projects.',
  },
  {
    step: '03',
    title: 'Industry-Relevant Learning',
    description: 'Learn industry-relevant tools, technologies, and workflows.',
  },
  {
    step: '04',
    title: 'Enhanced Outcomes',
    description: 'Colleges enhance outcomes without disrupting academics.',
  },
];

import PartnerForm from '@/components/partner/PartnerForm';
import { useState } from 'react';

const Partner = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <Layout>
      <SEO 
        title="Partner With Us | Vidyavya"
        description="Partner with Vidyavya to bridge the gap between academia and industry. We work with companies and colleges to build job-ready tech talent."
        url="https://www.vidyavya.com/partner"
      />
      <div className="w-full overflow-hidden">
      {/* Hero */}
      <section className="pt-12 pb-11 md:pt-20 md:pb-16 bg-gradient-to-b from-cream to-background">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="font-heading text-[1.7rem] md:text-4xl lg:text-[2.8rem] font-bold text-foreground mb-4">
              Building the <span className="text-primary">Future, Together</span>
            </h1>
            <p className="font-body text-lg md:text-xl text-muted-foreground leading-relaxed mb-6">
              We partner with companies and colleges committed to developing skilled, job-ready tech talent.
            </p>
          </motion.div>
        </div>
      </section>

      {/* For Companies */}
      <Section className="pt-8 pb-12 md:pt-16 md:pb-24">
        <div className="max-w-3xl mb-10 md:mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center">
              <Building2 className="w-6 h-6 text-secondary-foreground" />
            </div>
            <span className="font-heading font-semibold text-xl text-foreground">
              For Companies
            </span>
          </div>
          <h2 className="font-heading text-3xl md:text-4xl font-semibold text-foreground mb-4">
            Access talent trained for real work
          </h2>
          <p className="font-body text-lg text-muted-foreground leading-relaxed">
            Vidyavya partners with technology companies to build a strong, job-ready talent pipeline.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 md:gap-12 items-stretch">
          {/* Card 1 — Why Partner With Us */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="w-full flex flex-col"
          >
            <div className="bg-card rounded-2xl p-8 lg:p-10 shadow-[0_8px_30px_rgba(0,0,0,0.06)] w-full h-full flex flex-col justify-between">
              <div className="flex flex-col flex-grow">
                <h3 className="font-heading font-semibold text-2xl text-foreground mb-6 border-b border-border/50 pb-4">
                  Why Partner With Us
                </h3>
                <ul className="space-y-4 md:space-y-5 flex-grow mb-6 flex flex-col justify-around">
                  {companyBenefits.map((benefit) => (
                    <li key={benefit} className="flex items-start gap-3.5">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="font-body text-foreground leading-relaxed">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Button variant="cta" size="lg" onClick={() => setIsFormOpen(true)} className="w-full h-auto py-4 px-8 whitespace-normal text-center mt-auto">
                Partner with Vidyavya to access industry-ready tech talent.
                <ArrowRight className="w-5 h-5 ml-2 shrink-0 inline-block" />
              </Button>
            </div>
          </motion.div>

          {/* Card 2 — How It Works */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="w-full flex flex-col"
          >
            <div className="bg-card rounded-2xl p-8 lg:p-10 shadow-[0_8px_30px_rgba(0,0,0,0.06)] w-full h-full flex flex-col justify-between">
              <div>
                <h3 className="font-heading font-semibold text-2xl text-foreground mb-6 border-b border-border/50 pb-4">
                  How It Works
                </h3>
                <div className="flex flex-col space-y-4 md:space-y-5">
                  {companyProcess.map((item) => (
                    <div key={item.step} className="flex gap-5 items-start">
                      <span className="font-heading text-3xl font-bold text-primary/20 leading-none">
                        {item.step}
                      </span>
                      <div className="mt-0.5">
                        <h4 className="font-heading font-semibold text-foreground mb-1">
                          {item.title}
                        </h4>
                        <p className="font-body text-sm text-muted-foreground leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* For Colleges */}
      <Section variant="cream" className="py-12 md:py-24">
        <div className="max-w-3xl mb-10 md:mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-accent/50 rounded-xl flex items-center justify-center">
              <GraduationCap className="w-6 h-6 text-foreground" />
            </div>
            <span className="font-heading font-semibold text-xl text-foreground">
              For Colleges
            </span>
          </div>
          <h2 className="font-heading text-3xl md:text-4xl font-semibold text-foreground mb-4">
            Create industry-ready graduates
          </h2>
          <p className="font-body text-lg text-muted-foreground leading-relaxed">
            We work with colleges that want students to graduate with practical skills, confidence, and real-world exposure.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 md:gap-12 items-stretch">
          {/* Card 1 — How It Works */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="w-full flex flex-col"
          >
            <div className="bg-card rounded-2xl p-8 lg:p-10 shadow-[0_8px_30px_rgba(0,0,0,0.06)] w-full h-full flex flex-col justify-between">
              <div>
                <h3 className="font-heading font-semibold text-2xl text-foreground mb-6 border-b border-border/50 pb-4">
                  How It Works
                </h3>
                <div className="flex flex-col space-y-4 md:space-y-5">
                  {collegeProcess.map((item) => (
                    <div key={item.step} className="flex gap-5 items-start">
                      <span className="font-heading text-3xl font-bold text-accent leading-none">
                        {item.step}
                      </span>
                      <div className="mt-0.5">
                        <h4 className="font-heading font-semibold text-foreground mb-1">
                          {item.title}
                        </h4>
                        <p className="font-body text-sm text-muted-foreground leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Card 2 — Why Partner With Us */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="w-full flex flex-col"
          >
            <div className="bg-card rounded-2xl p-8 lg:p-10 shadow-[0_8px_30px_rgba(0,0,0,0.06)] w-full h-full flex flex-col justify-between">
              <div className="flex flex-col flex-grow">
                <h3 className="font-heading font-semibold text-2xl text-foreground mb-6 border-b border-border/50 pb-4">
                  Why Partner With Us
                </h3>
                <ul className="space-y-4 md:space-y-5 flex-grow mb-6 flex flex-col justify-around">
                  {collegeBenefits.map((benefit) => (
                    <li key={benefit} className="flex items-start gap-3.5">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="font-body text-foreground leading-relaxed">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Button variant="cta" size="lg" onClick={() => setIsFormOpen(true)} className="w-full h-auto py-4 px-8 whitespace-normal text-center mt-auto">
                Let’s build industry-ready graduates together.
                <ArrowRight className="w-5 h-5 ml-2 shrink-0 inline-block" />
              </Button>
            </div>
          </motion.div>
        </div>
      </Section>
      </div>

      <PartnerForm open={isFormOpen} onOpenChange={setIsFormOpen} />
    </Layout>
  );
};

export default Partner;
