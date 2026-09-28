import { Link } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import SEO from '@/components/SEO';
import Section from '@/components/ui/Section';
import SectionHeader from '@/components/ui/SectionHeader';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import {
  Laptop,
  Briefcase,
  Users,
  ArrowRight,
} from 'lucide-react';
import { useRequestCallback } from '@/context/RequestCallbackContext';

const benefits = [
  {
    icon: Laptop,
    title: 'Hands-On Learning',
    description: 'Build your skills through real-world AI applications and projects.',
  },
  {
    icon: Users,
    title: 'Expert Mentorship',
    description: 'Learn from senior industry professionals with decades of hands-on experience.',
  },
  {
    icon: Briefcase,
    title: 'Career Support',
    description: 'Get guidance on portfolios, resumes, interviews, and building your career in AI.',
  },
];

const Programs = () => {
  const { openModal } = useRequestCallback();
  return (
    <Layout>
      <SEO 
        title="AI/ML Engineering Program | Vidyavya"
        description="Explore Vidyavya's flagship 6-month AI/ML Engineering Program: 3 months intensive training plus 3 months corporate internship with real-world AI deployment."
        url="https://www.vidyavya.com/programs"
      />
      {/* Hero */}
      <section className="py-10 md:py-14 lg:py-16 bg-gradient-to-b from-cream to-background">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-[2.8rem] font-bold text-foreground mb-3 md:mb-4">
              <span className="text-black">One Program.</span> <span className="text-[#FF5757]">One Mission</span>
            </h1>
            <div className="space-y-2 mb-2">
              <p className="font-body text-base md:text-lg lg:text-xl text-muted-foreground leading-relaxed">
                A six-month AI/ML Engineering journey built to take you from foundational learning to real corporate experience.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Centered Single Program Card Layout */}
      <section className="pt-6 pb-14 md:pt-10 md:pb-20 bg-background">
        <div className="container-custom mx-auto">
          <div className="max-w-2xl mx-auto">
            
            {/* Card — AI / ML Engineering */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-[0_20px_40px_rgba(255,87,87,0.45)] hover:-translate-y-2 transition-all duration-300 border border-border/50"
            >
              {/* Top Section */}
              <div className="bg-primary text-primary-foreground p-8 md:p-10">
                <h3 className="font-heading text-3xl font-bold mb-4">
                  AI / ML Engineering
                </h3>
                <p className="font-body text-sm md:text-base opacity-90 leading-relaxed mb-6">
                  Design and deploy production-ready machine learning and artificial intelligence systems end to end.
                </p>
                <div className="flex flex-wrap gap-3 mt-2">
                  <span className="px-4 py-1.5 bg-background text-foreground rounded-full text-xs font-semibold shadow-sm border border-border/50 whitespace-nowrap">
                    6 Months
                  </span>
                  <span className="px-4 py-1.5 bg-background text-foreground rounded-full text-xs font-semibold shadow-sm border border-border/50 whitespace-nowrap">
                    3 Months Internship
                  </span>
                  <span className="px-4 py-1.5 bg-background text-foreground rounded-full text-xs font-semibold shadow-sm border border-border/50 whitespace-nowrap">
                    Deep Learning
                  </span>
                  <span className="px-4 py-1.5 bg-background text-foreground rounded-full text-xs font-semibold shadow-sm border border-border/50 whitespace-nowrap">
                    MLOps
                  </span>
                </div>
              </div>

              {/* Tech Stack Icons Row */}
              <div className="bg-muted/30 border-b border-border/50 py-5 px-8 md:px-10 overflow-hidden relative">
                <span className="inline-block font-accent text-[10px] font-semibold tracking-widest text-muted-foreground uppercase mb-4">
                  Core Technologies
                </span>
                <div className="flex flex-nowrap gap-4 md:gap-[16px] items-center justify-center mt-2 pb-2">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/numpy/numpy-original.svg" alt="NumPy" className="h-8 md:h-9 w-8 md:w-9 hover:scale-110 hover:-translate-y-1 transition-transform flex-shrink-0 drop-shadow-sm" title="NumPy" />
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pandas/pandas-original.svg" alt="Pandas" className="h-8 md:h-9 w-8 md:w-9 hover:scale-110 hover:-translate-y-1 transition-transform flex-shrink-0 drop-shadow-sm" title="Pandas" />
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/scikitlearn/scikitlearn-original.svg" alt="scikit-learn" className="h-8 md:h-9 w-8 md:w-9 hover:scale-110 hover:-translate-y-1 transition-transform flex-shrink-0 drop-shadow-sm" title="scikit-learn" />
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tensorflow/tensorflow-original.svg" alt="TensorFlow" className="h-8 md:h-9 w-8 md:w-9 hover:scale-110 hover:-translate-y-1 transition-transform flex-shrink-0 drop-shadow-sm" title="TensorFlow" />
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pytorch/pytorch-original.svg" alt="PyTorch" className="h-8 md:h-9 w-8 md:w-9 hover:scale-110 hover:-translate-y-1 transition-transform flex-shrink-0 drop-shadow-sm" title="PyTorch" />
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" alt="AWS" className="h-8 md:h-9 w-auto hover:scale-110 hover:-translate-y-1 transition-transform flex-shrink-0 drop-shadow-sm" title="Amazon Web Services" />
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/googlecloud/googlecloud-original.svg" alt="GCP" className="h-8 md:h-9 w-8 md:w-9 hover:scale-110 hover:-translate-y-1 transition-transform flex-shrink-0 drop-shadow-sm" title="Google Cloud Platform" />
                </div>
              </div>

              {/* Course Outline */}
              <div className="p-8 md:p-10 flex-grow flex flex-col">
                <span className="inline-block font-accent text-xs font-semibold tracking-widest text-muted-foreground uppercase mb-6">
                  Course Outline
                </span>
                <div className="space-y-6 md:space-y-7 flex-grow mb-8 flex flex-col justify-between">
                  <div className="flex gap-4">
                    <span className="font-heading font-bold text-primary text-lg">01</span>
                    <div>
                      <h4 className="font-heading font-semibold text-foreground mb-1.5">Python, Data & ML Fundamentals</h4>
                      <p className="font-body text-sm text-muted-foreground leading-relaxed">Advanced Python, NumPy, Pandas, feature engineering, and core ML models - regression, classification, and clustering with scikit-learn.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <span className="font-heading font-bold text-primary text-lg">02</span>
                    <div>
                      <h4 className="font-heading font-semibold text-foreground mb-1.5">Deep Learning</h4>
                      <p className="font-body text-sm text-muted-foreground leading-relaxed">Neural networks, CNNs for image data, RNNs and LSTMs for sequences, and transfer learning with TensorFlow and PyTorch.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <span className="font-heading font-bold text-primary text-lg">03</span>
                    <div>
                      <h4 className="font-heading font-semibold text-foreground mb-1.5">MLOps & Production Deployment</h4>
                      <p className="font-body text-sm text-muted-foreground leading-relaxed">Package, deploy, and monitor ML models as live production APIs - with CI/CD automation and model drift detection.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <span className="font-heading font-bold text-primary text-lg">04</span>
                    <div>
                      <h4 className="font-heading font-semibold text-foreground mb-1.5">Applied AI Systems</h4>
                      <p className="font-body text-sm text-muted-foreground leading-relaxed">NLP pipelines, recommendation engines, computer vision applications, and LLM-based tools with prompt engineering for real users.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <span className="font-heading font-bold text-primary text-lg">05</span>
                    <div>
                      <h4 className="font-heading font-semibold text-foreground mb-1.5">ML System Design & Capstone</h4>
                      <p className="font-body text-sm text-muted-foreground leading-relaxed">Inference architecture, model scaling, feature stores, and a complete end-to-end AI system as a production-ready portfolio project.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <span className="font-heading font-bold text-primary text-lg">06</span>
                    <div>
                      <h4 className="font-heading font-semibold text-foreground mb-1.5">Corporate Internship</h4>
                      <p className="font-body text-sm text-muted-foreground leading-relaxed">3 months of real corporate exposure in a partnered company, working on industry projects and workflows.</p>
                    </div>
                  </div>
                </div>
                
                {/* CTA */}
                <Button variant="outline" className="w-full text-primary border-primary hover:bg-primary hover:text-white transition-colors mt-auto" asChild>
                  <Link to="/programs/ai-ml-engineering">
                    Know More <ArrowRight className="w-4 h-4 ml-1.5 inline-block" />
                  </Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <Section variant="secondary" className="text-secondary-foreground">
        <SectionHeader
          label="Why Choose Vidyavya"
          title="What Sets Us Apart"
          subtitle="Our programs are designed to ensure you're job-ready from day one."
          className="[&_span]:text-primary [&_h2]:text-secondary-foreground [&_p]:text-secondary-foreground/80"
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-secondary-foreground/10 p-6 rounded-xl text-center"
            >
              <div className="w-14 h-14 mx-auto mb-4 bg-primary/20 rounded-xl flex items-center justify-center">
                <benefit.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-heading font-semibold text-lg text-secondary-foreground mb-2">
                {benefit.title}
              </h3>
              <p className="font-body text-sm text-secondary-foreground/80">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </Section>
    </Layout>
  );
};

export default Programs;
