import { Instagram, Facebook, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-raw-black text-stark-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Logo & Tagline */}
          <div>
            <h2 className="text-5xl font-black mb-4">
              <span className="text-electric-blue">SMILE</span>
            </h2>
            <p className="text-gray-400 font-technical text-sm">
              MORE THAN COFFEE.<br />
              ICE. COFFEE. VIBES. NICE.
            </p>
          </div>

          {/* Location */}
          <div>
            <h3 className="font-bold uppercase tracking-wider mb-4 text-electric-blue">
              Location
            </h3>
            <p className="text-gray-300 mb-2">
              22bis Boulevard Stalingrad<br />
              Nice, France
            </p>
            <p className="font-technical text-sm text-gray-400 mt-4">
              OPEN DAILY<br />
              8:30 - 17:30
            </p>
          </div>

          {/* Connect */}
          <div>
            <h3 className="font-bold uppercase tracking-wider mb-4 text-electric-blue">
              Connect
            </h3>
            <div className="flex gap-4 mb-6">
              <a
                href="#"
                className="w-10 h-10 border-2 border-stark-white rounded-full flex items-center justify-center hover:bg-electric-blue hover:border-electric-blue transition-all"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 border-2 border-stark-white rounded-full flex items-center justify-center hover:bg-electric-blue hover:border-electric-blue transition-all"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 border-2 border-stark-white rounded-full flex items-center justify-center hover:bg-electric-blue hover:border-electric-blue transition-all"
              >
                <Mail size={20} />
              </a>
            </div>
            <div className="mt-6">
              <input
                type="email"
                placeholder="Newsletter signup"
                className="w-full bg-transparent border-2 border-gray-600 px-4 py-2 text-sm focus:border-electric-blue outline-none transition-colors"
              />
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-500 text-sm font-technical">
            © 2026 CAFE WITH SMILE. ALL RIGHTS RESERVED.
          </p>
        </div>
      </div>
    </footer>
  );
}
