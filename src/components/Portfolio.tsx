import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';

const portfolioItems = [
  { id: 1, title: 'Workflow Management', category: 'Administrative', image: '/WhatsApp Image 2026-06-24 at 5.07.59 PM.jpeg', details: 'Streamlined office workflows to improve efficiency and reduce turnaround times for key administrative tasks.' },
  { id: 2, title: 'Schedule Optimization', category: 'Executive Support', image: '/WhatsApp Image 2026-06-24 at 5.08.00 PM.jpeg', details: 'Managed complex executive calendars, ensuring optimal time allocation and eliminating scheduling conflicts.' },
  { id: 3, title: 'Process Improvement', category: 'Management', image: '/WhatsApp Image 2026-06-24 at 5.08.02 PM.jpeg', details: 'Evaluated existing administrative processes and implemented improvements that boosted overall productivity.' },
  { id: 4, title: 'Office Operations', category: 'Operations', image: '/WhatsApp Image 2026-06-24 at 5.08.03 PM.jpeg', details: 'Oversaw daily office operations, inventory management, and vendor communications for a smooth workplace environment.' },
  { id: 5, title: 'Client Communications', category: 'Support', image: '/WhatsApp Image 2026-06-24 at 5.08.04 PM.jpeg', details: 'Maintained professional correspondence with clients, vendors, and stakeholders to ensure timely responses.' },
  { id: 6, title: 'Records Digitization', category: 'Documentation', image: '/55.jpeg', details: 'Led a project to digitize physical records, improving document retrieval time and ensuring data security.' },
  { id: 7, title: 'Executive Calendar', category: 'Scheduling', image: '/66.jpeg', details: 'Provided comprehensive calendar and travel management for C-level executives.' },
  { id: 8, title: 'Customer Service', category: 'Support', image: '/67.jpeg', details: 'Implemented a structured inquiry tracking system that improved response times and customer satisfaction.' },
  { id: 9, title: 'Task Management', category: 'Operations', image: '/88.jpeg', details: 'Coordinated cross-functional tasks and ensured all administrative deliverables were met on time.' },
  { id: 10, title: 'Reporting', category: 'Analytics', image: '/90.jpeg', details: 'Generated monthly and quarterly administrative reports to track KPIs and operational efficiency.' },
  { id: 11, title: 'Team Coordination', category: 'Management', image: '/99.jpeg', details: 'Facilitated team meetings, prepared agendas, and tracked action items to ensure alignment.' },
  { id: 12, title: 'Event Planning', category: 'Logistics', image: '/223.jpeg', details: 'Organized corporate events, meetings, and offsites, managing all logistical and catering details.' },
  { id: 13, title: 'Resource Allocation', category: 'Operations', image: '/225.jpeg', details: 'Managed budget tracking and resource allocation for various administrative departments.' },
];

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState<typeof portfolioItems[0] | null>(null);
  const [visibleCount, setVisibleCount] = useState(6);

  const showMore = () => {
    setVisibleCount(prev => Math.min(prev + 6, portfolioItems.length));
  };

  return (
    <section id="portfolio" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-4xl font-sans font-extrabold text-navy mb-4 tracking-tight">Featured Projects</h2>
          <div className="w-20 h-1 bg-tiffany mx-auto rounded-full mb-6"></div>
          <p className="text-slate text-lg">
            A showcase of administrative initiatives that have driven efficiency, organization, and positive outcomes.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.slice(0, visibleCount).map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (index % 3) * 0.1 }}
              onClick={() => setSelectedProject(project)}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl border border-slate-100 transition-all duration-300 group cursor-pointer flex flex-col"
            >
              <div className="h-48 overflow-hidden relative">
                <div className="absolute inset-0 bg-navy/10 group-hover:bg-transparent transition-colors duration-500 z-10" />
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow bg-white">
                <span className="text-xs font-bold text-tiffany uppercase tracking-wider mb-2">{project.category}</span>
                <h3 className="text-xl font-bold text-navy">{project.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>

        {visibleCount < portfolioItems.length && (
          <div className="mt-12 flex justify-center">
            <button
              onClick={showMore}
              className="px-8 py-3 bg-white border-2 border-slate-200 text-navy font-bold rounded-xl hover:border-tiffany hover:text-tiffany transition-all"
            >
              See More Projects
            </button>
          </div>
        )}
      </div>

      {/* Modal Overlay */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-navy/80 backdrop-blur-sm p-4 md:p-8"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-3xl w-full max-w-4xl max-h-[90vh] overflow-hidden flex flex-col md:flex-row relative shadow-2xl"
            >
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-10 bg-white/80 hover:bg-white text-navy p-2 rounded-full backdrop-blur-sm transition-colors shadow-sm"
              >
                <X size={20} />
              </button>

              <div className="w-full md:w-1/2 h-64 md:h-auto bg-slate-100">
                <img 
                  src={selectedProject.image} 
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center overflow-y-auto">
                <span className="text-xs font-bold text-tiffany uppercase tracking-wider mb-3">{selectedProject.category}</span>
                <h3 className="text-3xl font-extrabold text-navy mb-4 tracking-tight">{selectedProject.title}</h3>
                <div className="w-12 h-1 bg-tiffany rounded-full mb-6"></div>
                <p className="text-slate text-lg leading-relaxed mb-8">
                  {selectedProject.details}
                </p>
                
                <div className="mt-auto pt-8 border-t border-slate-100">
                  <p className="text-sm font-semibold text-navy">Project Outcome</p>
                  <p className="text-sm text-slate mt-1">Successfully delivered and optimized according to organizational standards.</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
