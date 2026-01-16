'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Leaf, Flame, Coffee } from 'lucide-react';

// Menu Data Structure
const MENU_ITEMS = [
  // HOT DRINKS
  {
    id: 1,
    name: 'Blue Latte',
    category: 'Hot',
    price: '5.50',
    description: 'Our signature drink with blue spirulina and vanilla',
    ingredients: ['Espresso', 'Blue Spirulina', 'Oat Milk', 'Vanilla'],
    image: 'https://images.unsplash.com/photo-1517487881594-2787fef5ebf7?w=800&q=80',
    tags: ['signature', 'vegan'],
  },
  {
    id: 2,
    name: 'Charcoal Latte',
    category: 'Hot',
    price: '5.00',
    description: 'Activated charcoal for a detoxifying coffee experience',
    ingredients: ['Espresso', 'Activated Charcoal', 'Oat Milk', 'Honey'],
    image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=800&q=80',
    tags: ['signature'],
  },
  {
    id: 3,
    name: 'Cortado',
    category: 'Hot',
    price: '3.50',
    description: 'Classic espresso with steamed milk',
    ingredients: ['Espresso', 'Steamed Milk'],
    image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=800&q=80',
    tags: [],
  },
  {
    id: 4,
    name: 'Flat White',
    category: 'Hot',
    price: '4.00',
    description: 'Velvety microfoam with double ristretto',
    ingredients: ['Double Ristretto', 'Microfoam Milk'],
    image: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=800&q=80',
    tags: [],
  },
  {
    id: 5,
    name: 'Matcha Latte',
    category: 'Hot',
    price: '4.50',
    description: 'Ceremonial grade matcha from Japan',
    ingredients: ['Ceremonial Matcha', 'Oat Milk', 'Agave'],
    image: 'https://images.unsplash.com/photo-1536013266905-d5d7b59a5309?w=800&q=80',
    tags: ['vegan'],
  },

  // ICED DRINKS
  {
    id: 6,
    name: 'Cold Brew',
    category: 'Iced',
    price: '4.50',
    description: 'Single origin, 24-hour cold extraction',
    ingredients: ['Single Origin Coffee', 'Filtered Water', 'Ice'],
    image: 'https://images.unsplash.com/photo-1517487881594-2787fef5ebf7?w=800&q=80',
    tags: ['vegan'],
  },
  {
    id: 7,
    name: 'Iced Blue Latte',
    category: 'Iced',
    price: '5.50',
    description: 'Our signature blue latte served over ice',
    ingredients: ['Espresso', 'Blue Spirulina', 'Oat Milk', 'Vanilla', 'Ice'],
    image: 'https://images.unsplash.com/photo-1546173159-315724a31696?w=800&q=80',
    tags: ['signature', 'vegan'],
  },
  {
    id: 8,
    name: 'Iced Matcha',
    category: 'Iced',
    price: '4.50',
    description: 'Refreshing iced matcha with oat milk',
    ingredients: ['Ceremonial Matcha', 'Oat Milk', 'Agave', 'Ice'],
    image: 'https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?w=800&q=80',
    tags: ['vegan'],
  },
  {
    id: 9,
    name: 'Nitro Cold Brew',
    category: 'Iced',
    price: '5.00',
    description: 'Nitrogen-infused cold brew with cascading bubbles',
    ingredients: ['Cold Brew', 'Nitrogen', 'Ice'],
    image: 'https://images.unsplash.com/photo-1517487881594-2787fef5ebf7?w=800&q=80',
    tags: ['vegan'],
  },

  // FOOD
  {
    id: 10,
    name: 'Avo Toast',
    category: 'Food',
    price: '8.00',
    description: 'Smashed avocado on sourdough with feta and seeds',
    ingredients: ['Sourdough', 'Avocado', 'Feta', 'Seeds', 'Lemon', 'Chili Flakes'],
    image: 'https://images.unsplash.com/photo-1541519227354-08fa5d50c44d?w=800&q=80',
    tags: ['spicy'],
  },
  {
    id: 11,
    name: 'Grilled Cheese',
    category: 'Food',
    price: '7.00',
    description: 'Triple cheese blend on sourdough, grilled to perfection',
    ingredients: ['Sourdough', 'Cheddar', 'Gruyère', 'Mozzarella', 'Butter'],
    image: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=800&q=80',
    tags: [],
  },
  {
    id: 12,
    name: 'Banana Bread',
    category: 'Food',
    price: '4.50',
    description: 'House-made with walnuts and dark chocolate chips',
    ingredients: ['Banana', 'Walnuts', 'Dark Chocolate', 'Cinnamon'],
    image: 'https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?w=800&q=80',
    tags: ['vegan'],
  },
  {
    id: 13,
    name: 'Acai Bowl',
    category: 'Food',
    price: '9.00',
    description: 'Acai base topped with granola, berries, and honey',
    ingredients: ['Acai', 'Granola', 'Strawberries', 'Blueberries', 'Banana', 'Honey'],
    image: 'https://images.unsplash.com/photo-1590301157890-4810ed352733?w=800&q=80',
    tags: [],
  },

  // SWEETS
  {
    id: 14,
    name: 'Croissant',
    category: 'Sweets',
    price: '3.50',
    description: 'Buttery French croissant, baked daily',
    ingredients: ['Butter', 'Flour', 'Yeast', 'Sugar'],
    image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=800&q=80',
    tags: [],
  },
  {
    id: 15,
    name: 'Chocolate Brownie',
    category: 'Sweets',
    price: '4.00',
    description: 'Fudgy brownie with sea salt',
    ingredients: ['Dark Chocolate', 'Butter', 'Eggs', 'Sea Salt'],
    image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=800&q=80',
    tags: [],
  },
  {
    id: 16,
    name: 'Cinnamon Roll',
    category: 'Sweets',
    price: '4.50',
    description: 'Warm cinnamon roll with cream cheese frosting',
    ingredients: ['Cinnamon', 'Brown Sugar', 'Cream Cheese', 'Vanilla'],
    image: 'https://images.unsplash.com/photo-1626094309830-abbb0c99da4a?w=800&q=80',
    tags: [],
  },
  {
    id: 17,
    name: 'Matcha Cookie',
    category: 'Sweets',
    price: '3.00',
    description: 'Chewy matcha cookie with white chocolate chips',
    ingredients: ['Matcha Powder', 'White Chocolate', 'Butter', 'Sugar'],
    image: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=800&q=80',
    tags: [],
  },
];

