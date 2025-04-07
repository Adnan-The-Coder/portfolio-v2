'use client';

import { useRef, useEffect } from 'react';
import { motion, useScroll, useTransform, useAnimation } from 'framer-motion';
import ParticleBackground from './ParticleBackground';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaServer, FaDatabase, FaReact, FaNode, FaCode, FaJava, FaPython, FaCar, FaVideo, FaBook } from 'react-icons/fa';
import { SiNextdotjs,SiPrisma, SiTypescript, SiJavascript, SiMongodb, SiPostgresql, SiSupabase, SiCloudflare, SiTailwindcss, SiC, SiGooglecloud, SiBlockchaindotcom, SiReactivex, SiBlender } from 'react-icons/si';
import { MdApi } from 'react-icons/md';
import { GiBrain, GiCube, GiJetFighter } from 'react-icons/gi';
import Image from 'next/image';
import Contact from './Contact';
import About from './About';

// Projects data
const projects = [
  {
    title: 'Electroplix',
    description: 'Founder & CEO. A platform with robust global network-based serverless infrastructure helping businesses tap into the digital world.',
    tech: ['Next.js', 'Node.js', 'Cloudflare Workers', 'Serverless'],
    link: 'https://electroplix.com',
    image: '/assets/electroplix_landingPage.png',
    featured: true,
  },
  {
    title: 'Desktop Assistant',
    description: 'Complete desktop assistant with graphical user interface built on Python and Tkinter GUI, with 25+ features inspired from Iron Man Jarvis.',
    tech: ['Python', 'Tkinter', 'AI', 'GUI Development'],
    link: 'https://youtu.be/aj7t6DxpHAE?si=TwS45Pdqxvw7GXz-',
    image: '/assets/jarvis_desktop_assistant.png',
  },
  {
    title: 'EdTech Platform',
    description: 'Dive into the world of creativity creating Websites which are modern and stylish designed for the future. Built using cutting-edge technologies like NEXT.JS, Tailwind CSS, and TypeScript, it offers interactive options and a wealth of resources to fuel your passion. Hobby Master - Embrace the future, ignite your imagination.',
    tech: ['React', 'Node.js', 'MongoDB', 'Payment Gateway Integration'],
    link: 'https://hobbymaster.xyz',
    image: '/assets/EdTechPlatform.png',
  },
  {
    title: 'Qubit Platform',
    description: 'Qubit.mobi is the digital presence of Qubit, a dynamic platform offering a suite of services designed to enhance user engagement and growth. Their offerings include Quickie, a seamless e-commerce solution for convenient shopping; QuickGig, a freelancing hub connecting professionals with businesses; and Quantumania, a collaborative community for quantum enthusiasts to share ideas and resources. ',
    tech: ['Next.JS', 'Node.js', 'NeonDB','prisma'],
    link: 'https://qubit.mobi',
    image: '/assets/Qubit.png',
  },
  {
    title: 'Time Management System',
    description: 'Master your time with Toggle, a revolutionary time management system built using Python. With SQL database connectivity, it ensures seamless data handling and storage. Its intriguing Tkinter GUI offers an intuitive and engaging user experience.',
    tech: ['Python', 'Tkinter GUI', 'MySQL'],
    link: 'https://www.youtube.com/watch?v=SSAMQDuCp5w',
    image: '/assets/TimeManagementToggle.png',
  },
  {
    title: 'Airways Management System',
    description: 'Navigate the skies with ease using COPS, a cutting-edge airways management system built using Python. Designed to revolutionize air traffic control, COPS brings efficiency and precision to your operations. Experience the future of airways management with COPS - Soaring above, beyond expectations.',
    tech: ['Python', 'Tkinter GUI', 'API Integrations'],
    link: 'https://www.youtube.com/watch?v=S-bOqnopwSI',
    image: '/assets/AirwaysManagement.png',
  },
  {
    title: 'Face Recognition System',
    description: "Developed using Python and OpenCV. Experience the magic of technology as it identifies faces with remarkable precision. Follow our video tutorial to build your own system. Let's explore the fascinating realm of face recognition together on this thrilling tech journey!🚀",
    tech: ['Python', 'OpenCV'],
    link: 'https://www.youtube.com/watch?v=I0gnK2D82-4',
    image: '/assets/FaceRecognition.png',
  },
  {
    title: 'Serverless API System',
    description: "Demonstrates a foundational implementation of a serverless API using Cloudflare Workers. It leverages the Hono framework for routing, neonDB for database interactions, and Drizzle for database schema management. This setup exemplifies efficient API development within Cloudflare's serverless environment.",
    tech: ['HonoJS', 'Cloudflare Workers', 'NeonDB', 'TypeScript'],
    link: 'https://github.com/Adnan-The-Coder/serverless-cloudflare-basic-api',
    image: '/assets/serverlessBunAPI.png',
  },
  {
    title: 'API built using JAVA SpringBoot',
    description: 'High-performance API system built with HonoJS running on Cloudflare Workers with powerful database integration.',
    tech: ['JAVA', 'Spring Boot', 'Maven'],
    link: 'https://github.com/Adnan-The-Coder/API-with-JAVA-spring-boot',
    image: '/assets/JavaSpringBoot.png',
  },
  {
    title: 'Bluetooth Speaker',
    description: 'The Handheld Dual Bluetooth Speaker is a compact, portable audio device crafted from recycled materials. It features two drivers housed in acrylic sheet enclosures, delivering rich, stereo-quality sound. Designed for sustainability and mobility, this project exemplifies innovative reuse of materials without compromising audio performance.',
    tech: ['Circuits', 'Bluetooth Module', 'Sound Amplifier'],
    link: 'https://youtu.be/I8PtBlfB30o?si=nWiTWTCcABqIRVN3',
    image: '/assets/speakerBuild.jpeg',
  },
];

