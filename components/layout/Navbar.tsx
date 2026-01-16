'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { Menu, X, Globe } from 'lucide-react';
import Button from '@/components/ui/Button';
import { useLanguage } from '@/context/LanguageContext';

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { language, t, toggleLanguage } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t.nav.menu, href: '/menu' },
    { name: t.nav.runClub, href: '/run-club' },
    { name: t.nav.merch, href: '/merch' },
    { name: t.nav.location, href: '/location' },
  ];

  const isRunClubPage = pathname === '/run-club';

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass-dark py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="text-2xl font-black tracking-tight">
          <span className="text-electric-blue">CAFE</span>
          <span className={scrolled || isRunClubPage ? 'text-stark-white' : 'text-raw-black'}>
            {' '}WITH SMILE
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`font-semibold uppercase text-sm tracking-wider hover:text-electric-blue transition-colors ${
                scrolled || isRunClubPage ? 'text-stark-white' : 'text-raw-black'
              }`}
            >
              {link.name}
            </a>
          ))}
          
          {/* Language Switcher */}
          <button
            onClick={toggleLanguage}
            className={`flex items-center gap-2 px-3 py-1.5 rounded-full border-2 transition-all ${
              scrolled || isRunClubPage 
                ? 'border-stark-white text-stark-white hover:bg-stark-white hover:text-raw-black' 
                : 'border-raw-black text-raw-black hover:bg-raw-black hover:text-stark-white'
            }`}
          >
            <Globe size={14} />
            <span className="font-bold text-xs">
              {language === 'en' ? 'FR' : 'EN'}
            </span>
          </button>
          
          <Button variant="primary" className="ml-4">
            {t.nav.orderNow}
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden"
        >
          {mobileMenuOpen ? (
            <X className={scrolled || isRunClubPage ? 'text-stark-white' : 'text-raw-black'} size={28} />
          ) : (
            <Menu className={scrolled || isRunClubPage ? 'text-stark-white' : 'text-raw-black'} size={28} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden glass-dark mt-4 mx-6 p-6 rounded-lg"
        >
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="font-semibold uppercase text-sm tracking-wider text-stark-white hover:text-electric-blue transition-colors"
              >
                {link.name}
              </a>
            ))}
            
            {/* Mobile Language Switcher */}
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-2 px-4 py-2 rounded-full border-2 border-stark-white text-stark-white hover:bg-stark-white hover:text-raw-black transition-all w-fit"
            >
              <Globe size={16} />
              <span className="font-bold text-sm">
                {language === 'en' ? 'Français' : 'English'}
              </span>
            </button>
            
            <Button variant="primary" className="mt-2">
              {t.nav.orderNow}
            </Button>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}
