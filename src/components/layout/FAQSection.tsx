import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqData = [
  {
    category: "Program & Learning",
    faqs: [
      {
        question: "What makes Vidyavya different from other training institutes?",
        answer: "Vidyavya focuses on practical, industry-relevant AI skills rather than theory alone. Learners work on hands-on projects, learn modern tools and technologies, receive guidance from industry professionals, and get career support to build relevant, job-ready skills."
      },
      {
        question: "Which programs does Vidyavya offer?",
        answer: "Currently, Vidyavya offers two specialized programs: AI/ML Engineering and Advanced AI. The AI/ML Engineering program builds strong foundations in machine learning and AI, while Advanced AI focuses on GenAI, LLMs, RAG, Agentic AI, and production-ready AI systems."
      },
      {
        question: "Who are these programs designed for?",
        answer: "Our programs are ideal for engineering students, recent graduates, job seekers, and professionals looking to build a career in AI/ML."
      },
      {
        question: "Is the curriculum industry-relevant?",
        answer: "Yes. The curriculum is designed around real-world tools, technologies, and workflows used by leading technology companies."
      }
    ]
  },
  {
    category: "Placements & Careers",
    faqs: [
      {
        question: "Does Vidyavya provide placement support?",
        answer: "Yes. We offer dedicated placement assistance, including resume building, LinkedIn optimization, mock interviews, career guidance, and hiring opportunities through our industry network to help students become job-ready and accelerate their careers."
      },
      {
        question: "What career opportunities can I pursue after completing the program?",
        answer: "Depending on the program and your prior experience, learners can build skills relevant to roles such as AI/ML Engineer, Machine Learning Engineer, AI Engineer, Generative AI Engineer, LLM Engineer, and AI Solutions Developer, among other AI-focused roles."
      },
      {
        question: "What salary can I expect after completing the program?",
        answer: "Salary packages vary based on your skills, performance, location, and employer requirements. While our focus is on making students industry-ready and competitive in the job market, our students have secured fresher packages typically ranging from ₹3-6 LPA, with some achieving even higher offers."
      },
      {
        question: "Will I get interview preparation support?",
        answer: "Yes. We provide resume-building assistance, mock interviews, communication training, and career guidance sessions."
      }
    ]
  },
  {
    category: "Learning Experience",
    faqs: [
      {
        question: "Are the classes online or offline?",
        answer: "We offer structured learning experiences designed to maximize practical exposure. Please contact our admissions team for current batch formats and schedules."
      },
      {
        question: "What is the duration of the program?",
        answer: "Our programs range from 3 to 6 months, combining structured training, real-world projects, and mentorship to help students become job-ready."
      },
      {
        question: "Will I get mentorship from industry professionals?",
        answer: "Yes. Students receive guidance from experienced mentors and professionals who have worked on real-world industry projects."
      },
      {
        question: "How much practical learning is involved?",
        answer: "Practical learning is at the core of the Vidyavya experience. Students spend significant time working on real-world projects and gaining hands-on practical exposure, helping them develop the skills and experience employers look for."
      }
    ]
  },
  {
    category: "Admissions & Fees",
    faqs: [
      {
        question: "What is the admission process?",
        answer: "Students typically go through an application and evaluation process to determine eligibility and program fit."
      },
      {
        question: "Are there limited seats available?",
        answer: "Yes. We maintain limited batch sizes to ensure personalized mentorship and better learning outcomes."
      },
      {
        question: "Do you offer installment payment options?",
        answer: "Yes. Flexible payment options may be available. Please contact the admissions team for current plans."
      },
      {
        question: "Can final-year students apply?",
        answer: "Absolutely. Final-year students are encouraged to apply and begin building job-ready skills before graduation."
      }
    ]
  },
  {
    category: "Trust & Outcomes",
    faqs: [
      {
        question: "Why do you focus on real-world projects?",
        answer: "Employers value practical experience. Our hands-on project-based approach helps bridge the gap between academic education and industry expectations."
      },
      {
        question: "How do I know if Vidyavya is the right fit for me?",
        answer: "If your goal is to build practical skills, work on live projects, and improve your employability in AI, Vidyavya is designed for you."
      },
      {
        question: "Can parents speak with the admissions team before enrollment?",
        answer: "Yes. We encourage parents and guardians to connect with our admissions team to understand the program structure, career opportunities, and support provided to students."
      }
    ]
  }
];

const FAQSection = () => {
  const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [displayedCategoryIndex, setDisplayedCategoryIndex] = useState(0);

  const activeCategory = faqData[displayedCategoryIndex];

  const handleCategoryChange = (index: number) => {
    if (index === activeCategoryIndex) return;
    
    setIsAnimating(true);
    setActiveCategoryIndex(index);
    
    // Smooth fade transition
    setTimeout(() => {
      setDisplayedCategoryIndex(index);
      setIsAnimating(false);
    }, 250);
  };

  return (
    <div className="container-custom py-12 md:py-16">
      <div className="text-center mb-10 md:mb-14">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
          Frequently Asked Questions
        </h2>
        <p className="font-body text-muted-foreground mt-4 max-w-4xl mx-auto lg:whitespace-nowrap text-base md:text-lg">
          Find answers to common questions about our programs, admissions, and career support.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 relative">
        {/* Mobile Dropdown */}
        <div className="block lg:hidden w-full">
          <div className="relative">
            <select
              className="w-full appearance-none bg-card border border-border/50 text-foreground font-medium rounded-xl py-4 px-5 pr-10 shadow-sm focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
              value={activeCategoryIndex}
              onChange={(e) => handleCategoryChange(Number(e.target.value))}
              aria-label="Select FAQ Category"
            >
              {faqData.map((category, index) => (
                <option key={index} value={index}>
                  {category.category}
                </option>
              ))}
            </select>
            <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground pointer-events-none" />
          </div>
        </div>

        {/* Desktop Sidebar Navigation */}
        <div className="hidden lg:block w-56 flex-shrink-0">
          <div className="sticky top-24 bg-card/50 backdrop-blur-sm rounded-2xl border border-border/50 p-2 shadow-sm">
            <nav className="flex flex-col space-y-1">
              {faqData.map((category, index) => {
                const isActive = activeCategoryIndex === index;
                return (
                  <button
                    key={index}
                    onClick={() => handleCategoryChange(index)}
                    className={cn(
                      "text-left px-4 py-3.5 rounded-xl font-medium transition-all duration-200",
                      isActive
                        ? "bg-primary/10 text-primary shadow-sm"
                        : "text-foreground/70 hover:bg-muted/50 hover:text-foreground"
                    )}
                  >
                    {category.category}
                  </button>
                );
              })}
            </nav>
          </div>
        </div>

        {/* FAQ Accordion Area */}
        <div 
          className={cn(
            "flex-1 transition-opacity duration-250 ease-in-out",
            isAnimating ? "opacity-0" : "opacity-100"
          )}
        >
          <div className="bg-card rounded-2xl shadow-lg border border-border/50 overflow-hidden">
            <Accordion
              type="single"
              collapsible
              defaultValue="item-0"
              className="w-full"
            >
              {activeCategory.faqs.map((faq, index) => (
                <AccordionItem
                  key={`${displayedCategoryIndex}-${index}`}
                  value={`item-${index}`}
                  className="border-b border-border/40 last:border-0 px-6 sm:px-8 py-1"
                >
                  <AccordionTrigger className="hover:no-underline text-left text-base md:text-lg font-semibold py-5 text-foreground/90 hover:text-primary transition-colors gap-6 md:gap-8">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground font-body text-base leading-relaxed pb-6">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
