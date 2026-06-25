import React from 'react';
import { motion } from 'motion/react';
import { Building2, Calendar } from 'lucide-react';

const experiences = [
  {
    role: 'Administrative Manager',
    company: 'The Smile Shop Dental Clinics, H-medix Gwarinpa, Abuja',
    date: '2024 – Present',
    responsibilities: [
      'Manage calendars and appointments',
      'Coordinate office operations',
      'Maintain medical records',
      'Generate administrative reports',
      'Manage document filing systems',
      'Improve customer communication',
      'Ensure compliance with clinic policies',
      'Address administrative concerns and inquiries'
    ]
  },
  {
    role: 'Administrative Manager',
    company: 'ASFA Specialist Hospital',
    date: 'January 2023 – 2024',
    responsibilities: [
      'Managed calendars and appointments',
      'Coordinated office operations',
      'Maintained medical records',
      'Generated administrative reports',
      'Managed document filing systems',
      'Improved customer communication',
      'Ensured compliance with hospital policies',
      'Addressed administrative concerns and inquiries'
    ]
  }
];

export default function Experience() {
  return (
    <section className="py-24 relative">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-serif font-bold text-navy mb-4">Experience</h2>
          <div className="w-20 h-1 bg-tiffany mx-auto rounded-full"></div>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 lg:left-1/2 top-0 bottom-0 w-px bg-gray-200 transform lg:-translate-x-1/2"></div>

          {experiences.map((exp, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative flex flex-col lg:flex-row items-start lg:justify-between w-full mb-12 group ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-8 lg:left-1/2 top-8 w-4 h-4 rounded-full bg-tiffany ring-4 ring-white transform -translate-x-1/2 z-10 shadow-sm"></div>

              {/* Date & Company (Desktop) */}
              <div className={`w-full lg:w-[45%] pl-20 lg:pl-0 pt-6 lg:pt-0 mb-4 lg:mb-0 ${
                index % 2 === 1 ? 'lg:text-left lg:pl-12' : 'lg:text-right lg:pr-12'
              }`}>
                <div className={`flex items-center text-tiffany font-medium text-sm mb-2 space-x-2 ${
                  index % 2 === 1 ? 'lg:justify-start' : 'lg:justify-end'
                }`}>
                  <Calendar size={16} />
                  <span>{exp.date}</span>
                </div>
                <h3 className="text-2xl font-serif font-bold text-navy mb-1">{exp.role}</h3>
                <div className={`flex items-center text-slate font-medium space-x-2 ${
                  index % 2 === 1 ? 'lg:justify-start' : 'lg:justify-end'
                }`}>
                  <Building2 size={16} className="text-tiffany flex-shrink-0" />
                  <span>{exp.company}</span>
                </div>
              </div>

              {/* Responsibilities */}
              <div className={`w-full lg:w-[45%] pl-20 lg:pl-0 pt-2 ${
                index % 2 === 1 ? 'lg:pr-12' : 'lg:pl-12'
              }`}>
                <div className="bg-white/60 backdrop-blur-md p-6 rounded-2xl border border-white/50 shadow-xl hover:-translate-y-1 transition-all">
                  <h4 className="font-semibold text-navy mb-4">Key Responsibilities:</h4>
                  <ul className="space-y-3">
                    {exp.responsibilities.map((resp, i) => (
                      <li key={i} className="flex items-start">
                        <div className="w-1.5 h-1.5 rounded-full bg-tiffany mt-2 mr-3 shrink-0"></div>
                        <span className="text-slate text-sm leading-relaxed">{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
