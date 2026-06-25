import React from 'react';
import { motion } from 'motion/react';
import { GraduationCap, Award, BookOpen } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-4xl font-serif font-bold text-navy mb-4">About Me</h2>
          <div className="w-20 h-1 bg-tiffany mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Bio Section */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white/60 backdrop-blur-md p-8 lg:p-10 rounded-3xl shadow-xl border border-white/50"
          >
            <div className="w-12 h-12 bg-tiffany-light text-tiffany rounded-2xl flex items-center justify-center mb-6">
              <BookOpen size={24} />
            </div>
            <h3 className="text-2xl font-serif font-bold text-navy mb-4">Personal Bio</h3>
            <p className="text-slate leading-relaxed mb-6">
              Lucy Paul Nwang is a dedicated Administrative Manager with expertise in office administration, executive support, calendar management, customer communication, and operational coordination.
            </p>
            <p className="text-slate leading-relaxed">
              She is passionate about helping organizations maintain efficiency and productivity through structured administrative systems and excellent communication.
            </p>
          </motion.div>

          <div className="space-y-8">
            {/* Education Section */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white/60 backdrop-blur-md p-8 rounded-3xl shadow-xl border border-white/50 flex gap-6"
            >
              <div className="w-12 h-12 shrink-0 bg-tiffany/10 text-tiffany rounded-2xl flex items-center justify-center">
                <GraduationCap size={24} />
              </div>
              <div>
                <h3 className="text-xl font-serif font-bold text-navy mb-2">Educational Background</h3>
                <p className="font-semibold text-tiffany mb-1">Bachelor of Arts (B.A.) in English Linguistics</p>
                <p className="text-slate text-sm mb-1">Bayero University Kano</p>
                <p className="text-slate text-sm font-medium">Class of 2022</p>
              </div>
            </motion.div>

            {/* Career Highlights Section */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white/60 backdrop-blur-md p-8 rounded-3xl shadow-xl border border-white/50 flex gap-6"
            >
              <div className="w-12 h-12 shrink-0 bg-navy/5 text-navy rounded-2xl flex items-center justify-center">
                <Award size={24} />
              </div>
              <div>
                <h3 className="text-xl font-serif font-bold text-navy mb-4">Career Highlights</h3>
                <ul className="space-y-2">
                  {[
                    'Managed hospital administrative operations',
                    'Coordinated executive calendars and appointments',
                    'Maintained accurate medical and administrative records',
                    'Improved document management systems',
                    'Enhanced customer communication processes',
                    'Ensured compliance with organizational policies'
                  ].map((highlight, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-tiffany mr-2 mt-1">•</span>
                      <span className="text-slate text-sm leading-relaxed">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
