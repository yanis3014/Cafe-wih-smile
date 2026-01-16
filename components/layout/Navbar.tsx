'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Button from '@/components/ui/Button';

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Full Menu', href: '/menu' },
    { name: 'Run Club', href: '/run-club' },
    { name: 'Merch', href: '/merch' },
    { name: 'Location', href: '/location' },
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
          <Button variant="primary" className="ml-4">
            Order Now
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
            <Button variant="primary" className="mt-2">
              Order Now
            </Button>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}
