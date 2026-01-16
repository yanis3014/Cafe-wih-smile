'use client';

import { motion } from 'framer-motion';
import { Clock } from 'lucide-react';
import Button from '@/components/ui/Button';
import Badge from '@/components/ui/Badge';

export default function MerchDrops() {
  return (
    <section id="merch" className="py-24 px-6 bg-stark-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Product Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="border-heavy bg-concrete p-12 relative">
              <img
                src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&q=80"
                alt="CAFE WITH SMILE T-Shirt"
                className="w-full h-auto"
              />
              <div className="absolute top-6 right-6">
                <Badge variant="electric">LIMITED</Badge>
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="mb-4">
              <span className="spec-text text-gray-600">DROP 001</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-black text-raw-black mb-6">
              MERCH
              <span className="block text-electric-blue">DROPS</span>
            </h2>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              Limited edition streetwear. Designed in Nice. 
              Only 50 pieces per drop. Once they&apos;re gone, they&apos;re gone.
            </p>

            {/* Product Details */}
            <div className="border-brutalist p-6 mb-8 bg-concrete">
              <h3 className="text-2xl font-black mb-4">SMILE TEE - BLACK</h3>
              <div className="spec-text text-gray-700 space-y-2">
                <p>• 100% ORGANIC COTTON</p>
                <p>• OVERSIZED FIT</p>
                <p>• SCREEN PRINTED LOGO</p>
                <p>• SIZES: S - XXL</p>
              </div>
              <div className="mt-6 flex items-baseline gap-4">
                <span className="text-4xl font-black text-electric-blue">€45</span>
                <span className="spec-text text-gray-600">50 UNITS ONLY</span>
              </div>
            </div>

            {/* Countdown (Static UI) */}
            <div className="flex items-center gap-4 mb-6 spec-text">
              <Clock className="text-electric-blue" size={20} />
              <span className="text-raw-black">DROPS IN: 3D 12H 45M</span>
            </div>

            <Button variant="primary">Notify Me</Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
