'use client';

import { motion } from 'framer-motion';
import { MapPin, Clock, Navigation } from 'lucide-react';
import Button from '@/components/ui/Button';
import Badge from '@/components/ui/Badge';

export default function Location() {
  return (
    <section id="location" className="py-24 px-6 bg-concrete">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <Badge variant="electric" className="mb-4">LOCATION</Badge>
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-black text-raw-black">
            FIND US
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Map Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative border-heavy overflow-hidden aspect-square lg:aspect-auto lg:h-full"
          >
            <img
              src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&q=80"
              alt="Nice, France"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-raw-black/40" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="text-electric-blue mx-auto mb-4" size={64} />
                <p className="text-stark-white text-2xl font-black">
                  22BIS BOULEVARD STALINGRAD
                </p>
                <p className="text-electric-blue spec-text mt-2">NICE, FRANCE</p>
              </div>
            </div>
          </motion.div>

          {/* Details */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center"
          >
            <div className="border-heavy bg-stark-white p-8 mb-6">
              <h3 className="text-3xl font-black mb-6 text-raw-black">ADDRESS</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <MapPin className="text-electric-blue mt-1" size={24} />
                  <div>
                    <p className="font-bold text-lg">22bis Boulevard Stalingrad</p>
                    <p className="text-gray-600">Nice, 06000</p>
                    <p className="text-gray-600">France</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-heavy bg-stark-white p-8 mb-6">
              <h3 className="text-3xl font-black mb-6 text-raw-black">HOURS</h3>
              <div className="flex items-start gap-4">
                <Clock className="text-electric-blue mt-1" size={24} />
                <div className="spec-text">
                  <p className="text-raw-black mb-2">MONDAY - SATURDAY</p>
                  <p className="text-2xl font-black text-electric-blue ">8:30 - 17:30</p>
                  <p className="text-raw-black mb-2 "> SUNDAY</p>
                  <p className="text-2xl font-black text-electric-blue">9:30 - 17:30</p>
                </div>
              </div>
            </div>

            <Button variant="primary" className="w-full lg:w-auto">
              <Navigation className="inline mr-2" size={18} />
              Get Directions
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
