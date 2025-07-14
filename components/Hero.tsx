"use client";
import React, { useEffect, useRef, useState } from 'react';
import { motion, useAnimation, useScroll, useTransform } from 'framer-motion';

// This is the upgraded Hero component with enhanced 3D tech glitch effect
function Hero() {
  const controls = useAnimation();
  const homeRef = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);

  // Scroll animations
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const translateY = useTransform(scrollYProgress, [0, 0.2], [0, -50]);
  
  // Animation on load
  useEffect(() => {
    controls.start({ opacity: 1, y: 0 });
    
    // Small delay to ensure CSS animations trigger properly
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 500);
    
    return () => clearTimeout(timer);
  }, [controls]);
  
  return (
    <section id="home" ref={homeRef} className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-black">
      {/* Matrix-like background effect */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-900 via-black to-black opacity-80"></div>
      {/* Animated code lines in background */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="code-rain"></div>
      </div>
      {/* Hexagon grid pattern overlay */}
      <div className="absolute inset-0 z-0 bg-[url('https://adnanthecoder.com/assets/hexagon-grid.png')] bg-repeat opacity-5"></div>
      <motion.div 
        className="container relative z-10 mx-auto px-6 py-24 text-center"
        initial={{ opacity: 0 }}
        animate={controls}
        transition={{ duration: 1 }}
      >
        <div className="mx-auto max-w-4xl">
          {/* Enhanced 3D Tech Glitch effect on name */}
          <motion.div
            className="tech-glitch-wrapper perspective-1000 mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <h1 className={`relative text-4xl font-bold text-white md:text-6xl ${isLoaded ? 'tech-glitch-text' : ''}`}>
              <span className="tech-bracket relative text-gray-300">{"<"}</span>
              <span className="tech-intro relative">Hi, I'm </span> 
              <span className="tech-name relative">
                <span className={`tech-name-text font-mono ${isLoaded ? 'tech-glitch-active' : ''}`}>Syed Adnan Ali</span>
                {isLoaded && (
                  <>
                    <span className="tech-name-ghost tech-ghost-1 font-mono">Syed Adnan Ali</span>
                    <span className="tech-name-ghost tech-ghost-2 font-mono">Syed Adnan Ali</span>
                    <span className="tech-highlight"></span>
                    <span className="tech-scan-line"></span>
                  </>
                )}
              </span>
              <span className="tech-bracket relative text-gray-300">{"/"}</span>
              <span className="tech-bracket relative text-gray-300">{">"}</span>
              {/* Decorative elements */}
              <span className="tech-corner tech-corner-tl"></span>
              <span className="tech-corner tech-corner-tr"></span>
              <span className="tech-corner tech-corner-bl"></span>
              <span className="tech-corner tech-corner-br"></span>
              {/* Digital noise overlay */}
              <span className="tech-digital-noise"></span>
            </h1>
          </motion.div>
          {/* Terminal-style typewriter effect */}
          <motion.div 
            className="mb-6 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <span className="tech-prompt mr-2 font-mono text-green-500">$</span>
            <h2 className="tech-typewriter font-mono text-xl text-gray-300 md:text-3xl">
              Software_Developer.exe
              <span className="tech-cursor text-green-500">_</span>
            </h2>
          </motion.div>
          <motion.div 
            className="terminal-box tech-terminal relative mx-auto mb-8 max-w-3xl rounded-lg border border-green-500/30 bg-gray-900/70 p-6 shadow-lg shadow-green-500/10 backdrop-blur-sm"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <div className="tech-terminal-header absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-green-500/0 via-green-500/70 to-green-500/0"></div>
            <p className="text-left font-mono text-lg text-gray-400">
              <span className="text-green-400">{">"}</span> A passionate full-stack developer and founder of 
              <span className="text-cyan-400"> Electroplix</span>, currently pursuing a degree in 
              <span className="text-cyan-400"> Computer Science Engineering</span>, with hands-on experience in building 
              <span className="text-green-400"> scalable</span> and <span className="text-green-400">dynamic</span> end-to-end applications.
            </p>
            <div className="tech-terminal-scan pointer-events-none absolute inset-0"></div>
          </motion.div>
          <motion.div 
            className="flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <a 
              href="#projects" 
              className="tech-button flex items-center gap-2 rounded border border-green-400 bg-green-500 px-8 py-3 font-mono font-bold text-gray-900 transition-all hover:bg-green-600 hover:shadow-lg hover:shadow-green-500/30"
            >
              <span>{'{'}</span> VIEW_PROJECTS <span>{'}'}</span>
              <span className="tech-button-glow"></span>
            </a>
            <a 
              href="#contact" 
              className="tech-button-outline flex items-center gap-2 rounded border-2 border-green-500 bg-transparent px-8 py-3 font-mono font-bold text-green-400 transition-all hover:bg-green-500/10 hover:shadow-lg hover:shadow-green-500/20"
            >
              <span>{'['}</span> CONTACT <span>{']'}</span>
              <span className="tech-button-glow"></span>
            </a>
          </motion.div>
          <motion.div 
            className="mt-16"
            style={{ opacity, y: translateY }}
          >
            <p className="mb-4 font-mono text-gray-500">./scroll_to_explore.sh</p>
            <div className="tech-scroll-indicator relative mx-auto h-10 w-6 rounded-full border-2 border-green-500/50">
              <div className="mx-auto mt-2 size-1.5 animate-bounce rounded-full bg-green-500"></div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

export default Hero;
