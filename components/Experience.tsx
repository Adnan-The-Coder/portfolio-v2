import { motion } from 'framer-motion';

function Experience() {
  // Data array based on the image
  const experiences = [
    {
      id: 1,
      period: "8-21 - Now",
      company: "Electroplix",
      role: "FOUNDER & CEO",
      description: "Building Electroplix.com, A platform with robust global network-based serverless infrastructure and helping businesses tap in the digital world.",
      additionalInfo: "Keeping sustainable solutions to drive business growth which are secure, efficient and scalable."
    },
    {
      id: 2,
      period: "10-24 - Now",
      company: "Entrepreneurship Cell, MJCET",
      role: "TECH CAPTAIN",
      description: "Developed and refactored Web technologies"
    },
    {
      id: 3,
      period: "5-22 - 9-24",
      company: "Freelance",
      role: "FULL STACK WEB DEVELOPER",
      description: "Built 6+ Web Projects and Optimized website builds for businesses"
    },
    {
      id: 4,
      period: "8-22 - 10-24",
      company: "Hobby Master",
      role: "PYTHON DEVELOPER",
      description: "Developed a complete desktop assistant with Graphical user interface.",
      additionalInfo: "Built on Python and tkinter GUI, has more than 25+ features, Inspired From Iron man Jarvis."
    }
  ];

  return (
    <section id="experience" className="rounded-xl border border-gray-800 bg-gray-900/50 py-20 opacity-90 backdrop-blur-sm md:py-32">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.8 }}
          className="mx-auto mb-16 max-w-4xl text-center"
        >
          <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
            <span className="text-cyan-400">Experience</span>
          </h2>
        </motion.div>
        <div className="relative mx-auto max-w-3xl">
          {/* Timeline line */}
          <div className="absolute inset-y-0 left-0 ml-4 w-1 bg-gray-800"></div>
          {/* Experience items */}
          {experiences.map((exp, index) => (
            <motion.div 
              key={exp.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="relative mb-12 pl-16"
            >
              {/* Timeline dot */}
              <div className="absolute left-0 top-0 ml-0.5 size-8 rounded-full border-4 border-orange-500 bg-gray-900"></div>
              {/* Period indicator */}
              <div className="absolute left-[-80px] top-1 w-20 text-right text-xs font-medium text-gray-400">
                {exp.period}
              </div>
              {/* Content */}
              <div className="overflow-hidden rounded-xl border border-gray-800 bg-gray-900/50 p-6 shadow-lg backdrop-blur-sm">
                <h3 className="mb-1 text-xl font-bold text-white">{exp.company}</h3>
                <p className="mb-3 text-lg font-bold text-orange-500">{exp.role}</p>
                <p className="mb-2 text-gray-300">{exp.description}</p>
                {exp.additionalInfo && (
                  <p className="text-sm text-gray-400">{exp.additionalInfo}</p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;