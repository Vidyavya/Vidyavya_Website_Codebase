import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Rahul Sharma',
    role: 'AI/ML Engineer',
    year: '2025',
    feedback: 'Vidyavya transformed my career. The hands-on projects and mentorship prepared me for real-world challenges. Within months, I was working on production systems.',
    image: null,
  },
  {
    name: 'Priya Patel',
    role: 'ML Engineer',
    year: '2025',
    feedback: 'The practical approach at Vidyavya is unmatched. I learned more in 6 months here than in 4 years of college. The hands-on project experience was invaluable.',
    image: null,
  },
  {
    name: 'Aditya Kumar',
    role: 'Cloud Architect',
    year: '2026',
    feedback: 'What sets Vidyavya apart is the industry relevance. Every project, every challenge was designed to build real capability. I entered the workforce confident.',
    image: null,
  },
  {
    name: 'Sneha Reddy',
    role: 'Data Scientist',
    year: '2025',
    feedback: 'The mentorship at Vidyavya changed everything. Working with senior professionals gave me insights no textbook could provide.',
    image: null,
  },
  {
    name: 'Vikram Singh',
    role: 'Software Engineer',
    year: '2026',
    feedback: 'Vidyavya\'s focus on execution over theory is exactly what the industry needs. I was building production-ready AI models from day one.',
    image: null,
  },
];

const TestimonialCarousel = () => {
  return (
    <div className="py-16 md:py-24 bg-secondary overflow-hidden">
      <div className="container-custom mb-10">
        <h2 className="font-heading text-3xl md:text-4xl font-semibold text-secondary-foreground text-center mb-4">
          Success Stories
        </h2>
        <p className="font-body text-secondary-foreground/80 text-center max-w-2xl mx-auto">
          Hear from our students who transformed their careers with Vidyavya
        </p>
      </div>

      <div className="relative group py-4">
        <div className="flex testimonial-scroll w-max group-hover:[animation-play-state:paused]">
          {/* First set */}
          <div className="flex gap-6 px-3">
            {testimonials.map((testimonial, index) => (
              <div
                key={`testimonial-1-${index}`}
                className="flex-shrink-0 w-[300px] sm:w-[350px] md:w-[400px] bg-card rounded-xl p-6 shadow-card transition-all duration-300 hover:-translate-y-2 hover:scale-105 hover:shadow-xl flex flex-col min-h-[280px]"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="font-body text-foreground mb-6 leading-relaxed">
                  "{testimonial.feedback}"
                </p>
                <div className="flex items-center gap-4 mt-auto">
                  <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center shrink-0">
                    <span className="font-heading font-semibold text-foreground">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <p className="font-heading font-semibold text-foreground text-sm">
                      {testimonial.name}
                    </p>
                    <p className="font-body text-xs text-muted-foreground">
                      {testimonial.role} • {testimonial.year}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* Duplicate set for seamless infinite loop */}
          <div className="flex gap-6 px-3">
            {testimonials.map((testimonial, index) => (
              <div
                key={`testimonial-2-${index}`}
                className="flex-shrink-0 w-[300px] sm:w-[350px] md:w-[400px] bg-card rounded-xl p-6 shadow-card transition-all duration-300 hover:-translate-y-2 hover:scale-105 hover:shadow-xl flex flex-col min-h-[280px]"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="font-body text-foreground mb-6 leading-relaxed">
                  "{testimonial.feedback}"
                </p>
                <div className="flex items-center gap-4 mt-auto">
                  <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center shrink-0">
                    <span className="font-heading font-semibold text-foreground">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <p className="font-heading font-semibold text-foreground text-sm">
                      {testimonial.name}
                    </p>
                    <p className="font-body text-xs text-muted-foreground">
                      {testimonial.role} • {testimonial.year}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCarousel;
