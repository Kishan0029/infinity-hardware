import { motion } from 'framer-motion';
import { CheckCircle2, Award, Users, Clock } from 'lucide-react';

export default function About() {
  return (
    <div className="w-full">
      {/* Page Header */}
      <section className="relative h-[40vh] min-h-[300px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/Hero.png" 
            alt="About Us" 
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
              About Us
            </h1>
            <div className="w-20 h-1.5 bg-accent mx-auto"></div>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-primary font-semibold tracking-wider uppercase text-sm mb-2 block">Our Story</span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-secondary mb-6">
                Belgaum's Most Trusted Hardware & Plywood Destination
              </h2>
              <div className="w-20 h-1.5 bg-accent mb-8"></div>
              
              <div className="space-y-6 text-gray-700 leading-relaxed text-lg">
                <p>
                  Located in the heart of Tilakwadi, Belgaum, <strong className="text-primary font-semibold">Infinity Hardware Solutions</strong> has established itself as the premier destination for high-quality plywood, hardware, and interior materials.
                </p>
                <p>
                  Our journey began with a simple mission: to provide contractors, interior designers, and homeowners with genuine, durable materials at competitive prices. Over the years, we have built strong relationships with top manufacturers, allowing us to offer an extensive range of products that meet the highest industry standards.
                </p>
                <p>
                  Whether you are building a new home, renovating an office, or designing a modular kitchen, our expert team is dedicated to guiding you through the selection process, ensuring you find the perfect materials for your specific needs.
                </p>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="grid grid-cols-2 gap-4"
            >
              <img 
                src="/images/about-us.png" 
                alt="Our Showroom" 
                className="w-full h-full object-cover rounded-lg shadow-md mt-8"
                referrerPolicy="no-referrer"
              />
              <img 
                src="/images/gallery-5.png" 
                alt="Premium Materials" 
                className="w-full h-full object-cover rounded-lg shadow-md mb-8"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-primary font-semibold tracking-wider uppercase text-sm mb-2 block">Our Core Values</span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-secondary mb-6">What Drives Us Forward</h2>
            <div className="w-20 h-1.5 bg-accent mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <Award size={40} />, title: "Uncompromising Quality", desc: "We never compromise on the quality of our materials, ensuring longevity for your projects." },
              { icon: <Users size={40} />, title: "Customer First", desc: "Your satisfaction is our priority. We provide personalized service to every client." },
              { icon: <CheckCircle2 size={40} />, title: "Transparency", desc: "Honest pricing and genuine product information, always." },
              { icon: <Clock size={40} />, title: "Reliability", desc: "Timely deliveries and consistent stock availability to keep your projects on track." }
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-background p-8 rounded-xl border border-gray-100 text-center hover:shadow-lg transition-shadow"
              >
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 text-primary mb-6">
                  {value.icon}
                </div>
                <h3 className="text-xl font-heading font-bold text-secondary mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
