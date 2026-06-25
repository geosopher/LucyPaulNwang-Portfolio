import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';

const skills = [
  { name: "Administrative Management", level: 95 },
  { name: "Calendar & Schedule Management", level: 98 },
  { name: "Customer Service", level: 90 },
  { name: "Office Administration", level: 95 },
  { name: "Data Entry & Record Keeping", level: 100 },
  { name: "Microsoft Office Suite", level: 95 },
  { name: "Google Workspace", level: 90 },
  { name: "Communication & Team Coordination", level: 95 },
  { name: "Report Writing", level: 85 },
  { name: "Document Management", level: 92 },
];

export default function Skills() {
  return (
    <section className="py-24 relative bg-navy/95 text-white backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side: Header & Intro */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-serif font-bold mb-4" style={{ color: '#e8f7ec' }}>Professional Skills</h2>
            <div className="w-20 h-1 bg-tiffany rounded-full mb-8"></div>
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              My expertise spans across various aspects of administrative management. I leverage modern tools and proven methodologies to ensure smooth operational flow and organizational excellence.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-4">
              {skills.slice(0, 4).map((skill, index) => (
                <div key={index} className="flex items-center space-x-3 text-white">
                  <CheckCircle2 className="text-tiffany w-5 h-5 flex-shrink-0" />
                  <span className="font-semibold text-base">{skill.name}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Side: Progress Bars */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6 bg-white/10 backdrop-blur-sm p-8 rounded-3xl border border-white/20 shadow-xl"
          >
            {skills.slice(4).map((skill, index) => (
              <div key={index}>
                <div className="flex justify-between items-end mb-2">
                  <span className="font-semibold text-sm text-white">{skill.name}</span>
                  <span className="text-xs text-tiffany font-bold">{skill.level}%</span>
                </div>
                <div className="h-2.5 w-full bg-white/20 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.2 + (index * 0.1) }}
                    className="h-full bg-tiffany rounded-full relative"
                  >
                    <div className="absolute top-0 right-0 bottom-0 left-0 bg-white/20" />
                  </motion.div>
                </div>
              </div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
