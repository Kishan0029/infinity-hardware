import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send, MessageCircle, User, MessageSquare } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', phone: '', email: '', message: '' });
      
      setTimeout(() => setSubmitStatus('idle'), 3000);
    }, 1500);
  };

  return (
    <div className="w-full bg-background min-h-screen">
      {/* Page Header */}
      <section className="relative h-[40vh] min-h-[300px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://picsum.photos/seed/contact_hardware/1920/600" 
            alt="Contact Us" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-secondary/80"></div>
        </div>
        
        <div className="container mx-auto px-4 md:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-4">
              Contact Us
            </h1>
            <div className="w-20 h-1.5 bg-accent mx-auto mb-6"></div>
            <p className="text-gray-200 max-w-2xl mx-auto text-lg">
              Get in touch with us for inquiries, quotes, or expert advice on your next project.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 relative z-10 -mt-16">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
            
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-2 space-y-6"
            >
              <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
                <span className="text-primary font-semibold tracking-wider uppercase text-sm mb-2 block">Reach Out</span>
                <h2 className="text-3xl font-heading font-bold text-secondary mb-6">We're Here to Help</h2>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  Whether you're a contractor looking for bulk supplies or a homeowner renovating your kitchen, our team is ready to assist you.
                </p>

                <div className="space-y-6">
                  <div className="flex items-start gap-4 group">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors shrink-0">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-lg text-secondary mb-1">Visit Our Showroom</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        Near 3rd Railway Gate,<br />
                        Hindu Nagar, Tilakwadi<br />
                        Belagavi, Karnataka 590006
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 group">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors shrink-0">
                      <Phone size={24} />
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-lg text-secondary mb-1">Call Us</h3>
                      <a href="tel:+919900235942" className="text-gray-600 text-sm hover:text-primary transition-colors block mb-1">
                        +91 9900235942
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 group">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors shrink-0">
                      <Mail size={24} />
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-lg text-secondary mb-1">Email Us</h3>
                      <a href="mailto:info@infinityhardware.com" className="text-gray-600 text-sm hover:text-primary transition-colors block">
                        info@infinityhardware.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 group">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors shrink-0">
                      <Clock size={24} />
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-lg text-secondary mb-1">Business Hours</h3>
                      <p className="text-gray-600 text-sm">Mon - Sat: 9:30 AM - 8:30 PM</p>
                      <p className="text-primary text-sm font-medium mt-1">Sunday: Closed</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-gray-100">
                  <a 
                    href="https://wa.me/919900235942?text=Hi%20Infinity%20Hardware%20Solutions,%20I%20would%20like%20to%20inquire%20about%20your%20products."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#128C7E] text-white px-6 py-3 rounded-xl font-medium transition-colors shadow-md shadow-[#25D366]/20"
                  >
                    <MessageCircle size={20} />
                    Chat on WhatsApp
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-3"
            >
              <div className="bg-white p-8 md:p-12 rounded-2xl shadow-xl border border-gray-100 relative h-full">
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary via-accent to-primary"></div>
                
                <h3 className="text-2xl md:text-3xl font-heading font-bold text-secondary mb-2">Send Us a Message</h3>
                <p className="text-gray-500 mb-8">Fill out the form below and we'll get back to you as soon as possible.</p>
                
                {submitStatus === 'success' ? (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-green-50 border border-green-200 text-green-700 p-8 rounded-xl text-center h-full flex flex-col items-center justify-center min-h-[400px]"
                  >
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 text-green-600">
                      <Send size={40} />
                    </div>
                    <h4 className="text-2xl font-bold mb-3">Message Sent Successfully!</h4>
                    <p className="text-lg">Thank you for contacting Infinity Hardware Solutions. We will get back to you shortly.</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="relative">
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                        <div className="relative">
                          <input
                            type="text"
                            id="name"
                            name="name"
                            required
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all bg-gray-50 focus:bg-white"
                            placeholder="John Doe"
                          />
                          <User size={18} className="absolute left-4 top-3.5 text-gray-400" />
                        </div>
                      </div>
                      
                      <div className="relative">
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
                        <div className="relative">
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            required
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all bg-gray-50 focus:bg-white"
                            placeholder="+91 98765 43210"
                          />
                          <Phone size={18} className="absolute left-4 top-3.5 text-gray-400" />
                        </div>
                      </div>
                    </div>
                    
                    <div className="relative">
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                      <div className="relative">
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all bg-gray-50 focus:bg-white"
                          placeholder="john@example.com"
                        />
                        <Mail size={18} className="absolute left-4 top-3.5 text-gray-400" />
                      </div>
                    </div>
                    
                    <div className="relative">
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Your Message *</label>
                      <div className="relative">
                        <textarea
                          id="message"
                          name="message"
                          required
                          rows={5}
                          value={formData.message}
                          onChange={handleChange}
                          className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all bg-gray-50 focus:bg-white resize-none"
                          placeholder="Tell us about your project requirements..."
                        ></textarea>
                        <MessageSquare size={18} className="absolute left-4 top-3.5 text-gray-400" />
                      </div>
                    </div>
                    
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`w-full bg-primary hover:bg-primary-dark text-white font-medium py-4 rounded-xl transition-all flex items-center justify-center gap-2 shadow-lg shadow-primary/20 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:-translate-y-1'}`}
                    >
                      {isSubmitting ? (
                        <span className="inline-block w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                      ) : (
                        <>
                          <Send size={20} />
                          Send Message
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-[500px] w-full relative bg-gray-200 mt-10">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3838.455487779774!2d74.5097424153582!3d15.83265888902781!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbf669f5095362f%3A0x7e34b315cdef0770!2sTilakwadi%2C%20Belagavi%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1645432109876!5m2!1sen!2sin" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen={true} 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          title="Infinity Hardware Solutions Location"
          className="absolute inset-0 grayscale contrast-125 opacity-90 hover:grayscale-0 hover:opacity-100 transition-all duration-700"
        ></iframe>
        
        <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_40px_rgba(0,0,0,0.1)]"></div>
        
        {/* Floating Map Card */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 md:left-8 md:translate-x-0 bg-white p-6 rounded-xl shadow-2xl border border-gray-100 max-w-sm w-[calc(100%-2rem)] z-10">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary shrink-0">
              <MapPin size={20} />
            </div>
            <h3 className="font-heading font-bold text-lg text-secondary">Our Location</h3>
          </div>
          <p className="text-gray-600 text-sm ml-13">
            Near 3rd Railway Gate, Hindu Nagar, Tilakwadi, Belagavi, Karnataka 590006
          </p>
          <a 
            href="https://goo.gl/maps/123456789" 
            target="_blank" 
            rel="noopener noreferrer"
            className="mt-4 ml-13 inline-block text-primary font-medium text-sm hover:underline"
          >
            Get Directions &rarr;
          </a>
        </div>
      </section>
    </div>
  );
}
