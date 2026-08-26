import React, { useEffect } from 'react';
import Layout from '@/components/layout/Layout';
import SEO from '@/components/SEO';
import Section from '@/components/ui/Section';
import SectionHeader from '@/components/ui/SectionHeader';
import { motion } from 'framer-motion';
import { 
  CheckCircle2,
  Calendar,
  Code2,
  Cloud,
  BrainCircuit,
  Rocket,
  Sparkles,
  Bot,
  ShieldCheck,
  Workflow,
  Database,
  Network,
  Plug,
  Sliders
} from 'lucide-react';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const AdvancedAI = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <SEO 
        title="Advanced AI Career Program | Vidyavya"
        description="Master GenAI, LLM engineering, RAG, and Agentic AI systems at Vidyavya through hands-on projects and expert mentorship."
        url="https://www.vidyavya.com/programs/advanced-ai"
      />
      {/* Dark + Gradient Premium Hero Section */}
      <section className="relative py-12 md:py-16 lg:py-20 overflow-hidden bg-[#0A0611] text-white">
        {/* Abstract background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#34495E]/40 rounded-full blur-[100px] opacity-30 md:opacity-60 transform translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/30 rounded-full blur-[100px] opacity-20 md:opacity-40 transform -translate-x-1/2 translate-y-1/2" />
          <div className="absolute inset-0 bg-[#0A0611] opacity-60 mix-blend-overlay" />
        </div>

        <div className="container-custom relative z-10">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-4xl"
          >
            <motion.h1 variants={fadeIn} className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 md:mb-6">
              Advanced <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-primary">AI</span><br />
              Career Program
            </motion.h1>
            
            <motion.p variants={fadeIn} className="font-body text-base md:text-lg lg:text-xl text-slate-300 leading-relaxed max-w-3xl mb-6 md:mb-8">
              Go beyond the fundamentals: master modern GenAI, LLM engineering, and agentic AI systems, and learn to design, ship, and govern AI products that operate autonomously in the real world.
            </motion.p>
            
            <motion.div variants={fadeIn} className="flex flex-wrap gap-3 sm:gap-4 mb-2">
              <div className="px-4 py-2 sm:px-5 sm:py-2.5 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-xs sm:text-sm font-semibold flex items-center">
                <Calendar className="w-4 h-4 mr-2 text-primary" />
                3 Months · 12 Weeks
              </div>
              <div className="px-4 py-2 sm:px-5 sm:py-2.5 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-xs sm:text-sm font-semibold flex items-center">
                <Sparkles className="w-4 h-4 mr-2 text-primary" />
                GenAI & LLM Engineering
              </div>
              <div className="px-4 py-2 sm:px-5 sm:py-2.5 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-xs sm:text-sm font-semibold flex items-center">
                <Bot className="w-4 h-4 mr-2 text-primary" />
                Agentic AI Systems
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="pt-12 pb-8 md:pt-16 md:pb-12 bg-background relative z-10">
        <div className="max-w-4xl mx-auto text-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block font-accent text-lg md:text-xl font-bold tracking-widest text-primary uppercase mb-4 relative pb-2">
              ABOUT THIS PROGRAM
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-12 h-1 bg-primary/40 rounded-full" />
            </span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6">
              From LLMs to Autonomous AI Systems
            </h2>
            <p className="font-body text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto text-center text-balance">
              The Vidyavya Advanced AI Program is a 3-month intensive built for those who already know the fundamentals and are ready to work at the frontier: prompting and retrieval, fine-tuning and distillation, multi-agent orchestration, and production-grade deployment. Students graduate having shipped a real GenAI product, not just studied one.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="pt-6 pb-2 md:pt-10 md:pb-6 bg-background relative z-10">
        <div className="container-custom">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
            }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6"
          >
            {[
              { icon: Sparkles, title: "GenAI & LLM Engineering", desc: "Prompting, embeddings, RAG, fine-tuning and structured outputs for real applications.", bg: "bg-slate-50 border-slate-100" },
              { icon: Bot, title: "Agentic AI Systems", desc: "Tool use, memory, multi-agent orchestration and human-in-the-loop design with MCP.", bg: "bg-slate-50 border-slate-100" },
              { icon: Rocket, title: "MLOps & Deployment", desc: "Cloud deployment, containerization, drift monitoring and incident response.", bg: "bg-slate-50 border-slate-100" },
              { icon: ShieldCheck, title: "Responsible & Applied AI", desc: "Governance, evals, observability, and a demoable capstone with a business case.", bg: "bg-slate-50 border-slate-100" }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
                }}
                className={`group flex flex-col p-6 md:px-7 md:py-8 ${item.bg} rounded-2xl border border-white/50 shadow-[0_8px_30px_rgba(255,87,87,0.12)] hover:shadow-[0_20px_40px_rgba(255,87,87,0.25)] hover:-translate-y-2 hover:scale-[1.02] transition-all duration-300`}
              >
                <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center mb-6 text-primary shadow-sm transform group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <item.icon className="w-6 h-6" />
                </div>
                <h3 className="font-heading text-xl font-bold mb-3 text-foreground">{item.title}</h3>
                <p className="font-body text-muted-foreground text-sm flex-grow leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Curriculum Section - Card Based Layout */}
      <Section className="bg-background">
        <SectionHeader 
          label="CURRICULUM"
          title="Three Months. Six Engineering Milestones."
          subtitle="Each two-week block builds systematically, from refreshed foundations to shipping autonomous, production-grade AI systems."
          subtitleClassName="text-center text-balance"
        />
        
        <div className="max-w-5xl mx-auto space-y-6 mt-16 md:mt-24">
          {[
            {
              month: "Block 1",
              title: "Foundations Refresher",
              topics: [
                "Python for AI: fast, applied refresher",
                "Linear algebra & probability essentials",
                "Core ML fundamentals revisited",
                "Model evaluation techniques",
                "Reimplement 3 classical ML models from scratch on a real dataset"
              ]
            },
            {
              month: "Block 2",
              title: "Deep Learning",
              topics: [
                "Neural network fundamentals",
                "CNNs for computer vision",
                "Transformers for language",
                "Training and evaluation workflows",
                "Train and evaluate a vision model and an NLP model"
              ]
            },
            {
              month: "Block 3",
              title: "GenAI & LLM Engineering",
              topics: [
                "Prompt engineering fundamentals",
                "Embeddings and vector search",
                "Retrieval-augmented generation (RAG)",
                "Fine-tuning and distillation",
                "Structured outputs and function calling",
                "Ship a retrieval-augmented app with function calling"
              ]
            },
            {
              month: "Block 4",
              title: "Agentic AI Systems",
              topics: [
                "Tool use and memory design",
                "Multi-agent orchestration",
                "Model Context Protocol (MCP)",
                "Human-in-the-loop workflows",
                "Evals and observability for agents",
                "Deploy a working multi-agent system with monitoring"
              ]
            },
            {
              month: "Block 5",
              title: "Production & MLOps",
              topics: [
                "Cloud deployment strategies",
                "Containerization & cost tracking",
                "Drift monitoring & incident response",
                "AI governance & ethics",
                "Ship the agent system to a live endpoint with observability dashboards"
              ]
            },
            {
              month: "Block 6",
              title: "Capstone & Career Studio",
              topics: [
                "Real business problem → shipped AI solution",
                "ROI framing and stakeholder communication",
                "Demo day presentation to a panel",
                "Portfolio finalization & mock interviews"
              ]
            }
          ].map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group flex flex-col md:flex-row bg-white rounded-3xl border border-border/60 overflow-hidden shadow-sm hover:shadow-xl hover:shadow-primary/5 transition-all duration-300"
            >
              <div className="bg-[#34495E] text-white p-8 md:p-10 md:w-1/3 shrink-0 flex flex-col justify-center relative overflow-hidden">
                <span className="font-accent text-xs font-semibold uppercase tracking-widest text-slate-300 mb-2">{item.month}</span>
                <h3 className="font-heading text-2xl md:text-3xl font-bold leading-snug relative z-10">{item.title}</h3>
                
                {/* Abstract shape */}
                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white opacity-10 rounded-full blur-[20px]" />
              </div>
              <div className="p-8 md:p-10 flex-grow bg-white">
                <ul className="space-y-4 mb-2">
                  {item.topics.map((topic, i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mr-4 mt-0.5" />
                      <span className="font-body text-foreground/80 leading-relaxed max-w-xl">{topic}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Deep Dive Cards */}
      <section className="bg-slate-50 border-t border-border/50 pt-10 pb-16 md:pt-14 md:pb-24 px-6 md:px-8">
        <div className="container-custom mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {[
            { 
              icon: Database, 
              title: "RAG", 
              p: "Retrieval-augmented generation for grounded, accurate LLM responses.",
              iconBg: "bg-rose-50 border-rose-200/70 text-rose-500 group-hover:bg-rose-500 group-hover:text-white" 
            },
            { 
              icon: Network, 
              title: "Multi-Agent Systems", 
              p: "Coordinated agents that plan, delegate, and execute complex tasks.",
              iconBg: "bg-indigo-50 border-indigo-200/70 text-indigo-500 group-hover:bg-indigo-500 group-hover:text-white" 
            },
            { 
              icon: Plug, 
              title: "MCP", 
              p: "Model Context Protocol for connecting agents to real tools and data.",
              iconBg: "bg-emerald-50 border-emerald-200/70 text-emerald-500 group-hover:bg-emerald-500 group-hover:text-white" 
            },
            { 
              icon: Sliders, 
              title: "Fine-Tuning & Distillation", 
              p: "Adapting and compressing models for cost-efficient production use.",
              iconBg: "bg-amber-50 border-amber-200/70 text-amber-600 group-hover:bg-amber-500 group-hover:text-white" 
            }
          ].map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -5 }}
              className="group p-8 rounded-3xl bg-white border border-border/60 shadow-sm hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 flex flex-col"
            >
              <div className={`w-12 h-12 rounded-2xl border flex items-center justify-center mb-6 shadow-sm transform group-hover:scale-110 transition-all duration-300 ${item.iconBg}`}>
                <item.icon className="w-6 h-6" />
              </div>
              <h4 className="font-heading text-xl font-bold mb-3 text-foreground">{item.title}</h4>
              <p className="font-body text-muted-foreground text-sm leading-relaxed flex-grow">{item.p}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Tools & Technologies */}
      <Section className="bg-white">
        <SectionHeader 
          label="WHAT YOU'LL WORK WITH"
          title="Tools & Technologies"
        />
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
          }}
          className="max-w-7xl mx-auto mt-16 md:mt-24 grid md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6"
        >
          {[
            { icon: Code2, title: "Languages & Libraries", p: "Python, NumPy, Pandas, PyTorch", bg: "bg-slate-50 border-slate-100" },
            { icon: Sparkles, title: "GenAI & LLM Frameworks", p: "OpenAI / Anthropic APIs, HuggingFace, LangChain, vector databases", bg: "bg-slate-50 border-slate-100" },
            { icon: Bot, title: "Agentic Frameworks", p: "MCP, multi-agent orchestration, tool-calling frameworks", bg: "bg-slate-50 border-slate-100" },
            { icon: Rocket, title: "MLOps & Deployment", p: "Docker, REST APIs, CI/CD for AI systems", bg: "bg-slate-50 border-slate-100" },
            { icon: Cloud, title: "Cloud & Infrastructure", p: "AWS, Google Cloud, vector stores, observability tooling", bg: "bg-slate-50 border-slate-100" },
            { icon: Workflow, title: "Engineering Practices", p: "Git / GitHub, evals, prompt versioning", bg: "bg-slate-50 border-slate-100" }
          ].map((item, idx) => (
            <motion.div 
              key={idx}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
              }}
              className={`group flex flex-col p-6 md:px-7 md:py-8 ${item.bg} rounded-2xl border border-white/50 shadow-[0_8px_30px_rgba(255,87,87,0.12)] hover:shadow-[0_20px_40px_rgba(255,87,87,0.25)] hover:-translate-y-2 hover:scale-[1.02] transition-all duration-300`}
            >
              <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center mb-6 text-primary shadow-sm transform group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                <item.icon className="w-6 h-6" />
              </div>
              <h4 className="font-heading text-xl font-bold mb-3 text-foreground">{item.title}</h4>
              <p className="font-body text-muted-foreground text-sm tracking-wide leading-relaxed flex-grow">{item.p}</p>
            </motion.div>
          ))}
        </motion.div>
      </Section>

      {/* Program Outcomes */}
      <Section className="bg-slate-50 border-t border-slate-100">
        <SectionHeader 
          label="WHAT YOU'LL BE ABLE TO DO"
          title="Program Outcomes"
          subtitle="Graduates leave with demonstrated, shipped GenAI and agentic systems, not just theoretical knowledge."
        />
        
        <div className="max-w-7xl mx-auto mt-16 md:mt-24 grid md:grid-cols-2 gap-10 lg:gap-16">
          {[
            { n: "01", t: "Build GenAI Applications End-to-End", d: "Design and ship RAG and LLM-powered applications using real frameworks and production data." },
            { n: "02", t: "Deploy Multi-Agent Systems", d: "Orchestrate, deploy and monitor autonomous agent systems in live environments." },
            { n: "03", t: "Design Responsible AI", d: "Apply governance, evals and observability practices to keep AI systems safe and reliable." },
            { n: "04", t: "Solve Complex Enterprise Problems", d: "Translate high-level organizational challenges into autonomous, scalable AI solutions designed for production environments." }
          ].map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="flex gap-6 md:gap-8 group"
            >
              <div className="font-heading text-6xl md:text-7xl font-bold text-slate-200 shrink-0 group-hover:text-primary/20 transition-colors">{item.n}</div>
              <div>
                <h4 className="font-heading text-2xl font-bold mb-4 text-foreground">{item.t}</h4>
                <p className="font-body text-lg text-muted-foreground leading-relaxed">{item.d}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>
    </Layout>
  );
};

export default AdvancedAI;
