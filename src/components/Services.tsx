import React from 'react';
import { motion } from 'motion/react';
import { 
  Briefcase, 
  CalendarDays, 
  Mail, 
  Users, 
  Database, 
  Building, 
  Laptop, 
  FileText, 
  Clock 
} from 'lucide-react';

const services = [
  {
    icon: <Briefcase className="w-6 h-6" />,
    title: "Administrative Support",
    description: "Professional administrative assistance for organizations and executives."
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Executive Assistance",
    description: "Managing executive schedules, priorities, and administrative tasks."
  },
  {
    icon: <CalendarDays className="w-6 h-6" />,
    title: "Calendar & Appointments",
    description: "Scheduling meetings, appointments, and events efficiently."
  },
  {
    icon: <Mail className="w-6 h-6" />,
    title: "Email Management",
    description: "Inbox organization, correspondence management, and follow-ups."
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Customer Support",
    description: "Professional communication and client relationship management."
  },
  {
    icon: <Database className="w-6 h-6" />,
    title: "Data Entry & Records",
    description: "Accurate data recording, organization, and reporting."
  },
  {
    icon: <Building className="w-6 h-6" />,
    title: "Office Operations",
    description: "Supporting efficient day-to-day office activities."
  },
  {
    icon: <Laptop className="w-6 h-6" />,
    title: "Virtual Assistance",
    description: "Remote administrative and operational support."
  },
  {
    icon: <FileText className="w-6 h-6" />,
    title: "Document Preparation",
    description: "Creating professional reports, records, and documentation."
  },
  {
    icon: <Clock className="w-6 h-6" />,
    title: "Meeting Coordination",
    description: "Organizing meetings, agendas, and follow-up activities."
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-4xl font-serif font-bold text-navy mb-4">My Services</h2>
          <div className="w-20 h-1 bg-tiffany mx-auto rounded-full mb-6"></div>
          <p className="text-slate text-lg">
            Comprehensive administrative solutions designed to streamline your operations and elevate your professional presence.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="bg-white/60 backdrop-blur-md p-6 rounded-2xl shadow-xl hover:-translate-y-1 border border-white/50 transition-all group"
            >
              <div className="w-12 h-12 bg-tiffany-light text-tiffany rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-tiffany group-hover:text-white transition-all duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-navy mb-3">{service.title}</h3>
              <p className="text-slate text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