type Category = 'All' | 'Hot' | 'Iced' | 'Food' | 'Sweets';

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState<Category>('All');

  const categories: Category[] = ['All', 'Hot', 'Iced', 'Food', 'Sweets'];

  const filteredItems = activeCategory === 'All' 
    ? MENU_ITEMS 
    : MENU_ITEMS.filter(item => item.category === activeCategory);

  return (
    <div className="min-h-screen bg-concrete pt-32 pb-16">
      {/* Page Title */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 mb-8">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-center mb-6">
          FULL <span className="text-electric-blue">SPEC SHEET</span>
        </h1>
        
        {/* Category Filter */}
        <div className="flex gap-3 overflow-x-auto pb-2">
          {categories.map((category) => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory(category)}
              className={`pill px-6 py-2 font-bold uppercase text-sm tracking-wider border-2 border-raw-black whitespace-nowrap transition-all ${
                activeCategory === category
                  ? 'bg-electric-blue text-stark-white'
                  : 'bg-stark-white text-raw-black hover:bg-gray-100'
              }`}
            >
              {category}
            </motion.button>
          ))}
        </div>
      </div>

      {/* Menu Grid */}
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                whileHover={{ y: -4, boxShadow: 'none' }}
                className="bg-stark-white border-2 border-raw-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all cursor-pointer group"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden border-b-2 border-raw-black">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {/* Tags Overlay */}
                  <div className="absolute top-3 left-3 flex gap-2">
                    {item.tags.includes('signature') && (
                      <span className="bg-electric-blue text-stark-white px-2 py-1 text-xs font-bold border border-raw-black">
                        SIGNATURE
                      </span>
                    )}
                  </div>
                  {/* Icons Overlay */}
                  <div className="absolute top-3 right-3 flex gap-2">
                    {item.tags.includes('vegan') && (
                      <div className="bg-stark-white border border-raw-black p-1.5">
                        <Leaf size={16} className="text-green-600" />
                      </div>
                    )}
                    {item.tags.includes('spicy') && (
                      <div className="bg-stark-white border border-raw-black p-1.5">
                        <Flame size={16} className="text-red-600" />
                      </div>
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  {/* Header */}
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-black text-raw-black leading-tight">
                      {item.name}
                    </h3>
                    <span className="font-technical text-lg font-bold text-electric-blue ml-2">
                      €{item.price}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-gray-700 mb-4 leading-relaxed">
                    {item.description}
                  </p>

                  {/* Ingredients */}
                  {item.ingredients && (
                    <div className="border-t-2 border-gray-200 pt-3">
                      <p className="spec-text text-gray-600 mb-2">INGREDIENTS:</p>
                      <div className="flex flex-wrap gap-1.5">
                        {item.ingredients.map((ingredient, idx) => (
                          <span
                            key={idx}
                            className="bg-concrete text-raw-black px-2 py-1 text-xs font-technical border border-gray-300"
                          >
                            {ingredient}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Reference Number */}
                  <div className="mt-4 pt-3 border-t-2 border-gray-200">
                    <p className="spec-text text-gray-500">
                      REF-{String(item.id).padStart(3, '0')}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Footer Note */}
        <div className="mt-12 text-center border-t-4 border-raw-black pt-8">
          <p className="font-technical text-sm text-gray-600 uppercase tracking-wider">
            Kitchen closes at 16:00 // All prices in EUR
          </p>
          <div className="mt-4 flex items-center justify-center gap-2 text-gray-500">
            <Coffee size={20} className="text-electric-blue" />
            <span className="font-technical text-xs">MADE WITH LOVE IN NICE</span>
          </div>
        </div>
      </div>
    </div>
  );
}
