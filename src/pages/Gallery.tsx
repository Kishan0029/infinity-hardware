import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn } from 'lucide-react';

const galleryItems = [
  { id: 1, category: 'Modular Kitchens', image: '/images/gallery-1.png', title: 'Modern L-Shaped Kitchen' },
  { id: 2, category: 'Wardrobes', image: '/images/gallery-2.png', title: 'Sliding Door Wardrobe' },
  { id: 3, category: 'Furniture', image: '/images/gallery-3.png', title: 'Custom TV Unit' },
  { id: 4, category: 'Modular Kitchens', image: '/images/gallery-4.png', title: 'Island Kitchen Design' },
  { id: 5, category: 'Plywood Usage', image: '/images/gallery-5.png', title: 'Marine Plywood Application' },
  { id: 6, category: 'Wardrobes', image: 'https://images.unsplash.com/photo-1595515106969-1ce29566ff1c?auto=format&fit=crop&w=800&q=80', title: 'Walk-in Closet' },
  { id: 7, category: 'Furniture', image: 'https://images.unsplash.com/photo-1505691938895-1758d7eaa511?auto=format&fit=crop&w=800&q=80', title: 'Designer Bed Frame' },
  { id: 8, category: 'Plywood Usage', image: 'https://images.unsplash.com/photo-1510074377623-8cf13fb86c08?auto=format&fit=crop&w=800&q=80', title: 'Commercial Interior Paneling' },
  { id: 9, category: 'Modular Kitchens', image: 'https://images.unsplash.com/photo-1556912177-05041f0219f7?auto=format&fit=crop&w=800&q=80', title: 'Acrylic Finish Kitchen' },
];

const categories = ['All', 'Modular Kitchens', 'Wardrobes', 'Furniture', 'Plywood Usage'];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const filteredItems = activeCategory === 'All' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

  return (
    <div className="w-full bg-background min-h-screen">
      {/* Page Header */}
      <section className="bg-secondary py-16 text-center text-white">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">Our Gallery</h1>
            <div className="w-20 h-1.5 bg-accent mx-auto mb-6"></div>
            <p className="text-gray-300 max-w-2xl mx-auto text-lg">
              Explore our portfolio of stunning interiors created using our premium materials.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-8">
          
          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-primary text-white shadow-md'
                    : 'bg-white text-secondary hover:bg-gray-100 border border-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <motion.div 
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <AnimatePresence>
              {filteredItems.map((item) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="group relative rounded-xl overflow-hidden cursor-pointer shadow-sm hover:shadow-xl bg-white"
                  onClick={() => setSelectedImage(item.image)}
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 via-secondary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                    <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <span className="text-accent text-sm font-semibold tracking-wider uppercase mb-2 block">
                        {item.category}
                      </span>
                      <h3 className="text-white font-heading font-bold text-xl mb-2">
                        {item.title}
                      </h3>
                      <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white mt-4">
                        <ZoomIn size={20} />
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button 
              className="absolute top-6 right-6 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage(null);
              }}
            >
              <X size={24} />
            </button>
            
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              src={selectedImage}
              alt="Gallery Preview"
              className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
              referrerPolicy="no-referrer"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
