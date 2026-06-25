import React from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-4xl font-serif font-bold text-navy mb-4">Let's Work Together</h2>
          <div className="w-20 h-1 bg-tiffany mx-auto rounded-full mb-6"></div>
          <p className="text-slate text-lg">
            Ready to streamline your administrative processes? I'm currently available for new opportunities.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-8 bg-white/60 backdrop-blur-md rounded-3xl shadow-2xl overflow-hidden border border-white/50">
          
          {/* Contact Information */}
          <div className="lg:col-span-2 bg-navy p-10 text-white flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-tiffany opacity-10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
            
            <div className="relative z-10">
              <h3 className="text-2xl font-serif font-bold mb-8">Contact Information</h3>
              
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="text-tiffany w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 mb-1">Email</p>
                    <a href="mailto:lucypaulnwang@gmail.com" className="text-base sm:text-lg font-medium hover:text-tiffany transition-colors break-all">
                      lucypaulnwang@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="text-tiffany w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 mb-1">Phone</p>
                    <a href="tel:+2348065568655" className="text-lg font-medium hover:text-tiffany transition-colors block">
                      +234 806 556 8655
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg viewBox="0 0 24 24" className="w-5 h-5 text-green-400 fill-current" xmlns="http://www.w3.org/2000/svg">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 mb-1">WhatsApp</p>
                    <a href="https://wa.me/2349082823422" target="_blank" rel="noopener noreferrer" className="text-lg font-medium hover:text-green-400 transition-colors block">
                      +234 908 282 3422
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-tiffany w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 mb-1">Location</p>
                    <p className="text-lg font-medium">
                      Abuja FCT, Nigeria
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decoration */}
            <div className="mt-12 opacity-50 relative z-10">
              <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="50" cy="50" r="49.5" stroke="currentColor" strokeOpacity="0.2"/>
                <circle cx="50" cy="50" r="39.5" stroke="currentColor" strokeOpacity="0.2"/>
                <circle cx="50" cy="50" r="29.5" stroke="currentColor" strokeOpacity="0.2"/>
              </svg>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3 p-10 lg:p-12">
            <h3 className="text-2xl font-serif font-bold text-navy mb-8">Send a Message</h3>
            
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-navy">Full Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-tiffany focus:border-transparent transition-all bg-white/50 backdrop-blur-sm focus:bg-white/80 shadow-sm"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-navy">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-tiffany focus:border-transparent transition-all bg-white/50 backdrop-blur-sm focus:bg-white/80 shadow-sm"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-navy">Message</label>
                <textarea 
                  id="message" 
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-tiffany focus:border-transparent transition-all bg-white/50 backdrop-blur-sm focus:bg-white/80 shadow-sm resize-none"
                  placeholder="How can I help you?"
                ></textarea>
              </div>

              <button 
                type="submit"
                className="inline-flex items-center justify-center space-x-2 bg-navy hover:bg-navy/90 text-white px-8 py-4 rounded-xl font-medium transition-all w-full md:w-auto shadow-md"
              >
                <span>Send Message</span>
                <Send size={18} />
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
