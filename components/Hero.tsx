'use client';

import { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { motion } from 'framer-motion';

import SceneWrapper from './SceneWrapper';

// Tech skills from the resume
const skills = [
  { name: "React/Next.js", level: 95, category: "frontend" },
  { name: "TypeScript", level: 90, category: "frontend" },
  { name: "Node.js", level: 88, category: "backend" },
  { name: "Three.js/WebGL", level: 85, category: "frontend" },
  { name: "AWS/Cloud", level: 92, category: "devops" },
  { name: "Python/Django", level: 85, category: "backend" },
  { name: "Database Design", level: 90, category: "backend" },
  { name: "UI/UX Design", level: 88, category: "design" },
];

// Featured projects from the resume
const projects = [
  {
    title: "Interactive 3D Portfolio",
    description: "Dynamic web portfolio with Three.js visualizations and interactive elements",
    tech: ["React", "Three.js", "GSAP", "TypeScript"],
    category: "frontend",
  },
  {
    title: "E-Commerce Platform",
    description: "Scalable online store with real-time inventory management",
    tech: ["Next.js", "Node.js", "MongoDB", "AWS"],
    category: "fullstack",
  },
  {
    title: "AI-Powered Analytics Dashboard",
    description: "Real-time data processing with machine learning visualizations",
    tech: ["React", "Python", "TensorFlow", "D3.js"],
    category: "data",
  },
  {
    title: "Cloud Infrastructure Automation",
    description: "DevOps solution for cloud resource management",
    tech: ["Terraform", "AWS", "Docker", "Python"],
    category: "devops",
  },
];

// Experience highlights
const experience = [
  {
    position: "Senior Frontend Developer",
    company: "Tech Innovations Inc.",
    period: "2020 - Present",
    highlights: [
      "Led development of interactive data visualization platforms",
      "Implemented 3D graphics using Three.js and WebGL",
      "Optimized performance for complex web applications"
    ]
  },
  {
    position: "Full Stack Engineer",
    company: "Digital Solutions Agency",
    period: "2017 - 2020",
    highlights: [
      "Architected scalable backend services using Node.js",
      "Developed responsive UI components with React",
      "Integrated cloud services and API systems"
    ]
  },
  {
    position: "Web Developer",
    company: "Creative Web Studio",
    period: "2015 - 2017",
    highlights: [
      "Created interactive web experiences for clients",
      "Implemented frontend animations and transitions",
      "Collaborated with design team on UI implementation"
    ]
  }
];

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);
  const [activeSection, setActiveSection] = useState('home');
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeFilter, setActiveFilter] = useState('all');

  useEffect(() => {
    if (!containerRef.current || !textRef.current) return;

    const init = async () => {
      try {
        await new Promise(resolve => setTimeout(resolve, 1000));
        setIsLoaded(true);
        
        gsap.from(containerRef.current!, {
          opacity: 0,
          duration: 2,
          ease: "power2.inOut",
        });

        gsap.from(textRef.current!, {
          opacity: 0,
          y: 50,
          duration: 2,
          delay: 1,
          ease: "power2.out",
        });

        gsap.to(textRef.current!, {
          color: "#00ffff",
          duration: 2,
          delay: 3,
          ease: "power2.inOut",
        });
      } catch (error) {
        console.error('Error during initialization:', error);
      }
    };

    init();
  }, []);

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const renderSection = () => {
    if (!isLoaded) return null;

    switch (activeSection) {
      case 'projects':
        return (
          <div className="mx-auto w-full max-w-7xl px-4">
            <motion.h2 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              className="mb-8 text-center text-4xl font-bold text-cyan-500 text-shadow-lg"
            >
              Featured Projects
            </motion.h2>
            <div className="mb-8 flex justify-center gap-4 rounded-full bg-[#0a0a1a]/70 p-3 backdrop-blur-sm">
              {['all', 'frontend', 'fullstack', 'data', 'devops'].map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`rounded-full px-4 py-2 ${
                    activeFilter === filter 
                      ? 'bg-cyan-500 font-bold text-gray-900' 
                      : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50'
                  } capitalize transition-all`}
                >
                  {filter}
                </button>
              ))}
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="grid grid-cols-1 gap-8 p-8 md:grid-cols-2 lg:grid-cols-3"
            >
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ 
                    opacity: 1, 
                    y: 0,
                    transition: { delay: index * 0.1 }
                  }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="flex h-full flex-col rounded-xl border border-cyan-500/30 bg-[#0a0a1a]/80 p-6 shadow-lg shadow-cyan-500/10 backdrop-blur-lg"
                >
                  <h3 className="mb-3 text-2xl font-bold text-cyan-400 text-shadow-sm">{project.title}</h3>
                  <p className="mb-4 grow text-white">{project.description}</p>
                  <div className="mt-auto flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-3 py-1 text-sm text-cyan-400">
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        );
      case 'skills':
        return (
          <div className="mx-auto w-full max-w-4xl px-4">
            <motion.h2 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              className="mb-8 text-center text-4xl font-bold text-cyan-500 text-shadow-lg"
            >
              Technical Skills
            </motion.h2>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="grid grid-cols-1 gap-8 rounded-xl border border-cyan-500/20 bg-[#0a0a1a]/70 p-6 shadow-xl backdrop-blur-md md:grid-cols-2"
            >
              {skills.map((skill, index) => (
                <motion.div 
                  key={index} 
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ 
                    x: 0, 
                    opacity: 1,
                    transition: { delay: index * 0.1 } 
                  }}
                  className="mb-6"
                >
                  <div className="mb-2 flex justify-between">
                    <span className="font-medium text-cyan-400 text-shadow-sm">{skill.name}</span>
                    <span className="text-white">{skill.level}%</span>
                  </div>
                  <div className="h-3 overflow-hidden rounded-full border border-gray-700/50 bg-gray-800/80 backdrop-blur-sm">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ duration: 1.5, delay: 0.2 + index * 0.1, ease: "easeOut" }}
                      className="h-full rounded-full"
                      style={{ 
                        background: `linear-gradient(90deg, #0ff, #7700ff ${skill.level}%)` 
                      }}
                    />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        );
      case 'experience':
        return (
          <div className="mx-auto w-full max-w-4xl px-4">
            <motion.h2 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              className="mb-8 text-center text-4xl font-bold text-cyan-500 text-shadow-lg"
            >
              Work Experience
            </motion.h2>
            
            <div className="relative ml-6 border-l-2 border-cyan-500/40 py-4 pl-8 md:ml-12">
              {experience.map((job, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ 
                    opacity: 1, 
                    x: 0,
                    transition: { delay: index * 0.2 } 
                  }}
                  className="relative mb-12 rounded-xl border border-cyan-500/20 bg-[#0a0a1a]/70 p-6 shadow-lg backdrop-blur-md"
                >
                  {/* Timeline dot */}
                  <div className="absolute -left-[4.5rem] top-6 size-5 rounded-full bg-cyan-500 shadow-lg shadow-cyan-500/30 md:-left-[4.5rem]" />
                  
                  <h3 className="mb-1 text-2xl font-bold text-white text-shadow-md">{job.position}</h3>
                  <div className="mb-4 flex flex-wrap items-center justify-between">
                    <h4 className="text-xl text-cyan-400 text-shadow-sm">{job.company}</h4>
                    <span className="mt-2 rounded-full bg-gray-800/60 px-3 py-1 text-sm text-white sm:mt-0">
                      {job.period}
                    </span>
                  </div>
                  <ul className="ml-5 list-disc space-y-2 text-white">
                    {job.highlights.map((highlight, i) => (
                      <motion.li 
                        key={i}
                        initial={{ opacity: 0 }}
                        animate={{ 
                          opacity: 1,
                          transition: { delay: 0.3 + index * 0.2 + i * 0.1 } 
                        }}
                      >
                        {highlight}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        );
      default:
        return (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mx-auto max-w-3xl px-4 text-center"
          >
            <h1 ref={textRef} className="mb-6 text-5xl font-bold text-white text-shadow-lg sm:text-6xl md:text-7xl">
              Hi, I'm <span className="text-cyan-500">John Doe</span>
            </h1>
            <h2 className="mb-8 text-2xl text-cyan-400 text-shadow-md sm:text-3xl">
              Full Stack Developer & 3D Web Specialist
            </h2>
            <p className="mb-10 rounded-xl border border-cyan-500/20 bg-[#0a0a1a]/60 p-6 text-xl leading-relaxed text-white shadow-xl backdrop-blur-sm">
              Creating immersive digital experiences with cutting-edge web technologies.
              Specializing in interactive 3D visualizations, modern frontend frameworks,
              and scalable backend solutions.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <motion.button
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className="rounded-full bg-cyan-500 px-8 py-3 text-lg font-bold text-gray-900 transition-all hover:shadow-lg hover:shadow-cyan-500/30"
                onClick={() => setActiveSection('projects')}
              >
                View Projects
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className="rounded-full border-2 border-cyan-500 bg-transparent px-8 py-3 text-lg font-bold text-cyan-400 transition-all hover:bg-cyan-500/10"
                onClick={() => window.open('/assets/Resume v2.pdf', '_blank')}
              >
                Download Resume
              </motion.button>
            </div>
          </motion.div>
        );
    }
  };

  return (
    <div ref={containerRef} className="relative min-h-screen w-full overflow-hidden">
      <div className="absolute inset-0 z-0">
        <SceneWrapper />
      </div>
      <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-b from-[#0a0a1a]/50 via-[#0a0a1a]/50 to-[#0a0a1a]/90" />
      <div className="absolute inset-0 z-20 flex flex-col">
        <header className="w-full py-6">
          <nav className="mx-auto flex max-w-7xl flex-wrap items-center justify-center px-4 md:justify-between">
            <div className="mb-4 text-2xl font-bold text-cyan-500 md:mb-0">Portfolio</div>
            <div className="flex flex-wrap justify-center gap-2 sm:gap-6">
              {['home', 'projects', 'skills', 'experience'].map((section) => (
                <button
                  key={section}
                  onClick={() => setActiveSection(section)}
                  className={`rounded-full px-4 py-2 text-white transition-all ${
                    activeSection === section 
                      ? 'border border-cyan-500/30 bg-cyan-500/20 font-bold text-cyan-400' 
                      : 'hover:text-cyan-400'
                  } capitalize`}
                >
                  {section}
                </button>
              ))}
              <a 
                href="mailto:contact@example.com"
                className="rounded-full bg-cyan-500 px-4 py-2 font-bold text-gray-900 transition-colors hover:bg-cyan-400"
              >
                Contact
              </a>
            </div>
          </nav>
        </header>
        <main className="flex flex-1 items-center justify-center overflow-y-auto py-16">
          {renderSection()}
        </main>
        <footer className="py-4 text-center text-sm text-gray-400">
          <p>© 2023 John Doe. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
};

export default Hero;
