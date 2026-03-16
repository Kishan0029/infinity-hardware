import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, Layers, Truck, Users, Star, Quote } from 'lucide-react';

const categories = [
  { name: 'Plywood', image: '/images/cat-1.png', desc: 'BWP, MR, and Marine Grade' },
  { name: 'Laminates', image: '/images/cat-2.png', desc: 'Decorative & Textured' },
  { name: 'Veneers', image: '/images/cat-3.png', desc: 'Natural & Reconstituted' },
  { name: 'Flooring', image: '/images/cat-4.png', desc: 'Wooden & Vinyl Planks' },
  { name: 'Hardware Accessories', image: '/images/cat-5.png', desc: 'Hinges, Handles & Locks' },
  { name: 'Modular Kitchen Materials', image: '/images/cat-6.png', desc: 'Baskets, Channels & Profiles' },
];

const features = [
  { icon: <ShieldCheck size={32} />, title: 'Premium Quality Materials', desc: 'We source only the best materials from top brands.' },
  { icon: <Layers size={32} />, title: 'Wide Range of Products', desc: 'Everything you need for your interior projects under one roof.' },
  { icon: <Users size={32} />, title: 'Trusted by Contractors', desc: 'The preferred choice for Belgaum\'s top builders and designers.' },
  { icon: <Star size={32} />, title: 'Competitive Pricing', desc: 'Wholesale rates for premium quality products.' },
  { icon: <Quote size={32} />, title: 'Expert Guidance', desc: 'Professional advice to help you choose the right materials.' },
  { icon: <Truck size={32} />, title: 'Fast Delivery', desc: 'Prompt and safe delivery across Belgaum and surrounding areas.' },
];

const reviews = [
  { name: 'Rahul Deshpande', role: 'Interior Designer', text: 'Infinity Hardware has been my go-to supplier for the last 3 years. Their laminate collection is unmatched in Belgaum, and the service is always prompt.', rating: 5 },
  { name: 'Sneha Patil', role: 'Homeowner', text: 'We bought all the plywood and hardware for our new home from here. The owner guided us perfectly on where to use BWP vs MR grade. Highly recommended!', rating: 5 },
  { name: 'Amit Kulkarni', role: 'Contractor', text: 'Best wholesale rates for bulk orders. The quality of marine plywood is genuine, and delivery is always on time which keeps my projects on schedule.', rating: 5 },
];

const galleryImages = [
  '/images/gallery-1.png',
  '/images/gallery-2.png',
  '/images/gallery-3.png',
  '/images/gallery-4.png',
];

