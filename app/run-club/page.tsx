"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Coffee, MapPin, Gauge, Package, ExternalLink } from "lucide-react";
import { useLanguage } from '@/context/LanguageContext';

export default function RunClubPage() {
  const { t } = useLanguage();
  return (
    <div className="min-h-screen bg-[#111] text-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1552674605-db6ffd4facb5?q=80&w=2070&auto=format&fit=crop"
            alt="Runners in action"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/70" />
        </div>

        {/* Hero Content */}
        <motion.div
          className="relative z-10 text-center px-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="text-5xl md:text-7xl lg:text-9xl font-black italic tracking-tight mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            {t.runClubPage.title}
            <br />
            {t.runClubPage.subtitle}
          </motion.h1>
          
          <motion.div
            className="text-xl md:text-2xl font-light tracking-widest space-y-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <p className="text-orange-400">{t.runClubPage.schedule}</p>
            <p className="text-white/80">{t.runClubPage.time}</p>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
        >
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2">
            <div className="w-1 h-2 bg-white/50 rounded-full" />
          </div>
        </motion.div>
      </section>

      {/* The Manifest - Info Grid */}
      <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
        <motion.h2
          className="text-3xl md:text-4xl lg:text-5xl font-black italic mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {t.runClubPage.manifest}
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: MapPin,
              title: t.runClubPage.meetingPoint,
              value: t.runClubPage.address,
              delay: 0.1,
            },
            {
              icon: Gauge,
              title: t.runClubPage.distance,
              value: t.runClubPage.distanceValue,
              delay: 0.2,
            },
            {
              icon: Coffee,
              title: t.runClubPage.pace,
              value: (
                <>
                  {t.runClubPage.chillGroup} <span className="text-orange-400">(6:00)</span>
                  <br />
                  {t.runClubPage.fastGroup} <span className="text-orange-400">(4:30)</span>
                </>
              ),
              delay: 0.3,
            },
            {
              icon: Package,
              title: t.runClubPage.bagDrop,
              value: t.runClubPage.bagDropValue,
              delay: 0.4,
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="border-2 border-white p-6 bg-black/50 backdrop-blur-sm hover:bg-white/5 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: item.delay, duration: 0.6 }}
              whileHover={{ scale: 1.02 }}
            >
              <item.icon className="w-8 h-8 mb-4 text-orange-400" />
              <h3 className="text-sm font-bold tracking-widest mb-3 text-white/60">
                {item.title}
              </h3>
              <p className="text-lg font-semibold">{item.value}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* The Route - Visual Map */}
      <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl font-black italic mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {t.runClubPage.route}
        </motion.h2>

        <motion.div
          className="relative aspect-video max-w-4xl mx-auto overflow-hidden border-2 border-white"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Map Image */}
          <Image
            src="https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?q=80&w=2070&auto=format&fit=crop"
            alt="Route map along Promenade des Anglais"
            fill
            className="object-cover brightness-75"
          />
          
          {/* Neon Path Overlay Effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#002FA7]/20 via-blue-500/30 to-[#002FA7]/20" />

          {/* Route Badge */}
          <motion.div
            className="absolute top-6 left-6 bg-black/80 border-2 border-[#002FA7] px-6 py-3 backdrop-blur-sm"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <p className="text-[#002FA7] font-bold tracking-widest text-sm">
              {t.runClubPage.routeName}
            </p>
            <p className="text-white/80 text-xs mt-1">{t.runClubPage.routeType}</p>
          </motion.div>
        </motion.div>
      </section>

      {/* Community Block - Zero Maintenance */}
      <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl font-black italic mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {t.runClubPage.joinCrew}
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Strava Widget Placeholder */}
          <motion.div
            className="border-2 border-white bg-black/50 backdrop-blur-sm p-8 min-h-[400px] flex flex-col items-center justify-center"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-center">
              <p className="text-sm font-bold tracking-widest text-white/60 mb-4">
                {t.runClubPage.latestStats}
              </p>
              <div className="border-2 border-dashed border-white/30 p-12 rounded-lg">
                <p className="text-white/50 text-sm">
                  {t.runClubPage.stravaWidget}
                  <br />
                  <span className="text-xs">{t.runClubPage.stravaNote}</span>
                </p>
              </div>
            </div>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            className="flex flex-col justify-center gap-6"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Strava Button */}
            <motion.a
              href="#"
              className="group relative bg-orange-500 hover:bg-orange-600 text-white font-bold py-6 px-8 rounded-full text-center text-lg tracking-wide transition-all duration-300 flex items-center justify-center gap-3 overflow-hidden"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="relative z-10">{t.runClubPage.joinStrava}</span>
              <ExternalLink className="w-5 h-5 relative z-10" />
              <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.a>

            {/* WhatsApp Button */}
            <motion.a
              href="#"
              className="group relative bg-green-500 hover:bg-green-600 text-white font-bold py-6 px-8 rounded-full text-center text-lg tracking-wide transition-all duration-300 flex items-center justify-center gap-3 overflow-hidden"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="relative z-10">{t.runClubPage.joinWhatsApp}</span>
              <ExternalLink className="w-5 h-5 relative z-10" />
              <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-green-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.a>

            {/* Info Text */}
            <p className="text-white/60 text-sm text-center mt-4">
              {t.runClubPage.communityNote}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-16 px-4 border-t border-white/20">
        <motion.div
          className="text-center max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-2xl md:text-3xl font-light mb-4">
            {t.runClubPage.firstTime} <span className="font-bold italic text-orange-400">{t.runClubPage.firstTimeHighlight}</span>
          </p>
          <p className="text-white/60">
            {t.runClubPage.firstTimeNote}
          </p>
        </motion.div>
      </section>
    </div>
  );
}
