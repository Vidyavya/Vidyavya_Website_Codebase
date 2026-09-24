import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Section from '@/components/ui/Section';
import SectionHeader from '@/components/ui/SectionHeader';
import { Brain, Clock, Trophy, ArrowRight } from 'lucide-react';

const program = {
  icon: Brain,
  title: 'AI/ML Engineering',
  duration: '6 Months',
  highlights: [
    'Machine Learning Algorithms',
    'Deep Learning & Neural Networks',
    'Natural Language Processing',
    'Computer Vision',
    'Corporate Internship Experience',
  ],
  color: 'bg-primary/10',
  iconColor: 'text-primary',
};

const ProgramsPreview = () => {
  return (
    <Section variant="cream">
      <SectionHeader
        label="Our Program"
        title="Build Your AI Career"
        subtitle="A six-month AI/ML Engineering journey combining intensive training with real corporate internship experience"
      />

      <div className="flex justify-center max-w-xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-card rounded-2xl p-8 shadow-card hover:shadow-hover transition-all group w-full border border-border"
        >
          <div className={`w-14 h-14 ${program.color} rounded-xl flex items-center justify-center mb-6`}>
            <program.icon className={`w-7 h-7 ${program.iconColor}`} />
          </div>

          <h3 className="font-heading text-2xl font-semibold text-foreground mb-2">
            {program.title}
          </h3>

          <div className="flex items-center gap-4 mb-6">
            <span className="flex items-center gap-1 font-body text-sm text-muted-foreground">
              <Clock className="w-4 h-4" />
              {program.duration}
            </span>
          </div>

          <ul className="space-y-3 mb-6">
            {program.highlights.map((highlight) => (
              <li key={highlight} className="flex items-start gap-3">
                <Trophy className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
                <span className="font-body text-sm text-foreground">{highlight}</span>
              </li>
            ))}
          </ul>

          <Button variant="ctaOutline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground" asChild>
            <Link to="/programs/ai-ml-engineering">
              Learn More
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </Section>
  );
};

export default ProgramsPreview;
