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
        answer: "Vidyavya focuses on real-world industry skills rather than just theory. Students work on practical projects, gain industry exposure, complete internships, and receive career support to become job-ready."
      },
      {
        question: "Which programs does Vidyavya offer?",
        answer: "Currently, Vidyavya offers specialized programs in Data Engineering and AI/ML Engineering."
      },
      {
        question: "Who are these programs designed for?",
        answer: "Our programs are ideal for engineering students, recent graduates, job seekers, and professionals looking to build a career in Data Engineering or AI/ML."
      },
      {
        question: "Is the curriculum industry-relevant?",
        answer: "Yes. The curriculum is designed around real-world tools, technologies, and workflows used by leading technology companies."
      }
    ]
  },
  {
    category: "Internship & Industry Exposure",
    faqs: [
      {
        question: "Is the internship guaranteed?",
        answer: "Yes. Every student enrolled in our program receives a guaranteed internship opportunity as part of their learning journey."
      },
      {
        question: "Is the internship paid?",
        answer: "Yes. All eligible students have the opportunity to earn a stipend during their internship. The stipend amount depends on the student's performance, contribution to projects, and overall progress during the program and internship period."
      },
      {
        question: "What kind of projects will I work on?",
        answer: "Students work on real-world projects involving data pipelines, cloud platforms, machine learning models, analytics solutions, and other industry-relevant applications."
      },
      {
        question: "Where will the internship be conducted?",
        answer: "Internships are conducted at the offices of Vidyavya's partner companies, where students gain hands-on experience by working in a real professional environment."
      },
      {
        question: "Will I receive an internship certificate?",
        answer: "Yes. Students who successfully complete their internship receive an internship completion certificate."
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
        answer: "Upon completion, students can explore roles such as Data Engineer, AI Engineer, Machine Learning Engineer, Data Analyst, Cloud Data Engineer, Business Intelligence Developer, and other related positions."
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
        answer: "The program is designed to be completed over 6 months, combining structured training, real-world projects, and internship experience to help students become job-ready."
      },
      {
        question: "Will I get mentorship from industry professionals?",
        answer: "Yes. Students receive guidance from experienced mentors and professionals who have worked on real-world industry projects."
      },
      {
        question: "How much practical learning is involved?",
        answer: "Practical learning is at the core of the Vidyavya experience. Students spend significant time working on real-world projects and gaining hands-on industry exposure through internships at our partner companies, helping them develop the skills and experience employers look for."
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
        question: "Why do you focus on internships and real-world projects?",
        answer: "Employers value practical experience. Our learn → intern → get hired approach helps bridge the gap between academic education and industry expectations."
      },
      {
        question: "What support will I receive after completing the course?",
        answer: "Students continue to receive placement assistance, career guidance, networking opportunities, and professional development support."
      },
      {
        question: "How do I know if Vidyavya is the right fit for me?",
        answer: "If your goal is to build practical skills, gain real industry exposure, work on live projects, and improve your employability, Vidyavya is designed for you."
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
        <div className="hidden lg:block w-64 flex-shrink-0">
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
                  className="border-b border-border/40 last:border-0 px-6 py-1"
                >
                  <AccordionTrigger className="hover:no-underline text-left text-base md:text-lg font-semibold py-5 text-foreground/90 hover:text-primary transition-colors">
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