// Skills data
const skills = {
  frontend: [
    { name: 'React', icon: <FaReact className="text-[#61DAFB]" />, level: 93 },
    { name: 'Next.js', icon: <SiNextdotjs className="text-white" />, level: 94 },
    { name: 'TypeScript', icon: <SiTypescript className="text-[#3178C6]" />, level: 78 },
    { name: 'JavaScript', icon: <SiJavascript className="text-[#F7DF1E]" />, level: 87 },
    { name: 'HTML/CSS', icon: <FaCode className="text-orange-400" />, level: 80 },
    { name: 'TailwindCSS', icon: <SiTailwindcss className="text-[#38B2AC]" />, level: 90 },
  ],
  backend: [
    { name: 'Node.js', icon: <FaNode className="text-[#68A063]" />, level: 70 },
    { name: 'BunJS', icon: "🧄", level: 95 },
    { name: 'HonoJS', icon: "🔥", level: 47 },
    { name: 'Elysia', icon: "🏝️", level: 80 },
    { name: 'Java', icon: <FaJava className="text-[#007396]" />, level: 24 },
    { name: 'Python', icon: <FaPython className="text-[#3776AB]" />, level: 90 },
    { name: 'C', icon: <SiC className="text-[#A8B9CC]" />, level: 85 },
  ],
  database: [
    { name: 'MongoDB', icon: <SiMongodb className="text-[#47A248]" />, level: 75 },
    { name: 'PostgreSQL', icon: <SiPostgresql className="text-[#336791]" />, level: 70 },
    { name: 'Supabase', icon: <SiSupabase className="text-[#3ECF8E]" />, level: 85 },
    { name: 'NeonDB', icon: <FaDatabase className="text-[#00E699]" />, level: 50 },
    { name: 'Drizzle ORM', icon: <SiReactivex className="text-[#B7178C]" />, level: 65 },
    { name: 'Prisma ORM', icon: <SiPrisma className="text-[#B7178C]" />, level: 35 },
  ],
  infrastructure: [
    { name: 'Cloudflare', icon: <SiCloudflare className="text-[#F6821F]" />, level: 90 },
    { name: 'Google Cloud', icon: <SiGooglecloud className="text-[#4285F4]" />, level: 40 },
    { name: 'API Development', icon: <MdApi className="text-[#00C853]" />, level: 95 },
    { name: 'Blockchain', icon: <SiBlockchaindotcom className="text-[#121D33]" />, level: 40 },
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
  const projectsRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  
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
      <About/>
      
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
                    // width={700}
                    fill 
                    // height={400}
                    className="object-cover"
                    // onError={(e) => {
                    //   const target = e.target as HTMLImageElement;
                    //   target.src = "https://via.placeholder.com/800x600?text=Project";
                    // }}
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
                    // onError={(e) => {
                    //   const target = e.target as HTMLImageElement;
                    //   target.src = "https://via.placeholder.com/400x300?text=Project";
                    // }}
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
                // { name: "Python Development", icon: <FaPython className="text-[#3776AB] text-3xl" /> },
                { name: "Book Reading", icon: <FaBook className="text-[#795548] text-3xl" /> },
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
      <Contact />
      
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