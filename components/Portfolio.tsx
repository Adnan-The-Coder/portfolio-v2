'use client';

import { useRef, useEffect } from 'react';
import { motion, useScroll, useTransform, useAnimation } from 'framer-motion';
import ParticleBackground from './ParticleBackground';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaServer, FaDatabase, FaReact, FaNode, FaCode, FaJava, FaPython, FaCar, FaVideo } from 'react-icons/fa';
import { SiNextdotjs, SiTypescript, SiJavascript, SiMongodb, SiPostgresql, SiSupabase, SiCloudflare, SiTailwindcss, SiC, SiGooglecloud, SiBlockchaindotcom, SiReactivex, SiBlender } from 'react-icons/si';
import { MdApi } from 'react-icons/md';
import { GiBrain, GiCube, GiJetFighter } from 'react-icons/gi';
import Image from 'next/image';

// Projects data
const projects = [
  {
    title: 'Electroplix',
    description: 'Founder & CEO. A platform with robust global network-based serverless infrastructure helping businesses tap into the digital world.',
    tech: ['Next.js', 'Node.js', 'Cloudflare Workers', 'Serverless'],
    link: 'https://electroplix.com',
    image: '/placeholder-project.jpg',
    featured: true,
  },
  {
    title: 'Desktop Assistant',
    description: 'Complete desktop assistant with graphical user interface built on Python and Tkinter GUI, with 25+ features inspired from Iron Man Jarvis.',
    tech: ['Python', 'Tkinter', 'AI', 'GUI Development'],
    link: 'https://github.com/username/desktop-assistant',
    image: '/placeholder-project.jpg',
  },
  {
    title: 'E-Commerce Platform',
    description: 'Full-stack e-commerce platform with secure payment processing and real-time inventory management.',
    tech: ['React', 'Node.js', 'MongoDB', 'Payment Gateway Integration'],
    link: 'https://github.com/username/ecommerce-platform',
    image: '/placeholder-project.jpg',
  },
  {
    title: 'Serverless API System',
    description: 'High-performance API system built with HonoJS running on Cloudflare Workers with powerful database integration.',
    tech: ['HonoJS', 'Cloudflare Workers', 'NeonDB', 'TypeScript'],
    link: 'https://github.com/username/serverless-api',
    image: '/placeholder-project.jpg',
  },
];

// Skills data
const skills = {
  frontend: [
    { name: 'React', icon: <FaReact className="text-[#61DAFB]" />, level: 90 },
    { name: 'Next.js', icon: <SiNextdotjs className="text-white" />, level: 95 },
    { name: 'TypeScript', icon: <SiTypescript className="text-[#3178C6]" />, level: 90 },
    { name: 'JavaScript', icon: <SiJavascript className="text-[#F7DF1E]" />, level: 85 },
    { name: 'HTML/CSS', icon: <FaCode className="text-orange-400" />, level: 95 },
    { name: 'TailwindCSS', icon: <SiTailwindcss className="text-[#38B2AC]" />, level: 90 },
  ],
  backend: [
    { name: 'Node.js', icon: <FaNode className="text-[#68A063]" />, level: 90 },
    { name: 'BunJS', icon: "🧄", level: 85 },
    { name: 'HonoJS', icon: "🔥", level: 85 },
    { name: 'Elysia', icon: "🏝️", level: 80 },
    { name: 'Java', icon: <FaJava className="text-[#007396]" />, level: 75 },
    { name: 'Python', icon: <FaPython className="text-[#3776AB]" />, level: 90 },
    { name: 'C', icon: <SiC className="text-[#A8B9CC]" />, level: 75 },
  ],
  database: [
    { name: 'MongoDB', icon: <SiMongodb className="text-[#47A248]" />, level: 85 },
    { name: 'PostgreSQL', icon: <SiPostgresql className="text-[#336791]" />, level: 90 },
    { name: 'Supabase', icon: <SiSupabase className="text-[#3ECF8E]" />, level: 85 },
    { name: 'NeonDB', icon: <FaDatabase className="text-[#00E699]" />, level: 80 },
    { name: 'Drizzle ORM', icon: <SiReactivex className="text-[#B7178C]" />, level: 75 },
  ],
  infrastructure: [
    { name: 'Cloudflare', icon: <SiCloudflare className="text-[#F6821F]" />, level: 90 },
    { name: 'Google Cloud', icon: <SiGooglecloud className="text-[#4285F4]" />, level: 80 },
    { name: 'API Development', icon: <MdApi className="text-[#00C853]" />, level: 95 },
    { name: 'Blockchain', icon: <SiBlockchaindotcom className="text-[#121D33]" />, level: 70 },
    { name: 'AI Integration', icon: <GiBrain className="text-[#FF6B6B]" />, level: 75 },
    { name: 'Web Hosting', icon: <FaServer className="text-[#FD5750]" />, level: 90 },
  ],
};

