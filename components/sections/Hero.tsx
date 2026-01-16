'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import { useLanguage } from '@/context/LanguageContext';

export default function Hero() {
  const { t } = useLanguage();
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background Placeholder - Replace with actual video */}
      <div className="absolute inset-0 bg-gradient-to-br from-concrete via-gray-300 to-gray-400">
        {/* Future: <video autoPlay loop muted className="w-full h-full object-cover" src="/coffee-pour.mp4" /> */}
        <div className="absolute inset-0 bg-raw-black/20" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl lg:text-9xl font-black leading-none mb-6">
            <span className="block text-raw-black">{t.hero.title}</span>
            <span className="block text-electric-blue">{t.hero.subtitle}</span>
          </h1>
          <p className="text-xl md:text-2xl font-technical text-raw-black mb-8 tracking-wide">
            {t.hero.tagline}
          </p>
          <Link href="/menu">
            <Button variant="primary" className="text-base">
              {t.hero.cta}
            </Button>
          </Link>
        </motion.div>
      </div>

      {/* Marquee */}
      <div className="absolute bottom-0 left-0 right-0 bg-raw-black text-stark-white py-4 overflow-hidden">
        <div className="flex whitespace-nowrap animate-marquee">
          <span className="font-technical text-sm tracking-widest px-8">
            {t.hero.marquee}
          </span>
          <span className="font-technical text-sm tracking-widest px-8">
            {t.hero.marquee}
          </span>
          <span className="font-technical text-sm tracking-widest px-8">
            {t.hero.marquee}
          </span>
          <span className="font-technical text-sm tracking-widest px-8">
            {t.hero.marquee}
          </span>
        </div>
      </div>
    </section>
  );
}
