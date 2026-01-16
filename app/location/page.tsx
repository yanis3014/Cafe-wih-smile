export default function LocationPage() {
  return (
    <div className="min-h-screen bg-[#F3F4F6]">
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl lg:text-8xl font-black text-[#002FA7] tracking-tight mb-4">
            THE HQ
          </h1>
          <p className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-800 tracking-wide">
            22BIS BD STALINGRAD, NICE
          </p>
        </div>
      </section>

      {/* Map Section - The Centerpiece */}
      <section className="px-6 pb-12">
        <div className="max-w-7xl mx-auto">
          <div className="relative overflow-hidden rounded-2xl shadow-2xl border-4 border-[#002FA7]">
            {/* Custom Styled Google Maps Iframe */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2884.234567890123!2d7.2885!3d43.7034!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12cdd0106a1cb0e1%3A0x40819a5fd979a30!2s22bis%20Boulevard%20de%20Stalingrad%2C%2006300%20Nice%2C%20France!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-64 md:h-96 w-full grayscale contrast-125 invert brightness-90 hue-rotate-180"
              title="CAFE WITH SMILE Location Map"
            />
          </div>
        </div>
      </section>

      {/* Info Grid */}
      <section className="px-6 pb-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Address Block */}
            <div className="bg-white rounded-xl p-8 shadow-lg border-l-4 border-[#002FA7]">
              <h3 className="text-sm font-bold text-[#002FA7] mb-3 tracking-wider uppercase">
                Address
              </h3>
              <p className="text-3xl md:text-4xl font-black text-gray-900 leading-tight">
                22BIS BD<br />STALINGRAD
              </p>
              <p className="text-lg font-semibold text-gray-600 mt-2">
                06300 NICE
              </p>
            </div>

            {/* Hours Block */}
            <div className="bg-white rounded-xl p-8 shadow-lg border-l-4 border-[#002FA7]">
              <h3 className="text-sm font-bold text-[#002FA7] mb-3 tracking-wider uppercase">
                Opening Hours
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold text-gray-900">Mon - Sat</span>
                  <span className="text-lg font-semibold text-gray-700">08:30 - 17:30</span>
                </div>
                <div className="h-px bg-gray-200"></div>
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold text-gray-900">Sunday</span>
                  <span className="text-lg font-semibold text-gray-700">09:30 - 17:30</span>
                </div>
              </div>
            </div>

            {/* Transport/Contact Block */}
            <div className="bg-white rounded-xl p-8 shadow-lg border-l-4 border-[#002FA7]">
              <h3 className="text-sm font-bold text-[#002FA7] mb-3 tracking-wider uppercase">
                Get Here
              </h3>
              <div className="space-y-4">
                <div>
                  <p className="text-sm font-semibold text-gray-500 mb-1">TRAM</p>
                  <p className="text-xl font-bold text-gray-900">
                    L2: Port Lympia
                  </p>
                </div>
                <div className="h-px bg-gray-200"></div>
                <div>
                  <p className="text-sm font-semibold text-gray-500 mb-1">EMAIL</p>
                  <a 
                    href="mailto:hello@cafewithsmile.com"
                    className="text-lg font-bold text-[#002FA7] hover:underline break-all"
                  >
                    hello@cafewithsmile.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Floating Action Button */}
      <div className="fixed bottom-8 right-8 z-50">
        <a
          href="https://www.google.com/maps/dir/?api=1&destination=22bis+Boulevard+de+Stalingrad,+06300+Nice,+France"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-[#002FA7] text-white px-8 py-4 rounded-full font-bold text-lg shadow-2xl hover:bg-[#001f7a] transition-all duration-300 hover:scale-105 hover:shadow-[#002FA7]/50"
        >
          <svg 
            className="w-6 h-6" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" 
            />
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" 
            />
          </svg>
          OPEN IN GOOGLE MAPS
        </a>
      </div>
    </div>
  );
}
