'use client';

import { motion } from 'framer-motion';
import { Calendar, MapPin, Users } from 'lucide-react';
import Button from '@/components/ui/Button';
import Badge from '@/components/ui/Badge';

export default function RunClub() {
  return (
    <section id="runclub" className="py-24 px-6 bg-raw-black text-stark-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Badge variant="electric" className="mb-4">RUN CLUB</Badge>
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-black mb-6">
              CAFE WITH SMILE
              <span className="block text-electric-blue">RUN CLUB</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Join our weekly runs through the streets of Nice. Coffee before, 
              vibes during, and recovery drinks after. All levels welcome.
            </p>

            {/* Details */}
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-4">
                <Calendar className="text-electric-blue" size={24} />
                <div>
                  <p className="font-bold">Every Wednesday & Saturday</p>
                  <p className="spec-text text-gray-400">7:00 AM Start</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <MapPin className="text-electric-blue" size={24} />
                <div>
                  <p className="font-bold">Meet at the Cafe</p>
                  <p className="spec-text text-gray-400">22bis Blvd Stalingrad</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Users className="text-electric-blue" size={24} />
                <div>
                  <p className="font-bold">Strava Club</p>
                  <p className="spec-text text-gray-400">Join our community</p>
                </div>
              </div>
            </div>

            <Button variant="primary">Join the Club</Button>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="border-heavy border-electric-blue overflow-hidden aspect-square">
              <img
                src="https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=800&q=80"
                alt="Running group"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-raw-black/80 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <p className="spec-text text-electric-blue">WEEKLY RUNS</p>
                <p className="text-2xl font-black">5K - 10K ROUTES</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
