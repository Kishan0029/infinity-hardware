import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Filter, Search, Eye } from 'lucide-react';

const products = [
  { id: 1, name: 'Premium BWP Plywood', category: 'Plywood', brand: 'CenturyPly', thickness: '18mm', price: '₹120 - ₹150 / sq.ft', image: '/images/cat-1.png' },
  { id: 2, name: 'Marine Grade Plywood', category: 'Plywood', brand: 'Greenply', thickness: '19mm', price: '₹140 - ₹180 / sq.ft', image: '/images/cat-1.png' },
  { id: 3, name: 'Commercial MR Grade', category: 'Plywood', brand: 'Local', thickness: '12mm', price: '₹60 - ₹80 / sq.ft', image: '/images/cat-1.png' },
  { id: 4, name: 'High Gloss Decorative Laminate', category: 'Laminates', brand: 'Merino', thickness: '1mm', price: '₹1500 - ₹2500 / sheet', image: '/images/cat-2.png' },
  { id: 5, name: 'Matte Finish Laminate', category: 'Laminates', brand: 'Sunmica', thickness: '0.8mm', price: '₹800 - ₹1200 / sheet', image: '/images/cat-2.png' },
  { id: 6, name: 'Teak Wood Veneer', category: 'Veneers', brand: 'CenturyVeneers', thickness: '4mm', price: '₹200 - ₹400 / sq.ft', image: '/images/cat-3.png' },
  { id: 7, name: 'Soft Close Hinges', category: 'Hardware Accessories', brand: 'Hettich', thickness: 'N/A', price: '₹250 - ₹400 / pair', image: '/images/cat-5.png' },
  { id: 8, name: 'Telescopic Drawer Channels', category: 'Modular Kitchen', brand: 'Godrej', thickness: 'N/A', price: '₹400 - ₹800 / set', image: '/images/cat-6.png' },
  { id: 9, name: 'Designer Door Handles', category: 'Hardware Accessories', brand: 'Europa', thickness: 'N/A', price: '₹1200 - ₹3500 / piece', image: '/images/cat-5.png' },
];

const categories = ['All', 'Plywood', 'Laminates', 'Veneers', 'Hardware Accessories', 'Modular Kitchen'];
const brands = ['All', 'CenturyPly', 'Greenply', 'Merino', 'Sunmica', 'Hettich', 'Godrej', 'Europa', 'Local'];
const thicknesses = ['All', '0.8mm', '1mm', '4mm', '12mm', '18mm', '19mm', 'N/A'];

