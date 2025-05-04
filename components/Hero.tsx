"use client";
import React from 'react';
import { motion, useScroll, useTransform, useAnimation } from 'framer-motion';
import { useRef, useEffect } from 'react';

function Hero() {
  const controls = useAnimation();
  const homeRef = useRef<HTMLDivElement>(null);

  // Scroll animations
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const translateY = useTransform(scrollYProgress, [0, 0.2], [0, -50]);
  
  // Animation on load
  useEffect(() => {
    controls.start({ opacity: 1, y: 0 });
  }, [controls]);
  
  return (
    <section id="home" ref={homeRef} className="min-h-screen flex flex-col justify-center items-center relative overflow-hidden bg-black">
      {/* Matrix-like background effect */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-900 via-black to-black opacity-80 z-0"></div>
      
      {/* Animated code lines in background */}
      <div className="absolute inset-0 opacity-20 z-0">
        <div className="code-rain"></div>
      </div>
      
      {/* Hexagon grid pattern overlay */}
      <div className="absolute inset-0 bg-[url('https://adnanthecoder.com/assets/hexagon-grid.png')] bg-repeat opacity-5 z-0"></div>
      
      <motion.div 
        className="container mx-auto px-6 py-24 text-center relative z-10"
        initial={{ opacity: 0 }}
        animate={controls}
        transition={{ duration: 1 }}
      >
        <div className="max-w-4xl mx-auto">
          {/* Glitch effect on name */}
          <motion.div
            className="glitch-wrapper mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold glitch-text text-white">
              <span className="text-gray-300">{"<"}</span>
              Hi, I'm <span className="text-green-400 font-mono">Syed Adnan Ali</span>
              <span className="text-gray-300">{"/>"}</span>
            </h1>
          </motion.div>
          
          {/* Terminal-style typewriter effect */}
          <motion.div 
            className="flex justify-center items-center mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <span className="text-green-500 mr-2 font-mono">$</span>
            <h2 className="text-xl md:text-3xl font-mono text-gray-300 typewriter">
              Software_Developer.exe
            </h2>
            <span className="text-green-500 animate-pulse">_._</span>
          </motion.div>
          
          <motion.div 
            className="bg-gray-900/70 backdrop-blur-sm border border-green-500/30 rounded-lg p-6 mb-8 max-w-3xl mx-auto terminal-box shadow-lg shadow-green-500/10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <p className="text-lg text-gray-400 font-mono text-left">
              <span className="text-green-400">{">"}</span> A passionate full-stack developer and founder of 
              <span className="text-cyan-400"> Electroplix</span>, currently pursuing a degree in 
              <span className="text-cyan-400"> Computer Science Engineering</span>, with hands-on experience in building 
              <span className="text-green-400"> scalable</span> and <span className="text-green-400">dynamic</span> end-to-end applications.
            </p>
          </motion.div>
          
          <motion.div 
            className="flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <a 
              href="#projects" 
              className="bg-green-500 hover:bg-green-600 text-gray-900 font-mono font-bold px-8 py-3 rounded transition-all flex items-center gap-2 border border-green-400 hover:shadow-lg hover:shadow-green-500/30"
            >
              <span>{'{'}</span> VIEW_PROJECTS <span>{'}'}</span>
            </a>
            <a 
              href="#contact" 
              className="bg-transparent border-2 border-green-500 text-green-400 hover:bg-green-500/10 font-mono font-bold px-8 py-3 rounded transition-all flex items-center gap-2 hover:shadow-lg hover:shadow-green-500/20"
            >
              <span>{'['}</span> CONTACT <span>{']'}</span>
            </a>
          </motion.div>
          
          <motion.div 
            className="mt-16"
            style={{ opacity, y: translateY }}
          >
            <p className="text-gray-500 mb-4 font-mono">./scroll_to_explore.sh</p>
            <div className="w-6 h-10 border-2 border-green-500/50 rounded-full mx-auto relative">
              <div className="w-1.5 h-1.5 bg-green-500 rounded-full mx-auto animate-bounce mt-2"></div>
            </div>
          </motion.div>
        </div>
      </motion.div>
      
      {/* Circuit-like border decoration */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-black via-green-500 to-black"></div>
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-black via-green-500 to-black"></div>
    </section>
  );
}

export default Hero;