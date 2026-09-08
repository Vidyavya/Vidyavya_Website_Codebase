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
        <div className="grid md:grid-cols-2 gap-10 lg:gap-14 xl:gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Headline with clean line separation and proper line-height */}
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-[3.4rem] xl:text-[3.75rem] font-bold text-foreground mb-6 leading-[1.15] tracking-tight">
              <span className="whitespace-nowrap">Shaping Tomorrow’s</span> <br />
              <span className="text-primary">Tech Leaders</span>
            </h1>
            <div className="font-body text-base sm:text-lg lg:text-xl text-muted-foreground mb-8 max-w-xl leading-relaxed space-y-3">
              <p>
                Industry-focused AI training combined with practical projects and career support.
              </p>
              <p>
                Go beyond theory with hands-on projects, expert mentorship, and career preparation.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mb-4 md:mb-0">
              <Button variant="hero" size="xl" className="text-base sm:text-lg px-7 py-6" onClick={openModal}>
                Request Callback
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button variant="ctaOutline" size="xl" className="text-base sm:text-lg px-7 py-6" asChild>
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
            <div className="relative bg-card rounded-3xl shadow-xl p-6 sm:p-7 md:p-8 lg:p-9 border border-border/40">
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-28 h-28 bg-primary/10 rounded-full" />
              <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-accent/50 rounded-full" />

              <div className="relative grid gap-4 sm:gap-5 md:gap-6 grid-cols-1 sm:grid-cols-2">
                <div className="flex flex-col justify-between gap-3 p-4 sm:p-5 bg-muted/70 hover:bg-muted rounded-2xl h-full transition-colors">
                  <div>
                    <div className="w-11 h-11 sm:w-12 sm:h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-3">
                      <GraduationCap className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                    </div>
                    <p className="font-heading font-semibold text-foreground text-sm sm:text-base">Founder-Led Curriculum</p>
                  </div>
                  <p className="font-body text-xs sm:text-sm text-muted-foreground mt-1 leading-relaxed">Designed by tech founders and industry professionals, not academic faculty.</p>
                </div>

                <div className="flex flex-col justify-between gap-3 p-4 sm:p-5 bg-muted/70 hover:bg-muted rounded-2xl h-full transition-colors">
                  <div>
                    <div className="w-11 h-11 sm:w-12 sm:h-12 bg-accent/50 rounded-xl flex items-center justify-center mb-3">
                      <Brain className="w-5 h-5 sm:w-6 sm:h-6 text-secondary" />
                    </div>
                    <p className="font-heading font-semibold text-foreground text-sm sm:text-base">Advanced AI Learning</p>
                  </div>
                  <p className="font-body text-xs sm:text-sm text-muted-foreground mt-1 leading-relaxed">Master GenAI, LLMs, RAG, and Agentic AI to engineer the intelligent systems powering tomorrow’s technology.</p>
                </div>

                <div className="flex flex-col justify-between gap-3 p-4 sm:p-5 bg-muted/70 hover:bg-muted rounded-2xl h-full transition-colors">
                  <div>
                    <div className="w-11 h-11 sm:w-12 sm:h-12 bg-secondary/20 rounded-xl flex items-center justify-center mb-3">
                      <Briefcase className="w-5 h-5 sm:w-6 sm:h-6 text-secondary" />
                    </div>
                    <p className="font-heading font-semibold text-foreground text-sm sm:text-base">Career-Focused Support</p>
                  </div>
                  <p className="font-body text-xs sm:text-sm text-muted-foreground mt-1 leading-relaxed">Portfolio building, technical interview prep, and guidance to step into tech roles.</p>
                </div>

                <div className="flex flex-col justify-between gap-3 p-4 sm:p-5 bg-muted/70 hover:bg-muted rounded-2xl h-full transition-colors">
                  <div>
                    <div className="w-11 h-11 sm:w-12 sm:h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-3">
                      <Zap className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                    </div>
                    <p className="font-heading font-semibold text-foreground text-sm sm:text-base">Flexible Upskilling</p>
                  </div>
                  <p className="font-body text-xs sm:text-sm text-muted-foreground mt-1 leading-relaxed">Structured for students, graduates, and working professionals building for an AI-first world.</p>
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