// Experience data
const experience = [
  {
    position: "Founder & CEO",
    company: "Electroplix",
    period: "Aug 2024 - Present",
    highlights: [
      "Building Electroplix.com, a platform with robust global network-based serverless infrastructure and helping businesses tap into the digital world.",
      "Keeping sustainable solutions to drive business growth which are secure, efficient, and scalable."
    ]
  },
  {
    position: "Tech Captain",
    company: "Entrepreneurship Cell, MJCET",
    period: "Oct 2024 - Present",
    highlights: [
      "Developed and refactored Web technologies."
    ]
  },
  {
    position: "Freelance Full Stack Web Developer",
    company: "Self-employed",
    period: "May 2022 - Sep 2024",
    highlights: [
      "Built 6+ Web Projects and optimized website builds for businesses."
    ]
  },
  {
    position: "Python Developer",
    company: "Hobby Master",
    period: "Aug 2022 - Oct 2024",
    highlights: [
      "Developed a complete desktop assistant with graphical user interface.",
      "Built on Python and Tkinter GUI, has more than 25+ features, inspired from Iron Man Jarvis."
    ]
  }
];

export default function Portfolio() {
  const controls = useAnimation();
  
  // Refs for each section
  const homeRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  
  // Animation on load
  useEffect(() => {
    controls.start({ opacity: 1, y: 0 });
  }, [controls]);
  
  // Scroll animations
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const translateY = useTransform(scrollYProgress, [0, 0.2], [0, -50]);
  
  return (
    <>
      <ParticleBackground />
      
      {/* Hero Section */}
      <section id="home" ref={homeRef} className="min-h-screen flex flex-col justify-center items-center relative">
        <motion.div 
          className="container mx-auto px-6 py-24 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={controls}
          transition={{ duration: 0.8 }}
        >
          <div className="max-w-4xl mx-auto">
            <motion.h1 
              className="text-4xl md:text-6xl font-bold mb-4 text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Hi, I'm <span className="text-cyan-400">Syed Adnan Ali</span>
            </motion.h1>
            
            <motion.h2 
              className="text-xl md:text-3xl font-medium mb-6 text-gray-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Software Developer
            </motion.h2>
            
            <motion.p 
              className="text-lg text-gray-400 mb-8 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              A passionate full-stack developer and founder of Electroplix, currently pursuing a degree in Computer Science Engineering, with hands-on experience in building scalable and dynamic end-to-end applications.
            </motion.p>
            
            <motion.div 
              className="flex flex-wrap justify-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <a 
                href="#projects" 
                className="bg-cyan-500 hover:bg-cyan-600 text-gray-900 font-medium px-8 py-3 rounded-full transition-all"
              >
                View Projects
              </a>
              <a 
                href="#contact" 
                className="bg-transparent border-2 border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 font-medium px-8 py-3 rounded-full transition-all"
              >
                Get In Touch
              </a>
            </motion.div>
            
            <motion.div 
              className="mt-16"
              style={{ opacity, y: translateY }}
            >
              <p className="text-gray-500 mb-4">Scroll to explore</p>
              <div className="w-6 h-10 border-2 border-gray-500 rounded-full mx-auto relative">
                <div className="w-1.5 h-1.5 bg-cyan-500 rounded-full mx-auto animate-bounce mt-2"></div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>
      
      {/* About Section */}
      <section id="about" ref={aboutRef} className="py-20 md:py-32">
        <div className="container mx-auto px-6">
          <motion.div 
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-white text-center">
              About <span className="text-cyan-400">Me</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-5 gap-12 items-center">
              <div className="md:col-span-2">
                <div className="relative w-48 h-48 md:w-64 md:h-64 mx-auto rounded-full overflow-hidden border-4 border-cyan-500/20">
                  <Image 
                    src="/avatar-placeholder.jpg" 
                    alt="Adnan" 
                    fill 
                    className="object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = "https://via.placeholder.com/300?text=Avatar";
                    }}
                  />
                </div>
              </div>
              
              <div className="md:col-span-3">
                <h3 className="text-2xl font-bold text-cyan-400 mb-4">
                  Software Developer & Founder
                </h3>
                
                <p className="text-gray-300 mb-6">
                  A passionate full-stack developer and founder of Electroplix, currently pursuing a degree in Computer Science Engineering, with hands-on experience in building scalable and dynamic end-to-end applications.
                </p>
                
                <p className="text-gray-300 mb-6">
                  Proficient in modern technologies including React.js, Next.js, Node.js, BunJS, HonoJS, Elysia, and database solutions like NeonDB, Supabase, PostgreSQL, and MongoDB.
                </p>
                
                <p className="text-gray-300 mb-8">
                  Skilled in deploying serverless architectures using Cloudflare Workers, combining strong technical foundations with creative problem-solving to craft efficient, high-impact digital solutions.
                </p>
                
                <div className="flex gap-4">
                  <a href="https://github.com/Adnan-The-Coder" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                    <FaGithub size={24} />
                  </a>
                  <a href="https://linkedin.com/in/syedadnanali99" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                    <FaLinkedin size={24} />
                  </a>
                  <a href="mailto:syedadnanali0106@gmail.com" className="text-gray-400 hover:text-white transition-colors">
                    <FaEnvelope size={24} />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Projects Section */}
      <section id="projects" ref={projectsRef} className="py-20 md:py-32 bg-gradient-to-b from-gray-900/50 to-gray-950/50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto mb-16 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              My <span className="text-cyan-400">Projects</span>
            </h2>
            <p className="text-gray-400">
              Here are some of my recent projects and startup ventures
            </p>
          </motion.div>
          
          {/* Featured Project */}
          {projects.filter(p => p.featured).map((project, index) => (
            <motion.div 
              key={`featured-${index}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.8 }}
              className="max-w-5xl mx-auto mb-20 bg-gray-900/50 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg border border-gray-800"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="relative h-64 md:h-full">
                  <div className="absolute inset-0 bg-cyan-500/20"></div>
                  <Image 
                    src={project.image} 
                    alt={project.title} 
                    fill 
                    className="object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = "https://via.placeholder.com/800x600?text=Project";
                    }}
                  />
                </div>
                <div className="p-8 flex flex-col">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
                    <p className="text-gray-300 mb-6">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((tech, i) => (
                        <span key={i} className="text-xs font-medium px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-cyan-500 hover:bg-cyan-600 text-gray-900 font-medium px-6 py-2 rounded-full self-start transition-all"
                  >
                    Visit Project
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
          
          {/* Other Projects */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.filter(p => !p.featured).map((project, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-gray-900/50 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg border border-gray-800 flex flex-col h-full hover:shadow-cyan-500/5 hover:border-cyan-500/30 transition-all"
              >
                <div className="relative h-48">
                  <Image 
                    src={project.image} 
                    alt={project.title} 
                    fill 
                    className="object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = "https://via.placeholder.com/400x300?text=Project";
                    }}
                  />
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                  <p className="text-gray-300 mb-4 flex-1">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="text-xs font-medium px-2 py-1 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-cyan-400 hover:text-cyan-300 font-medium flex items-center gap-2 transition-colors"
                  >
                    View Project
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M7 17l9.2-9.2M17 17V7H7" />
                    </svg>
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Skills Section */}
      <section id="skills" ref={skillsRef} className="py-20 md:py-32">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto mb-16 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Technical <span className="text-cyan-400">Skills</span>
            </h2>
            <p className="text-gray-400">
              My expertise across the full stack development spectrum
            </p>
          </motion.div>
          
          <div className="max-w-5xl mx-auto">
            {/* Frontend */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.8 }}
              className="mb-16"
            >
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <span className="w-8 h-8 rounded-full bg-cyan-500/20 flex items-center justify-center text-cyan-400">
                  <FaReact />
                </span>
                Frontend Development
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {skills.frontend.map((skill, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-gray-900/50 backdrop-blur-sm p-4 rounded-lg border border-gray-800"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">{skill.icon}</span>
                        <span className="font-medium text-white">{skill.name}</span>
                      </div>
                      <span className="text-sm text-gray-400">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                      <motion.div 
                        className="h-full bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: index * 0.1 + 0.3 }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            {/* Backend */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.8 }}
              className="mb-16"
            >
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <span className="w-8 h-8 rounded-full bg-cyan-500/20 flex items-center justify-center text-cyan-400">
                  <FaNode />
                </span>
                Backend Development
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {skills.backend.map((skill, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-gray-900/50 backdrop-blur-sm p-4 rounded-lg border border-gray-800"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">{skill.icon}</span>
                        <span className="font-medium text-white">{skill.name}</span>
                      </div>
                      <span className="text-sm text-gray-400">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                      <motion.div 
                        className="h-full bg-gradient-to-r from-cyan-400 to-indigo-500 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: index * 0.1 + 0.3 }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            {/* Database */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.8 }}
              className="mb-16"
            >
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <span className="w-8 h-8 rounded-full bg-cyan-500/20 flex items-center justify-center text-cyan-400">
                  <FaDatabase />
                </span>
                Database & Storage
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {skills.database.map((skill, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-gray-900/50 backdrop-blur-sm p-4 rounded-lg border border-gray-800"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">{skill.icon}</span>
                        <span className="font-medium text-white">{skill.name}</span>
                      </div>
                      <span className="text-sm text-gray-400">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                      <motion.div 
                        className="h-full bg-gradient-to-r from-cyan-400 to-emerald-500 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: index * 0.1 + 0.3 }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            {/* Infrastructure */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <span className="w-8 h-8 rounded-full bg-cyan-500/20 flex items-center justify-center text-cyan-400">
                  <FaServer />
                </span>
                Infrastructure & Deployment
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {skills.infrastructure.map((skill, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-gray-900/50 backdrop-blur-sm p-4 rounded-lg border border-gray-800"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">{skill.icon}</span>
                        <span className="font-medium text-white">{skill.name}</span>
                      </div>
                      <span className="text-sm text-gray-400">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                      <motion.div 
                        className="h-full bg-gradient-to-r from-cyan-400 to-orange-500 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: index * 0.1 + 0.3 }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Education Section */}
      <section id="education" className="py-20 md:py-32">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto mb-16 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              <span className="text-cyan-400">Education</span>
            </h2>
          </motion.div>
          
          <div className="max-w-3xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.8 }}
              className="bg-gray-900/50 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg border border-gray-800 p-8"
            >
              <h3 className="text-2xl font-bold text-white mb-2">Bachelor of Engineering in Computer Science and Engineering</h3>
              <p className="text-lg text-cyan-400 mb-4">Muffakham Jah College of Engineering & Technology</p>
              <div className="flex justify-between items-center">
                <p className="text-gray-300">2024 - 2028</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Achievements Section */}
      <section id="achievements" className="py-20 md:py-32 bg-gradient-to-b from-gray-900/50 to-gray-950/50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto mb-16 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              <span className="text-cyan-400">Achievements</span>
            </h2>
          </motion.div>
          
          <div className="max-w-3xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.8 }}
              className="bg-gray-900/50 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg border border-gray-800 p-8"
            >
              <h3 className="text-2xl font-bold text-white mb-2">TS EAMCET 2024</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <div className="bg-gray-800/50 p-4 rounded-lg">
                  <p className="text-gray-400 text-sm">Score</p>
                  <p className="text-cyan-400 font-bold">Top 2%</p>
                </div>
                <div className="bg-gray-800/50 p-4 rounded-lg">
                  <p className="text-gray-400 text-sm">Rank</p>
                  <p className="text-cyan-400 font-bold">6365 out of 2,40,617</p>
                </div>
              </div>
              <p className="text-gray-400 mt-4 text-sm">May 2024</p>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Hobbies Section */}
      <section id="hobbies" className="py-20 md:py-32">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto mb-16 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              <span className="text-cyan-400">Hobbies</span>
            </h2>
          </motion.div>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {[
                { name: "Python Development", icon: <FaPython className="text-[#3776AB] text-3xl" /> },
                { name: "Jet Engine Design", icon: <GiJetFighter className="text-gray-300 text-3xl" /> },
                { name: "Automobile Designing", icon: <FaCar className="text-red-500 text-3xl" /> },
                { name: "Blender", icon: <SiBlender className="text-orange-500 text-3xl" /> },
                { name: "Video Editing", icon: <FaVideo className="text-purple-500 text-3xl" /> },
                { name: "Rubik's Cube", icon: <GiCube className="text-yellow-500 text-3xl" /> }
              ].map((hobby, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-lg border border-gray-800 flex flex-col items-center text-center"
                >
                  <div className="mb-3">{hobby.icon}</div>
                  <h3 className="text-white font-medium text-sm">{hobby.name}</h3>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Career Objective Section */}
      <section id="career" className="py-20 md:py-32 bg-gradient-to-b from-gray-900/50 to-gray-950/50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto mb-16 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Career <span className="text-cyan-400">Objective</span>
            </h2>
          </motion.div>
          
          <div className="max-w-3xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.8 }}
              className="bg-gray-900/50 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg border border-gray-800 p-8"
            >
              <p className="text-gray-300 leading-relaxed text-lg">
                Seeking a rewarding position within a dynamic organization where I can leverage my existing experience to contribute effectively, while also cultivating new skills and knowledge through collaboration with professionals.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Contact Section */}
      <section id="contact" ref={contactRef} className="py-20 md:py-32 bg-gradient-to-b from-gray-900/50 to-gray-950/50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto mb-16 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Get In <span className="text-cyan-400">Touch</span>
            </h2>
            <p className="text-gray-400">
              Have a project in mind or want to collaborate? Let's talk!
            </p>
          </motion.div>
          
          <div className="max-w-3xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.8 }}
              className="grid grid-cols-1 lg:grid-cols-5 gap-12"
            >
              <div className="lg:col-span-2">
                <div className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-xl border border-gray-800">
                  <h3 className="text-xl font-bold text-white mb-4">Contact Information</h3>
                  
                  <ul className="space-y-4">
                    <li className="flex items-start gap-4">
                      <span className="text-cyan-400 mt-1">
                        <FaEnvelope />
                      </span>
                      <div>
                        <p className="text-sm text-gray-400">Email</p>
                        <a href="mailto:syedadnanali0106@gmail.com" className="text-white hover:text-cyan-400 transition-colors">
                          syedadnanali0106@gmail.com
                        </a>
                      </div>
                    </li>
                    <li className="flex items-start gap-4">
                      <span className="text-cyan-400 mt-1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-telephone" viewBox="0 0 16 16">
                          <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
                        </svg>
                      </span>
                      <div>
                        <p className="text-sm text-gray-400">Phone</p>
                        <a href="tel:+918290393487" className="text-white hover:text-cyan-400 transition-colors">
                          +91-8290393487
                        </a>
                      </div>
                    </li>
                    <li className="flex items-start gap-4">
                      <span className="text-cyan-400 mt-1">
                        <FaGithub />
                      </span>
                      <div>
                        <p className="text-sm text-gray-400">GitHub</p>
                        <a href="https://github.com/username" className="text-white hover:text-cyan-400 transition-colors">
                          github.com/username
                        </a>
                      </div>
                    </li>
                  </ul>
                  
                  <div className="mt-8">
                    <h4 className="text-white font-medium mb-2">Electroplix</h4>
                    <p className="text-gray-400 text-sm mb-4">Interested in my startup?</p>
                    <a 
                      href="https://electroplix.com" 
                      className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors"
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      Visit Electroplix
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M7 17l9.2-9.2M17 17V7H7" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="lg:col-span-3">
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">Name</label>
                      <input 
                        type="text" 
                        id="name" 
                        className="w-full px-4 py-3 bg-gray-900/80 border border-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-white"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">Email</label>
                      <input 
                        type="email" 
                        id="email" 
                        className="w-full px-4 py-3 bg-gray-900/80 border border-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-white"
                        placeholder="Your email"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-400 mb-2">Subject</label>
                    <input 
                      type="text" 
                      id="subject" 
                      className="w-full px-4 py-3 bg-gray-900/80 border border-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-white"
                      placeholder="Subject"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                    <textarea 
                      id="message" 
                      rows={5} 
                      className="w-full px-4 py-3 bg-gray-900/80 border border-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-white resize-none"
                      placeholder="Your message"
                    ></textarea>
                  </div>
                  
                  <button 
                    type="submit" 
                    className="w-full bg-cyan-500 hover:bg-cyan-600 text-gray-900 font-medium px-6 py-3 rounded-lg transition-all focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-gray-900"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="py-8 border-t border-gray-800">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-gray-400 text-sm">
                &copy; {new Date().getFullYear()} Syed Adnan Ali. All rights reserved.
              </p>
            </div>
            <div className="flex gap-4">
              <a href="https://github.com/username" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <FaGithub />
              </a>
              <a href="https://linkedin.com/in/username" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <FaLinkedin />
              </a>
              <a href="https://twitter.com/username" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <FaTwitter />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
} 