"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ShoppingBag, Tag, Package } from "lucide-react";
import { useLanguage } from '@/context/LanguageContext';

export default function MerchPage() {
  const { t } = useLanguage();
  const products = [
    {
      id: 1,
      name: "Heavy Duty Tote",
      price: "€15.00",
      tag: "ORGANIC COTTON",
      specs: ["GSM: 340g", "PRINT: SILKSCREEN", "SIZE: 38x42cm"],
      image: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?q=80&w=2070&auto=format&fit=crop",
      soldOut: false,
    },
    {
      id: 2,
      name: "Signature Tee - White",
      price: "€35.00",
      tag: "OVERSIZED FIT",
      specs: ["GSM: 240g", "PRINT: SILKSCREEN", "FIT: OVERSIZED"],
      image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=2080&auto=format&fit=crop",
      soldOut: false,
    },
    {
      id: 3,
      name: "Nice People Cap",
      price: "€25.00",
      tag: "SOLD OUT",
      specs: ["MATERIAL: COTTON", "CLOSURE: STRAP", "EMBROIDERED"],
      image: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?q=80&w=2036&auto=format&fit=crop",
      soldOut: true,
    },
  ];

  return (
    <div className="min-h-screen bg-concrete-grey">
      {/* Hero Section - The Lookbook */}
      <section className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">
        {/* Left Panel - Typography */}
        <motion.div
          className="flex flex-col justify-center px-8 md:px-16 py-20 bg-concrete-grey"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <p className="text-sm font-bold tracking-widest text-raw-black/60 mb-4">
              {t.merchPage.brand}
            </p>
            <h1 className="text-5xl md:text-6xl lg:text-8xl font-black italic tracking-tight mb-6">
              {t.merchPage.title}
              <br />
              <span className="text-electric-blue">{t.merchPage.titleHighlight}</span>
            </h1>
            <div className="border-l-4 border-electric-blue pl-6 mb-8">
              <p className="text-2xl font-bold text-raw-black mb-2">{t.merchPage.drop}</p>
              <p className="text-raw-black/70 font-light">
                {t.merchPage.subtitle}
              </p>
            </div>
            <div className="flex gap-4 items-center">
              <ShoppingBag className="text-electric-blue" size={24} />
              <p className="text-sm font-mono text-raw-black/60">
                {t.merchPage.available}
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Panel - Hero Image */}
        <motion.div
          className="relative min-h-[500px] lg:min-h-screen"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Image
            src="https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?q=80&w=2070&auto=format&fit=crop"
            alt="Model wearing streetwear"
            fill
            className="object-cover"
            priority
          />
          {/* Overlay Badge */}
          <div className="absolute bottom-8 left-8 bg-electric-blue text-stark-white px-6 py-3 border-2 border-raw-black">
            <p className="font-bold tracking-wider text-sm">{t.merchPage.designedIn}</p>
          </div>
        </motion.div>
      </section>

      {/* The Drop - Products Grid */}
      <section className="py-20 px-6 md:px-8 max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black italic mb-4">
            {t.merchPage.theDrop}
          </h2>
          <p className="text-raw-black/60 font-mono text-sm">
            {t.merchPage.itemsAvailable}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -4 }}
              className="bg-stark-white border-2 border-raw-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all"
            >
              {/* Product Image */}
              <div className="relative h-80 overflow-hidden border-b-2 border-raw-black">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
                {/* Tag Overlay */}
                <div className="absolute top-4 left-4">
                  <span
                    className={`px-3 py-1 text-xs font-bold border-2 border-raw-black ${
                      product.soldOut
                        ? "bg-red-500 text-stark-white"
                        : "bg-electric-blue text-stark-white"
                    }`}
                  >
                    {product.tag}
                  </span>
                </div>
              </div>

              {/* Product Details - Spec Sheet Style */}
              <div className="p-6">
                <h3 className="text-2xl font-black mb-2">{product.name}</h3>
                <p className="text-3xl font-black text-electric-blue mb-4">
                  {product.price}
                </p>

                {/* Technical Specs */}
                <div className="border-t-2 border-raw-black pt-4 mb-6">
                  <p className="text-xs font-bold tracking-widest text-raw-black/60 mb-3">
                    SPEC SHEET
                  </p>
                  <div className="space-y-2">
                    {product.specs.map((spec, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-2 font-mono text-xs"
                      >
                        <Tag size={12} className="text-electric-blue" />
                        <span>{spec}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA Button */}
                <motion.button
                  whileHover={{ scale: product.soldOut ? 1 : 1.02 }}
                  whileTap={{ scale: product.soldOut ? 1 : 0.98 }}
                  disabled={product.soldOut}
                  className={`w-full pill px-6 py-3 font-bold uppercase text-sm tracking-wider border-2 border-raw-black transition-all ${
                    product.soldOut
                      ? "bg-gray-300 text-raw-black/40 cursor-not-allowed"
                      : "bg-electric-blue text-stark-white hover:bg-raw-black hover:text-electric-blue"
                  }`}
                >
                  {product.soldOut ? t.merchPage.soldOut : t.merchPage.addToCart}
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Manifesto Block */}
      <section className="py-16 px-6 border-t-2 border-raw-black bg-stark-white">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Package className="mx-auto mb-6 text-electric-blue" size={48} />
          <h3 className="text-3xl md:text-4xl font-black italic mb-4">
            {t.merchPage.manifesto}
          </h3>
          <p className="text-xl font-light text-raw-black/80 mb-2">
            {t.merchPage.manifestoTitle}
          </p>
          <p className="text-sm font-mono text-raw-black/60">
            {t.merchPage.manifestoSubtitle}
          </p>
        </motion.div>
      </section>
    </div>
  );
}
