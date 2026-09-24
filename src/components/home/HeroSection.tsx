import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, GraduationCap, Brain, Briefcase, Zap } from 'lucide-react';
import { useRequestCallback } from '@/context/RequestCallbackContext';
import GridBackground from '@/components/ui/GridBackground';

const HeroSection = () => {
  const { openModal } = useRequestCallback();
  return (
    <section className="relative flex flex-col justify-center min-h-[calc(100svh-4rem)] md:min-h-[calc(100svh-5rem)] py-4 sm:py-5 lg:py-4 xl:py-5 overflow-hidden bg-gradient-to-b from-cream to-background">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent/40 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      </div>

      {/* 3D Grid Background */}
      <GridBackground className="z-0 opacity-40 bottom-0 h-3/4" />

      <div className="container-custom relative z-10 my-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.08fr] xl:grid-cols-[1fr_1.14fr] gap-8 lg:gap-10 xl:gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Headline with guaranteed clean space between the two lines */}
            <h1 className="font-heading text-[1.85rem] xs:text-3xl sm:text-4xl lg:text-[2.5rem] xl:text-[2.85rem] font-bold text-foreground mb-3.5 lg:mb-4 tracking-tight">
              <span className="block whitespace-nowrap leading-[1.2]">Shaping Tomorrow’s</span>
              <span className="block text-primary leading-[1.2] mt-1.5 sm:mt-2">Tech Leaders</span>
            </h1>
            <div className="font-body text-base sm:text-lg lg:text-[1.02rem] text-muted-foreground mb-5 lg:mb-6 max-w-xl leading-relaxed space-y-2 sm:space-y-2.5">
              <p>
                Industry-focused AI/ML training combined with corporate internship experience and career support
              </p>
              <p>
                Go beyond theory with hands-on projects, expert mentorship, and career preparation.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-3.5 mb-4 lg:mb-0">
              <Button variant="hero" size="default" className="text-sm sm:text-[15px] px-5 sm:px-6 py-2.5 sm:py-3 h-auto shadow-md" onClick={openModal}>
                Request Callback
                <ArrowRight className="w-4 h-4 sm:w-4.5 sm:h-4.5 ml-2 shrink-0" />
              </Button>
              <Button variant="ctaOutline" size="default" className="text-sm sm:text-[15px] px-5 sm:px-6 py-2.5 sm:py-3 h-auto" asChild>
                <Link to="/programs">Explore Programs</Link>
              </Button>
            </div>

          </motion.div>

          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative bg-card rounded-3xl shadow-xl p-4 sm:p-5 lg:p-5 xl:p-6 border border-border/40">
              {/* Decorative elements */}
              <div className="absolute -top-2.5 -right-2.5 w-20 h-20 sm:w-24 sm:h-24 bg-primary/10 rounded-full pointer-events-none" />
              <div className="absolute -bottom-2 -left-2 w-16 h-16 sm:w-18 sm:h-18 bg-accent/50 rounded-full pointer-events-none" />

              <div className="relative grid gap-3 sm:gap-3.5 lg:gap-4 grid-cols-1 sm:grid-cols-2">
                <div className="flex flex-col justify-between gap-2 p-3 sm:p-3.5 lg:p-3.5 xl:p-4 bg-muted/70 hover:bg-muted rounded-2xl h-full transition-colors">
                  <div>
                    <div className="w-9 h-9 sm:w-10 sm:h-10 bg-primary/10 rounded-xl flex items-center justify-center mb-2 shrink-0">
                      <GraduationCap className="w-4.5 h-4.5 sm:w-5 sm:h-5 text-primary" />
                    </div>
                    <p className="font-heading font-semibold text-foreground text-sm sm:text-[15px]">Founder-Led Curriculum</p>
                  </div>
                  <p className="font-body text-xs sm:text-[13px] text-muted-foreground mt-1 leading-relaxed">Designed by tech founders and industry professionals, not academic faculty.</p>
                </div>

                <div className="flex flex-col justify-between gap-2 p-3 sm:p-3.5 lg:p-3.5 xl:p-4 bg-muted/70 hover:bg-muted rounded-2xl h-full transition-colors">
                  <div>
                    <div className="w-9 h-9 sm:w-10 sm:h-10 bg-accent/50 rounded-xl flex items-center justify-center mb-2 shrink-0">
                      <Brain className="w-4.5 h-4.5 sm:w-5 sm:h-5 text-secondary" />
                    </div>
                    <p className="font-heading font-semibold text-foreground text-sm sm:text-[15px]">Advanced AI Learning</p>
                  </div>
                  <p className="font-body text-xs sm:text-[13px] text-muted-foreground mt-1 leading-relaxed">Master GenAI, LLMs, RAG, and Agentic AI to engineer intelligent systems powering tomorrow’s technology.</p>
                </div>

                <div className="flex flex-col justify-between gap-2 p-3 sm:p-3.5 lg:p-3.5 xl:p-4 bg-muted/70 hover:bg-muted rounded-2xl h-full transition-colors">
                  <div>
                    <div className="w-9 h-9 sm:w-10 sm:h-10 bg-secondary/20 rounded-xl flex items-center justify-center mb-2 shrink-0">
                      <Briefcase className="w-4.5 h-4.5 sm:w-5 sm:h-5 text-secondary" />
                    </div>
                    <p className="font-heading font-semibold text-foreground text-sm sm:text-[15px]">Industry Internship</p>
                  </div>
                  <p className="font-body text-xs sm:text-[13px] text-muted-foreground mt-1 leading-relaxed">Take your learning into a partnered company through a structured internship and real team workflows.</p>
                </div>

                <div className="flex flex-col justify-between gap-2 p-3 sm:p-3.5 lg:p-3.5 xl:p-4 bg-muted/70 hover:bg-muted rounded-2xl h-full transition-colors">
                  <div>
                    <div className="w-9 h-9 sm:w-10 sm:h-10 bg-primary/10 rounded-xl flex items-center justify-center mb-2 shrink-0">
                      <Zap className="w-4.5 h-4.5 sm:w-5 sm:h-5 text-primary" />
                    </div>
                    <p className="font-heading font-semibold text-foreground text-sm sm:text-[15px]">Flexible Upskilling</p>
                  </div>
                  <p className="font-body text-xs sm:text-[13px] text-muted-foreground mt-1 leading-relaxed">Structured for students, graduates, and working professionals building for an AI-first world.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
