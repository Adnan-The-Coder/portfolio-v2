import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin,FaInstagram, FaCode, FaServer } from 'react-icons/fa';
import { BiCodeAlt } from 'react-icons/bi';

function Footer() {
  const currentYear = new Date().getFullYear();
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  const iconVariants = {
    initial: { scale: 1 },
    hover: { scale: 1.2, rotate: 5, transition: { type: "spring", stiffness: 400 } }
  };

  // Particle elements for tech aesthetic
  const particles = Array.from({ length: 20 }, (_, i) => (
    <div 
      key={i}
      className="absolute size-1 rounded-full bg-cyan-500 opacity-30"
      style={{
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        animation: `pulse ${2 + Math.random() * 4}s infinite ${Math.random() * 2}s ease-in-out`
      }}
    />
  ));

  return (
    <footer className="relative overflow-hidden bg-gray-950 py-16">
      {/* Tech circuit pattern overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute left-1/4 top-0 h-full w-px bg-gradient-to-b from-transparent via-cyan-500 to-transparent" />
        <div className="absolute left-2/4 top-0 h-full w-px bg-gradient-to-b from-transparent via-cyan-500 to-transparent" />
        <div className="absolute left-3/4 top-0 h-full w-px bg-gradient-to-b from-transparent via-cyan-500 to-transparent" />
        <div className="absolute left-0 top-1/3 h-px w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
        <div className="absolute left-0 top-2/3 h-px w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
        {particles}
      </div>
      <div className="container relative mx-auto px-6">
        <motion.div 
          className="mb-12 grid grid-cols-1 gap-10 md:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Logo and tagline section */}
          <motion.div variants={itemVariants} className="flex flex-col items-center md:items-start">
            <div className="mb-4 flex items-center">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-2xl font-bold text-transparent">
                &lt;Adnan/&gt;
              </span>
            </div>
            <p className="text-center text-sm text-gray-400 md:text-left">
              Building digital experiences with code, creativity, and coffee.
            </p>
          </motion.div>
          {/* Quick links */}
          <motion.div variants={itemVariants} className="flex flex-col items-center md:items-start">
            <h4 className="relative mb-4 font-medium text-white">
              <span className="relative z-10">Navigation</span>
              <span className="absolute -bottom-1 left-0 h-1 w-12 bg-cyan-500"></span>
            </h4>
            <div className="grid grid-cols-2 gap-x-8 gap-y-2">
              <a href="#home" className="text-sm text-gray-400 transition-colors hover:text-cyan-400">Home</a>
              <a href="#about" className="text-sm text-gray-400 transition-colors hover:text-cyan-400">About</a>
              <a href="#projects" className="text-sm text-gray-400 transition-colors hover:text-cyan-400">Projects</a>
              <a href="#experience" className="text-sm text-gray-400 transition-colors hover:text-cyan-400">Experience</a>
              <a href="#skills" className="text-sm text-gray-400 transition-colors hover:text-cyan-400">Skills</a>
              <a href="#contact" className="text-sm text-gray-400 transition-colors hover:text-cyan-400">Contact</a>
            </div>
          </motion.div>
          {/* Contact section */}
          <motion.div variants={itemVariants} className="flex flex-col items-center md:items-start">
            <h4 className="relative mb-4 font-medium text-white">
              <span className="relative z-10">Connect</span>
              <span className="absolute -bottom-1 left-0 h-1 w-12 bg-cyan-500"></span>
            </h4>
            <div className="mb-4 flex gap-2">
              <motion.a 
                href="https://github.com/Adnan-The-Coder" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex size-10 items-center justify-center rounded-lg bg-gray-800 text-cyan-400 transition-colors hover:bg-gray-700"
                variants={iconVariants}
                initial="initial"
                whileHover="hover"
              >
                <FaGithub size={18} />
              </motion.a>
              <motion.a 
                href="https://linkedin.com/in/syedadnanali99" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex size-10 items-center justify-center rounded-lg bg-gray-800 text-cyan-400 transition-colors hover:bg-gray-700"
                variants={iconVariants}
                initial="initial"
                whileHover="hover"
              >
                <FaLinkedin size={18} />
              </motion.a>
              <motion.a 
                href="https://www.instagram.com/adnan_the_coder" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex size-10 items-center justify-center rounded-lg bg-gray-800 text-cyan-400 transition-colors hover:bg-gray-700"
                variants={iconVariants}
                initial="initial"
                whileHover="hover"
              >
                <FaInstagram size={18} />
              </motion.a>
            </div>
            <p className="text-center text-sm text-gray-400 md:text-left">
              syedadnanali0106@gmail.com
            </p>
          </motion.div>
        </motion.div>
        {/* Bottom section with copyright */}
        <motion.div 
          className="flex flex-col items-center justify-between border-t border-gray-800 pt-8 md:flex-row"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, transition: { delay: 0.5 } }}
          viewport={{ once: true }}
        >
          <p className="mb-4 flex items-center text-sm text-gray-500 md:mb-0">
            <span className="relative mr-2 flex items-center rounded-md bg-gray-900 px-2 py-1">
              <span className="absolute -left-0.5 -top-0.5 size-1.5 animate-pulse rounded-full bg-cyan-500"></span>
              <BiCodeAlt className="mr-1 text-cyan-500" />
              <span>Status: Busy</span>
            </span>
            &copy; {currentYear} Syed Adnan Ali
          </p>
          <div className="flex items-center text-xs text-gray-600">
            <span className="flex items-center">
              <FaCode className="mr-1" />
              <span>with</span>
              <span className="mx-1 text-red-500">❤</span>
              <span className="mr-2">by Adnan</span>
            </span>
            <span className="hidden items-center border-l border-gray-700 pl-2 md:flex">
              <FaServer className="mr-1" />
              <span>v2.0.0</span>
            </span>
          </div>
        </motion.div>
      </div>
      {/* Animated glow effect */}
      <div className="absolute bottom-0 left-1/2 h-1 w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-cyan-500 to-transparent blur-sm"></div>
      <div className="absolute bottom-0 left-1/2 h-0.5 w-1/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-cyan-500 to-transparent blur-sm"></div>
    </footer>
  );
}

export default Footer;