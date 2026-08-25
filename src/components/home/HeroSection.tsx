import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, GraduationCap, Brain, Briefcase, Zap } from 'lucide-react';
import { useRequestCallback } from '@/context/RequestCallbackContext';
import GridBackground from '@/components/ui/GridBackground';

const HeroSection = () => {
  const { openModal } = useRequestCallback();
  return (
    <section className="relative flex flex-col justify-center min-h-[calc(100svh-4rem)] md:min-h-[calc(100svh-5rem)] py-6 sm:py-8 md:py-10 lg:py-12 overflow-hidden bg-gradient-to-b from-cream to-background">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent/40 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      </div>

      {/* 3D Grid Background */}
      <GridBackground className="z-0 opacity-40 bottom-0 h-3/4" />

      <div className="container-custom relative z-10 my-auto">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* "Transform Your Career" removed as per request */}
            <h1 className="font-heading text-3xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground mb-4 md:mb-6 leading-tight">
              Shaping Tomorrow’s <br />
              <span className="text-primary">Tech Leaders</span>
            </h1>
            <div className="font-body text-sm sm:text-base md:text-lg text-muted-foreground mb-6 md:mb-8 max-w-xl leading-relaxed space-y-2 md:space-y-3">
              <p>
                Industry-focused AI training combined with practical projects and career support.
              </p>
              <p>
                Go beyond theory with hands-on projects, expert mentorship, and career preparation.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-4 md:mb-0">
              <Button variant="hero" size="xl" onClick={openModal}>
                Request Callback
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button variant="ctaOutline" size="xl" asChild>
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
            <div className="relative bg-card rounded-2xl shadow-xl p-4 sm:p-5 md:p-6 lg:p-7">
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full" />
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-accent/50 rounded-full" />

              <div className="relative grid gap-3 sm:gap-4 grid-cols-1 sm:grid-cols-2">
                <div className="flex flex-col gap-2.5 sm:gap-3 p-3.5 sm:p-4 bg-muted rounded-xl">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <GraduationCap className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-heading font-semibold text-foreground text-xs sm:text-sm">Founder-Led Curriculum</p>
                    <p className="font-body text-[11px] sm:text-xs text-muted-foreground mt-0.5 sm:mt-1 leading-relaxed">Designed by tech founders and industry professionals, not academic faculty.</p>
                  </div>
                </div>

                <div className="flex flex-col gap-2.5 sm:gap-3 p-3.5 sm:p-4 bg-muted rounded-xl">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 bg-accent/50 rounded-lg flex items-center justify-center">
                    <Brain className="w-4 h-4 sm:w-5 sm:h-5 text-secondary" />
                  </div>
                  <div>
                    <p className="font-heading font-semibold text-foreground text-xs sm:text-sm">Advanced AI Learning</p>
                    <p className="font-body text-[11px] sm:text-xs text-muted-foreground mt-0.5 sm:mt-1 leading-relaxed">Master GenAI, LLMs, RAG, and Agentic AI to engineer the intelligent systems powering tomorrow’s technology.</p>
                  </div>
                </div>

                <div className="flex flex-col gap-2.5 sm:gap-3 p-3.5 sm:p-4 bg-muted rounded-xl">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 bg-secondary/20 rounded-lg flex items-center justify-center">
                    <Briefcase className="w-4 h-4 sm:w-5 sm:h-5 text-secondary" />
                  </div>
                  <div>
                    <p className="font-heading font-semibold text-foreground text-xs sm:text-sm">Career-Focused Support</p>
                    <p className="font-body text-[11px] sm:text-xs text-muted-foreground mt-0.5 sm:mt-1 leading-relaxed">Portfolio building, technical interview prep, and guidance to step into tech roles.</p>
                  </div>
                </div>

                <div className="flex flex-col gap-2.5 sm:gap-3 p-3.5 sm:p-4 bg-muted rounded-xl">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Zap className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-heading font-semibold text-foreground text-xs sm:text-sm">Flexible Upskilling</p>
                    <p className="font-body text-[11px] sm:text-xs text-muted-foreground mt-0.5 sm:mt-1 leading-relaxed">Structured for students, graduates, and working professionals building for an AI-first world.</p>
                  </div>
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