export default function Products() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [activeBrand, setActiveBrand] = useState('All');
  const [activeThickness, setActiveThickness] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const filteredProducts = products.filter(product => {
    const matchesCategory = activeCategory === 'All' || product.category === activeCategory;
    const matchesBrand = activeBrand === 'All' || product.brand === activeBrand;
    const matchesThickness = activeThickness === 'All' || product.thickness === activeThickness;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesCategory && matchesBrand && matchesThickness && matchesSearch;
  });

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
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">Our Products</h1>
            <div className="w-20 h-1.5 bg-accent mx-auto mb-6"></div>
            <p className="text-gray-300 max-w-2xl mx-auto text-lg">
              Browse our extensive collection of premium plywood, laminates, and hardware accessories.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col lg:flex-row gap-8">
            
            {/* Sidebar Filters - Desktop */}
            <div className="hidden lg:block w-64 shrink-0">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 sticky top-24">
                <div className="flex items-center gap-2 font-heading font-bold text-lg text-secondary mb-6 pb-4 border-b border-gray-100">
                  <Filter size={20} className="text-primary" />
                  Filters
                </div>

                {/* Search */}
                <div className="mb-8">
                  <div className="relative">
                    <input 
                      type="text" 
                      placeholder="Search products..." 
                      className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary text-sm"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <Search size={16} className="absolute left-3 top-3 text-gray-400" />
                  </div>
                </div>

                {/* Category Filter */}
                <div className="mb-8">
                  <h3 className="font-semibold text-secondary mb-4">Category</h3>
                  <div className="space-y-2">
                    {categories.map(category => (
                      <label key={category} className="flex items-center gap-3 cursor-pointer group">
                        <input 
                          type="radio" 
                          name="category" 
                          className="text-primary focus:ring-primary h-4 w-4 border-gray-300"
                          checked={activeCategory === category}
                          onChange={() => setActiveCategory(category)}
                        />
                        <span className={`text-sm group-hover:text-primary transition-colors ${activeCategory === category ? 'text-primary font-medium' : 'text-gray-600'}`}>
                          {category}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Brand Filter */}
                <div className="mb-8">
                  <h3 className="font-semibold text-secondary mb-4">Brand</h3>
                  <div className="space-y-2">
                    {brands.map(brand => (
                      <label key={brand} className="flex items-center gap-3 cursor-pointer group">
                        <input 
                          type="radio" 
                          name="brand" 
                          className="text-primary focus:ring-primary h-4 w-4 border-gray-300"
                          checked={activeBrand === brand}
                          onChange={() => setActiveBrand(brand)}
                        />
                        <span className={`text-sm group-hover:text-primary transition-colors ${activeBrand === brand ? 'text-primary font-medium' : 'text-gray-600'}`}>
                          {brand}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Thickness Filter */}
                <div>
                  <h3 className="font-semibold text-secondary mb-4">Thickness</h3>
                  <div className="flex flex-wrap gap-2">
                    {thicknesses.map(thickness => (
                      <button
                        key={thickness}
                        onClick={() => setActiveThickness(thickness)}
                        className={`px-3 py-1 text-xs rounded-full border transition-colors ${
                          activeThickness === thickness 
                            ? 'bg-primary text-white border-primary' 
                            : 'bg-white text-gray-600 border-gray-200 hover:border-primary hover:text-primary'
                        }`}
                      >
                        {thickness}
                      </button>
                    ))}
                  </div>
                </div>
                
                <button 
                  onClick={() => {
                    setActiveCategory('All');
                    setActiveBrand('All');
                    setActiveThickness('All');
                    setSearchQuery('');
                  }}
                  className="w-full mt-8 py-2 text-sm text-gray-500 hover:text-primary underline transition-colors"
                >
                  Clear All Filters
                </button>
              </div>
            </div>

            {/* Mobile Filter Toggle */}
            <div className="lg:hidden mb-6">
              <button 
                onClick={() => setIsFilterOpen(!isFilterOpen)}
                className="w-full flex items-center justify-center gap-2 bg-white border border-gray-200 py-3 rounded-lg text-secondary font-medium shadow-sm"
              >
                <Filter size={20} />
                {isFilterOpen ? 'Hide Filters' : 'Show Filters'}
              </button>
              
              <AnimatePresence>
                {isFilterOpen && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden mt-4"
                  >
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                      {/* Search */}
                      <div className="mb-6">
                        <div className="relative">
                          <input 
                            type="text" 
                            placeholder="Search products..." 
                            className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary text-sm"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                          />
                          <Search size={16} className="absolute left-3 top-3 text-gray-400" />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {/* Category Filter */}
                        <div>
                          <h3 className="font-semibold text-secondary mb-3 text-sm">Category</h3>
                          <select 
                            className="w-full p-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-primary"
                            value={activeCategory}
                            onChange={(e) => setActiveCategory(e.target.value)}
                          >
                            {categories.map(c => <option key={c} value={c}>{c}</option>)}
                          </select>
                        </div>

                        {/* Brand Filter */}
                        <div>
                          <h3 className="font-semibold text-secondary mb-3 text-sm">Brand</h3>
                          <select 
                            className="w-full p-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-primary"
                            value={activeBrand}
                            onChange={(e) => setActiveBrand(e.target.value)}
                          >
                            {brands.map(b => <option key={b} value={b}>{b}</option>)}
                          </select>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Product Grid */}
            <div className="flex-1">
              <div className="mb-6 flex justify-between items-center">
                <p className="text-gray-600">Showing <span className="font-semibold text-secondary">{filteredProducts.length}</span> products</p>
              </div>

              {filteredProducts.length === 0 ? (
                <div className="bg-white p-12 rounded-xl text-center border border-gray-100 shadow-sm">
                  <p className="text-xl text-gray-500 mb-4">No products found matching your filters.</p>
                  <button 
                    onClick={() => {
                      setActiveCategory('All');
                      setActiveBrand('All');
                      setActiveThickness('All');
                      setSearchQuery('');
                    }}
                    className="text-primary font-medium hover:underline"
                  >
                    Clear filters
                  </button>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                  {filteredProducts.map((product, index) => (
                    <motion.div
                      key={product.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.05 }}
                      className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group flex flex-col h-full"
                    >
                      <div className="relative h-48 overflow-hidden bg-gray-100">
                        <img 
                          src={product.image} 
                          alt={product.name} 
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          referrerPolicy="no-referrer"
                        />
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                          <button className="bg-white text-secondary px-4 py-2 rounded-full font-medium text-sm flex items-center gap-2 hover:bg-primary hover:text-white transition-colors transform translate-y-4 group-hover:translate-y-0 duration-300">
                            <Eye size={16} /> Quick View
                          </button>
                        </div>
                        <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded text-xs font-semibold text-primary shadow-sm">
                          {product.category}
                        </div>
                      </div>
                      
                      <div className="p-5 flex flex-col flex-grow">
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="font-heading font-bold text-lg text-secondary leading-tight group-hover:text-primary transition-colors">
                            {product.name}
                          </h3>
                        </div>
                        
                        <div className="flex flex-wrap gap-2 mb-4 mt-auto">
                          <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs font-medium">
                            Brand: {product.brand}
                          </span>
                          <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs font-medium">
                            Thick: {product.thickness}
                          </span>
                        </div>
                        
                        <div className="border-t border-gray-100 pt-4 flex justify-between items-center mt-auto">
                          <div>
                            <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Price Range</p>
                            <p className="font-bold text-primary">{product.price}</p>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>
            
          </div>
        </div>
      </section>
    </div>
  );
}
