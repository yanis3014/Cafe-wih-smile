'use client';

import { motion } from 'framer-motion';
import Card from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';

const menuItems = [
  {
    name: 'Blue Latte',
    price: '€5.50',
    ref: 'REF-001',
    ingredients: ['Espresso', 'Blue Spirulina', 'Oat Milk', 'Vanilla'],
    image: 'https://images.unsplash.com/photo-1517487881594-2787fef5ebf7?w=800&q=80',
    size: 'large'
  },
  {
    name: 'Avo Toast',
    price: '€8.00',
    ref: 'REF-002',
    ingredients: ['Sourdough', 'Avocado', 'Feta', 'Seeds', 'Lemon'],
    image: 'https://images.unsplash.com/photo-1541519227354-08fa5d50c44d?w=800&q=80',
    size: 'medium'
  },
  {
    name: 'Cold Brew',
    price: '€4.50',
    ref: 'REF-003',
    ingredients: ['Single Origin', 'Ice', 'Filtered Water'],
    image: 'https://images.unsplash.com/photo-1517487881594-2787fef5ebf7?w=800&q=80',
    size: 'small'
  },
  {
    name: 'Matcha Bowl',
    price: '€7.00',
    ref: 'REF-004',
    ingredients: ['Ceremonial Matcha', 'Granola', 'Berries', 'Honey'],
    image: 'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?w=800&q=80',
    size: 'medium'
  },
  {
    name: 'Cortado',
    price: '€3.50',
    ref: 'REF-005',
    ingredients: ['Espresso', 'Steamed Milk'],
    image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=800&q=80',
    size: 'small'
  }
];

export default function MenuGrid() {
  return (
    <section id="menu" className="py-24 px-6 bg-concrete">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <Badge variant="electric" className="mb-4">MENU</Badge>
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-black text-raw-black">
            WHAT WE SERVE
          </h2>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {menuItems.map((item, index) => (
            <motion.div
              key={item.ref}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={
                item.size === 'large' 
                  ? 'md:col-span-2 md:row-span-2' 
                  : item.size === 'medium'
                  ? 'md:col-span-1'
                  : 'md:col-span-1'
              }
            >
              <Card className="h-full relative overflow-hidden group">
                {/* Image */}
                <div className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Content */}
                <div className="relative z-10 h-full flex flex-col justify-between min-h-[250px]">
                  <div>
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-3xl font-black text-raw-black">
                        {item.name}
                      </h3>
                      <span className="spec-text text-gray-600">{item.ref}</span>
                    </div>
                    
                    <div className="spec-text text-gray-700 mb-4">
                      INGREDIENTS:
                      <div className="mt-2 flex flex-wrap gap-2">
                        {item.ingredients.map((ing) => (
                          <span 
                            key={ing}
                            className="bg-raw-black text-stark-white px-2 py-1 text-xs"
                          >
                            {ing}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="text-4xl font-black text-electric-blue">
                    {item.price}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
