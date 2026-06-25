import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Briefcase, Award, Star } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Left Content */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-tiffany/10 px-4 py-2 rounded-full w-fit border border-tiffany/20">
              <Star size={14} className="text-tiffany" />
              <span className="text-xs font-semibold text-tiffany">Administrative Manager</span>
            </div>

            {/* Heading */}
            <div className="flex flex-col gap-1">
              <h1 className="text-6xl lg:text-8xl font-extrabold text-navy font-sans tracking-tight leading-[1.05]">
                Hi, I'm <span className="text-tiffany">Lucy</span>
              </h1>
              <h2 className="text-5xl lg:text-7xl font-extrabold text-navy font-sans tracking-tight leading-[1.1]">
                Welcome to my <br />
                portfolio
              </h2>
            </div>

            {/* Summary */}
            <p className="text-lg text-slate leading-relaxed max-w-xl">
              Specializing in <strong>Executive & Administrative Support</strong>. I create highly streamlined workflows that help professionals stay organized, improve productivity, and focus on growth.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 mt-4">
              <a 
                href="#contact" 
                className="flex items-center justify-center gap-2 bg-tiffany text-white px-8 py-4 rounded-xl font-bold shadow-lg hover:-translate-y-[2px] transition-all group w-full sm:w-auto"
              >
                <span>Contact Me</span>
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="#portfolio" 
                className="flex items-center justify-center px-8 py-4 rounded-xl font-bold text-navy border-2 border-slate-200 hover:border-navy transition-all w-full sm:w-auto"
              >
                View My Work
              </a>
            </div>
          </motion.div>

          {/* Right Image/Visuals */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative lg:h-[600px] flex items-center justify-center lg:justify-end"
          >
            {/* Main Portrait Container */}
            <div className="relative w-[300px] h-[300px] lg:w-[500px] lg:h-[500px] rounded-full border border-tiffany/30 p-4">
              <div className="w-full h-full rounded-full overflow-hidden bg-slate-100 shadow-2xl">
                <img 
                  src="/profile picture 2.jpeg" 
                  alt="Lucy Paul Nwang"
                  className="w-full h-full object-cover object-top"
                />
              </div>

              {/* Floating Card - Available */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.6 }}
                className="absolute -bottom-4 right-4 lg:bottom-10 lg:right-10 bg-white shadow-xl rounded-2xl p-4 flex items-center gap-4 z-20"
              >
                <div className="bg-tiffany/10 p-2 rounded-full">
                  <Star size={20} className="text-tiffany" />
                </div>
                <div>
                  <p className="text-sm font-bold text-navy">Available</p>
                  <p className="text-xs text-slate font-medium">For Projects</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