export default function Home() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-[85vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/Hero.png"
            alt="Infinity Hardware Solutions Showroom"
            className="w-full h-full object-cover scale-130 object-right"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-secondary/40 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-secondary/60 via-secondary/30 to-transparent"></div>
        </div>

        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-block py-1 px-3 rounded bg-accent/20 text-accent font-semibold tracking-wider text-sm uppercase mb-6 border border-accent/30">
                Welcome to Infinity
              </span>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-white leading-tight mb-6">
                Premium Hardware & <span className="text-accent">Plywood Solutions</span> in Belgaum
              </h1>
              <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl leading-relaxed">
                Your trusted destination for plywood, laminates, veneers, and hardware materials for homes, offices, and commercial interiors.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/products" className="bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded font-medium text-lg transition-all flex items-center justify-center gap-2 group shadow-lg shadow-primary/30">
                  Explore Products
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link to="/contact" className="bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 text-white px-8 py-4 rounded font-medium text-lg transition-all flex items-center justify-center text-center">
                  Contact Us
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-secondary mb-6">
                Building Belgaum's Finest Interiors
              </h2>
              <div className="w-20 h-1.5 bg-accent mb-8"></div>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                <strong className="text-primary font-semibold">Infinity Hardware Solutions</strong> is a trusted hardware and plywood supplier in Tilakwadi, Belgaum offering premium quality materials for modular kitchens, wardrobes, furniture, and interior projects.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                With years of experience in the industry, we understand the specific needs of contractors, interior designers, and homeowners. We pride ourselves on offering genuine products, transparent pricing, and expert guidance to ensure your project's success.
              </p>

              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="border-l-4 border-primary pl-4">
                  <h4 className="text-3xl font-heading font-bold text-secondary mb-1">10+</h4>
                  <p className="text-sm text-gray-500 font-medium uppercase tracking-wider">Years Experience</p>
                </div>
                <div className="border-l-4 border-accent pl-4">
                  <h4 className="text-3xl font-heading font-bold text-secondary mb-1">5000+</h4>
                  <p className="text-sm text-gray-500 font-medium uppercase tracking-wider">Happy Customers</p>
                </div>
              </div>

              <Link to="/about" className="inline-flex items-center gap-2 text-primary font-semibold hover:text-primary-dark transition-colors group">
                Read Our Story
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-accent/20 rounded-xl transform rotate-3"></div>
              <img
                src="/images/about-us.png"
                alt="Plywood Stack"
                className="relative rounded-xl shadow-2xl w-full object-cover aspect-[4/3]"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-lg shadow-xl max-w-xs hidden md:block border-t-4 border-primary">
                <p className="font-heading font-bold text-secondary text-lg mb-2">Premium Quality</p>
                <p className="text-sm text-gray-600">Sourced directly from top manufacturers ensuring durability and finish.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-primary font-semibold tracking-wider uppercase text-sm mb-2 block">Our Offerings</span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-secondary mb-6">Explore Our Product Categories</h2>
            <div className="w-20 h-1.5 bg-accent mx-auto mb-6"></div>
            <p className="text-gray-600">Discover our comprehensive range of materials designed to bring your interior visions to life.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 bg-background border border-gray-100"
              >
                <div className="relative h-64 overflow-hidden">
                  <div className="absolute inset-0 bg-secondary/20 group-hover:bg-transparent transition-colors z-10"></div>
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-6 relative">
                  <div className="absolute -top-6 right-6 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center shadow-lg transform group-hover:rotate-12 transition-transform">
                    <ArrowRight size={20} />
                  </div>
                  <h3 className="text-xl font-heading font-bold text-secondary mb-2 group-hover:text-primary transition-colors">{category.name}</h3>
                  <p className="text-gray-600 text-sm">{category.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/products" className="inline-block border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-3 rounded font-medium transition-colors">
              View All Products
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-secondary text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/wood-pattern.png")' }}></div>
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-accent font-semibold tracking-wider uppercase text-sm mb-2 block">The Infinity Advantage</span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">Why Choose Us?</h2>
            <div className="w-20 h-1.5 bg-primary mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex gap-4"
              >
                <div className="shrink-0 w-16 h-16 rounded-full bg-white/10 flex items-center justify-center text-accent border border-white/20">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-xl font-heading font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{feature.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Reviews */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-primary font-semibold tracking-wider uppercase text-sm mb-2 block">Testimonials</span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-secondary mb-6">What Our Clients Say</h2>
            <div className="w-20 h-1.5 bg-accent mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 relative"
              >
                <Quote className="absolute top-6 right-6 text-gray-100" size={64} />
                <div className="flex gap-1 text-accent mb-6 relative z-10">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} size={18} fill="currentColor" />
                  ))}
                </div>
                <p className="text-gray-600 mb-8 relative z-10 italic">"{review.text}"</p>
                <div className="flex items-center gap-4 relative z-10">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold font-heading">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-secondary">{review.name}</h4>
                    <p className="text-xs text-gray-500 uppercase tracking-wider">{review.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div className="max-w-2xl">
              <span className="text-primary font-semibold tracking-wider uppercase text-sm mb-2 block">Inspiration</span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-secondary mb-6">Projects Using Our Materials</h2>
              <div className="w-20 h-1.5 bg-accent"></div>
            </div>
            <Link to="/gallery" className="flex items-center gap-2 text-primary font-semibold hover:text-primary-dark transition-colors">
              View Full Gallery <ArrowRight size={18} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {galleryImages.map((img, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`rounded-lg overflow-hidden group ${index === 0 ? 'md:col-span-2 md:row-span-2' : ''}`}
              >
                <img
                  src={img}
                  alt={`Gallery Image ${index + 1}`}
                  className="w-full h-full object-cover aspect-square md:aspect-auto group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/wood-pattern.png")' }}></div>
        <div className="absolute right-0 bottom-0 opacity-20 transform translate-x-1/4 translate-y-1/4">
          <div className="w-96 h-96 rounded-full border-[40px] border-white/20"></div>
        </div>

        <div className="container mx-auto px-4 md:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-6 max-w-4xl mx-auto leading-tight">
              Looking for the best plywood and hardware store in Belgaum?
            </h2>
            <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
              Visit our showroom in Tilakwadi or contact us today for the best quotes on premium materials.
            </p>
            <Link to="/contact" className="inline-block bg-accent hover:bg-accent-light text-secondary px-10 py-4 rounded font-bold text-lg transition-colors shadow-xl">
              Get a Quote Today
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
